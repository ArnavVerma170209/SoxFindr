"use server";

import { auth } from "@clerk/nextjs/server";
import { eq, and } from "drizzle-orm";

import { db } from "@/db";
import { applicationFormSchema } from "@/lib/validations/applicationForm";
import { societyData } from "@/db/seed";
import { applications, departments } from "@/db/schema";

export async function createApplication(data: unknown) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const parsed = applicationFormSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Invalid details");
  }

  // Find society
  var societyId = 1

  for (let i = 0; i < societyData.length; i++) {
    if (societyData[i].name === parsed.data.society) {
      societyId = societyData[i].id;
      break;
    }
  }

  // Find department belonging to this society
  const department = await db
    .select({ id: departments.id })
    .from(departments)
    .where(
      and(
        eq(departments.societyId, societyId),
        eq(departments.name, parsed.data.department)
      )
    )
    .limit(1);

  if (!department[0]) {
    throw new Error("Invalid department");
  }

  const departmentId = department[0].id;

  const id = `${userId}-${societyId}`;

  await db
    .insert(applications)
    .values({
      id,
      societyId,
      studentId: userId,
      whyYou: parsed.data.whyYou,
      departmentId,
    })
    .onConflictDoUpdate({
      target: applications.id,
      set: {
        whyYou: parsed.data.whyYou,
        departmentId,
      },
    });

  return { success: true };
}