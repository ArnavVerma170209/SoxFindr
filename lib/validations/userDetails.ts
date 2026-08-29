import { z } from "zod";

export const userDetailsSchema = z.object({
  branch: z.string().min(1, "Please select your branch"),
  year: z.number().min(1, "Please select your year"),
});

export type UserDetails = z.infer<typeof userDetailsSchema>;