"use client"

import { ControllerRenderProps } from "react-hook-form"
import { ChangeEvent } from "react"

import type { PublishFieldsType } from "../publish-form"

import { Input } from "@/components/ui/input"
import { FormItemWrapper } from "@/components/shared/form-item-wrapper"
import { useEditorStore } from "@/app/(root)/editor/_store"

interface TitleFieldProps {
  field: ControllerRenderProps<PublishFieldsType, "title">
}

export const TitleField = ({
  field: { onChange, ...rest },
}: TitleFieldProps) => {
  const setBlog = useEditorStore((state) => state.setBlog)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    setBlog({ title: inputValue })
    onChange(inputValue)
  }

  return (
    <FormItemWrapper label="Title">
      <Input placeholder="Blog Title" onChange={handleChange} {...rest} />
    </FormItemWrapper>
  )
}
