import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string({ required_error: "Please enter an email" })
    .email("Please enter a valid email"),
  name: z.string({
    required_error: "Please enter your name",
  }),
  password: z
    .string({
      required_error: "Please enter a password",
    })
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character")
    .refine((password) => !/password|123456|qwerty/.test(password), {
      message: "Password is too common",
    }),
});
