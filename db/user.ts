import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from ".";
import { users } from './schema'
import { eq } from "drizzle-orm";
export async function getOrCreateUser(){
    const { userId} = await auth()
    if (!userId) return null;

    const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

    if (existingUser) return existingUser;

    const clerkUser = await currentUser()

    if (!clerkUser) return null;

    const email = clerkUser.emailAddresses[0]?.emailAddress;  
    const name = `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim();
   
    const [newUser] = await db
        .insert(users)
        .values({
        id: clerkUser.id,
        name:name || "User",
        email,
        })
        .returning();

    return newUser;
}