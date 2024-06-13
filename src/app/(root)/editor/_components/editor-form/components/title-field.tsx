"use client"

import { ChangeEvent, KeyboardEvent } from "react"
import { ControllerRenderProps } from "react-hook-form"

import type { EditorFieldsType } from "../editor-form"

import { FormItemWrapper } from "@/components/shared/form-item-wrapper"
import { Textarea } from "@/components/ui/textarea"
import { useEditorStore } from "../../../_store"

interface TitleFieldProps {
  field: ControllerRenderProps<EditorFieldsType, "title">
}

export const TitleField = ({ field }: TitleFieldProps) => {
  const { onChange, value, ...rest } = field

  const { title } = useEditorStore((state) => state.blog)

  const handleTitleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // To prevent the enter key to go to new line
    if (e.key == "Enter") e.preventDefault()
  }

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textareaEle = e.target

    textareaEle.style.height = "auto"
    textareaEle.style.height = textareaEle.scrollHeight + "px"

    onChange(textareaEle.value)
  }

  return (
    <FormItemWrapper>
      <Textarea
        className="mt-6 resize-none pl-0 text-2xl font-medium leading-tight sm:text-3xl md:mt-10 md:text-4xl"
        variant="bulk"
        placeholder="Blog title"
        value={title || value}
        onChange={handleTitleChange}
        onKeyDown={handleTitleKeyDown}
        {...rest}
      />
    </FormItemWrapper>
  )
}
