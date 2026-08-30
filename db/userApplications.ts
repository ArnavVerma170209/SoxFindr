import { db } from "@/db";
import { applications, societies, departments } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getUserApplications = async (userId: string) => {
  const userApplications = await db
    .select({
      id: applications.id,
      whyYou: applications.whyYou,
      status: applications.status,
      createdAt: applications.createdAt,

      societyId: applications.societyId,
      societyName: societies.name,

      departmentId: applications.departmentId,
      departmentName: departments.name,
    })
    .from(applications)
    .leftJoin(
      societies,
      eq(applications.societyId, societies.id)
    )
    .leftJoin(
      departments,
      eq(applications.departmentId, departments.id)
    )
    .where(eq(applications.studentId, userId));

  return userApplications;
};