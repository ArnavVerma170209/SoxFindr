import { z } from "zod";

export const applicationFormSchema = z.object({
  society: z.string().min(1, "Please select your society"),
  whyYou: z.string().min(1, "Please explain yourself"),
  department: z.string().min(1, "Please select your department"),
});

export type ApplicationForm = z.infer<typeof applicationFormSchema>;