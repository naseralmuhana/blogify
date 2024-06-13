"use client"

import { ControllerRenderProps } from "react-hook-form"

import type { EditorFieldsType } from "../editor-form"

import { Input } from "@/components/ui/input"
import { FormItemWrapper } from "@/components/shared/form-item-wrapper"

interface ContentFieldProps {
  field: ControllerRenderProps<EditorFieldsType, "content">
}

//TODO: Create a rich editor for the content field */

export const ContentField = ({ field }: ContentFieldProps) => {
  const { onChange, ...rest } = field

  // const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange(e.target.value)
  // }

  return (
    <FormItemWrapper>
      <Input onChange={onChange} placeholder="Blog Content" {...rest} />
    </FormItemWrapper>
  )
}
