import { z } from "zod";

export const emailSchema = z.object({
  from: z.string(),
  subject: z.string(),
  text: z.string(),
  html: z.string(),
});
