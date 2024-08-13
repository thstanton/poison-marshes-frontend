import { z } from "zod";
import { emailSchema } from "./emailSchema";

export const levelSchema = z.object({
  sequence: z.number(),
  actSequence: z.number(),
  name: z.string(),
  flavourText: z.string(),
  task: z.string(),
  solution: z.string().optional(),
  hints: z.array(z.string()),
  videoId: z.string().optional(),
  email: emailSchema.optional(),
});
