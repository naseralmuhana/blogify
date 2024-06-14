"use client"

import { BaseSyntheticEvent } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { useEditorStore } from "../../../_store"
import { editorFormSchema } from "../schema"

type EditorFormValuesType = z.infer<typeof editorFormSchema>

type onSubmitType = (
  values: EditorFormValuesType,
  e: BaseSyntheticEvent<object, any, any> | undefined,
) => void

export const useEditorForm = () => {
  const {
    blog: { bannerUrl, title, content },
    setBlog,
    setIsPublishDialogOpen,
  } = useEditorStore((state) => state)

  const form = useForm<EditorFormValuesType>({
    resolver: zodResolver(editorFormSchema),
    defaultValues: { bannerUrl, title, content },
  })

  const onSubmit: onSubmitType = (values, e) => {
    const submitButtonName = getSubmitButtonName(e)
    const { content } = values

    if (submitButtonName === "draft") {
    } else if (submitButtonName === "continue") {
      setBlog({ content })
      setIsPublishDialogOpen(true)
    }
  }

  return { form, onSubmit }
}

function getSubmitButtonName(
  e: BaseSyntheticEvent<object, any, any> | undefined,
) {
  const submitEvent = e?.nativeEvent as SubmitEvent
  const hTMLButtonElement = submitEvent.submitter as HTMLButtonElement

  return hTMLButtonElement.name
}
