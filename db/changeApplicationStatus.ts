"use server";

import { db } from "@/db";
import { applications } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function updateApplicationStatus(
  applicationId: string,
  status: "ACCEPTED" | "REJECTED" | "PENDING"
) {
  await db
    .update(applications)
    .set({ status })
    .where(eq(applications.id, applicationId));

  revalidatePath("/dashboard");

  return { success: true };
}