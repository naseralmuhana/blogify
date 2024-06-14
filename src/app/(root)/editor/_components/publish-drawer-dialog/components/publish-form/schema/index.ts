import { z } from "zod"

export const publishFormSchema = z.object({
  bannerUrl: z.string().optional(),
  content: z.string().optional(),

  title: z.string().trim().min(1, {
    message: "Title is required.",
  }),
  description: z.string().trim().min(1, {
    message: "Description is required.",
  }),
  tags: z
    .string()
    .array()
    .min(1, {
      message: "At least one tag is required.",
    })
    .max(10, {
      message: "You can only add up to 10 tags.",
    }),
  isDraft: z.boolean().optional(),
})
