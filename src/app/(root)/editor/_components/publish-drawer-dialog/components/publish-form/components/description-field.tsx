"use client"

import { ControllerRenderProps } from "react-hook-form"
import { ChangeEvent, KeyboardEvent } from "react"

import type { PublishFieldsType } from "../publish-form"

import { Textarea } from "@/components/ui/textarea"
import { FormDescription } from "@/components/ui/form"
import { FormItemWrapper } from "@/components/shared/form-item-wrapper"
import { useEditorStore } from "@/app/(root)/editor/_store"

const limitedCharacter = 300

interface DescriptionFieldProps {
  field: ControllerRenderProps<PublishFieldsType, "description">
}
export const DescriptionField = ({ field }: DescriptionFieldProps) => {
  const { onChange, value, ...rest } = field

  const { description } = useEditorStore((state) => state.blog)
  const setBlog = useEditorStore((state) => state.setBlog)

  const handleTitleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // To prevent the enter key to go to new line
    if (e.key == "Enter") e.preventDefault()
  }

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textareaEle = e.target

    textareaEle.style.height = 112 + "px"
    textareaEle.style.height = textareaEle.scrollHeight + "px"

    setBlog({ description: textareaEle.value })
    onChange(textareaEle.value)
  }

  return (
    <FormItemWrapper label="Description">
      <>
        <Textarea
          placeholder="Blog Description"
          className="min-h-28 resize-none overflow-y-hidden sm:min-h-28"
          maxLength={limitedCharacter}
          onKeyDown={handleTitleKeyDown}
          onChange={handleTitleChange}
          value={description || value}
          {...rest}
        />
        <FormDescription className="flex align-baseline sm:justify-between">
          <span className="hidden sm:block">
            Short description about your blog
          </span>
          <span className="ml-auto flex items-center justify-center text-xs">
            <span className="text-foreground">
              {!!description ? limitedCharacter - description.length : 0}
            </span>
            &nbsp;characters left.
          </span>
        </FormDescription>
      </>
    </FormItemWrapper>
  )
}
