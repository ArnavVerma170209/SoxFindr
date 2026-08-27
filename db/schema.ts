import {
  pgTable,
  text,
  integer,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", [
  "STUDENT",
  "ADMIN",
]);

export const statusEnum = pgEnum("status", [
  "PENDING",
  "ACCEPTED",
  "REJECTED",
]);

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  branch: text("branch"),
  year: integer("year"),
  role: roleEnum("role").default("STUDENT").notNull(),
});

export const societies = pgTable("societies", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  deadline: timestamp("deadline").notNull(),
});

export const applications = pgTable("applications", {
  id: text("id").primaryKey(),

  whyYou: text("why_you").notNull(),

  status: statusEnum("status")
    .default("PENDING")
    .notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  studentId: text("student_id")
    .notNull()
    .references(() => users.id),

  societyId: text("society_id")
    .notNull()
    .references(() => societies.id),
});