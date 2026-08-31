import { db } from "@/db";
import { users } from "@/db/schema";

export const getAllUsers = async () => {
  const allUsers = await db
    .select()
    .from(users)

  return allUsers;
};