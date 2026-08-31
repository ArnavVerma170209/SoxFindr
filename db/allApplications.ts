import { db } from "@/db";
import { applications, societies, departments, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getAllApplications = async () => {
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

      studentId: applications.studentId,
      studentName: users.name,
      studentEmail: users.email,
      studentBranch: users.branch,
      studentYear: users.year,
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
    .leftJoin(
      users,
      eq(applications.studentId, users.id)
    );

  return userApplications;
};