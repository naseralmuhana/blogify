import { z } from "zod"

export const editorFormSchema = z.object({
  bannerUrl: z.string().trim().min(1, {
    message: "Banner is required.",
  }),
  title: z.string().trim().min(1, {
    message: "Title is required.",
  }),
  content: z.string().trim().optional(),
  description: z.string().optional(),
  tags: z.string().array().optional(),
  isDraft: z.boolean().optional(),
})
