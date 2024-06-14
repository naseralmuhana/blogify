"use client"

import { z } from "zod"
import { BaseSyntheticEvent } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { publishFormSchema } from "../schema"
import { useEditorStore } from "@/app/(root)/editor/_store"

type PublishFormValuesType = z.infer<typeof publishFormSchema>

export const usePublishForm = () => {
  const { title, description, tags } = useEditorStore((state) => state.blog)

  const form = useForm<PublishFormValuesType>({
    resolver: zodResolver(publishFormSchema),
    defaultValues: { title, description, tags },
  })

  const onSubmit = (
    values: PublishFormValuesType,
    e: BaseSyntheticEvent<object, any, any> | undefined,
  ) => {
    const submitButtonName = getSubmitButtonName(e)

    if (submitButtonName === "publish") {
      const formattedTags = tags?.map((tag) => tag.toLowerCase())
    } else if (submitButtonName === "draft") {
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
