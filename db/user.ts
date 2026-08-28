"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from ".";
import { users } from "./schema";
import { eq } from "drizzle-orm";

export async function getOrCreateUser() {
  const { userId } = await auth();

  if (!userId) return null;

  const [existingUser] = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  if (existingUser) return existingUser;

  const client = await clerkClient();
  const clerkUser = await client.users.getUser(userId);

  const email = clerkUser.emailAddresses[0]?.emailAddress;

  if (!email) return null;

  const name = `${clerkUser.firstName ?? ""} ${
    clerkUser.lastName ?? ""
  }`.trim();

  const [newUser] = await db
    .insert(users)
    .values({
      id: userId,
      name: name || "User",
      email,
      role: email === process.env.ADMIN_EMAIL ? "SUPER ADMIN" : "STUDENT",
    })
    .onConflictDoNothing({ target: users.id })
    .returning();

  // If another concurrent call already inserted it, newUser will be undefined here.
  if (newUser) return newUser;

  const [finalUser] = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  return finalUser ?? null;
}