import { z } from "zod"

export const loginFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .min(1, "Email is required.")
    .email("Invalid email address."),
})
