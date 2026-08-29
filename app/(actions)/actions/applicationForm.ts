"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { applications} from "@/db/schema";
import { eq } from "drizzle-orm";
import { applicationFormSchema } from "@/lib/validations/applicationForm";
import { societyData } from "@/db/seed";
import { nanoid } from "zod";

export async function createApplication(data: unknown) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const parsed = applicationFormSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error("Invalid details");
  }

  const societies = societyData
  var societyId = 1

  for(let i=0;i<societies.length;i++){
    if (societies[i].name === parsed.data.society){
        societyId = societies[i].id
    }
  }

  const id = `${userId}-${societyId}`
  await db
    .insert(applications)
    .values({
      id: id,
      societyId : societyId,
      studentId : userId,
      whyYou : parsed.data.whyYou
    })

  return { success: true };
}