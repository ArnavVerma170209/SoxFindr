// userApplication.ts
import { db } from "@/db"; // adjust to wherever your db client actually lives
import { applications } from "@/db/schema"; // adjust to your actual schema path
import { eq } from "drizzle-orm";

export const getUserApplications = async (userId: string) => {
  const userApplications = await db
    .select()
    .from(applications)
    .where(eq(applications.studentId, userId));

  return userApplications;
};