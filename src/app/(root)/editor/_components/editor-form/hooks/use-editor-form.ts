"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { useEditorStore } from "../../../_store"

const editorSchema = z.object({
  bannerUrl: z.string().trim().min(1, {
    message: "Banner is required.",
  }),
  title: z.string().trim().min(1, {
    message: "Title is required.",
  }),
  content: z.string().trim().min(1, {
    message: "Content is required.",
  }),
  description: z.string().optional(),
  tags: z.string().array().optional(),

  isDraft: z.boolean().optional(),
})

type EditorFormValuesType = z.infer<typeof editorSchema>

export const useEditorForm = () => {
  const {
    blog: { bannerUrl, title, content },
  } = useEditorStore((state) => state)

  const form = useForm<EditorFormValuesType>({
    resolver: zodResolver(editorSchema),
    defaultValues: { bannerUrl, title, content },
  })

  const onSubmit = (values: EditorFormValuesType) => {
    console.log({ values })
  }

  return { form, onSubmit }
}
