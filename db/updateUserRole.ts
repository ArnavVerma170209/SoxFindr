"use server";

import { db } from "@/db";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { users } from "./schema";

export async function updateUserRole(
  userId: string,
  role: "STUDENT" | "ADMIN"
) {
  await db
    .update(users)
    .set({ role })
    .where(eq(users.id, userId));

  revalidatePath("/dashboard");

  return { success: true };
}