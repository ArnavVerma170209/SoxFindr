import { db } from "@/db";
import { users } from "@/db/schema";
import { ne } from "drizzle-orm";

export const getAllUsers = async () => {
  const allUsers = await db
    .select()
    .from(users)
    .where(ne(users.role, "SUPER ADMIN"));

  return allUsers;
};