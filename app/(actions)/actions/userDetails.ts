"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { userDetailsSchema } from "@/lib/validations/userDetails";

export async function updateUserDetails(data: unknown) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const parsed = userDetailsSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Invalid details");
  }

  await db
    .update(users)
    .set({
      branch: parsed.data.branch,
      year: parsed.data.year,
    })
    .where(eq(users.id, userId));

  return { success: true };
}