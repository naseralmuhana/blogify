"use client"

import { ControllerRenderProps } from "react-hook-form"
import { useState } from "react"

import type { PublishFieldsType } from "../publish-form"

import { FormItemWrapper } from "@/components/shared/form-item-wrapper"
import { TagInput } from "@/components/ui/tag-input"
import { FormDescription } from "@/components/ui/form"
import { useEditorStore } from "@/app/(root)/editor/_store"

interface TagsFieldProps {
  field: ControllerRenderProps<PublishFieldsType, "tags">
}

const maxTags = 5

export const TagsField = ({ field }: TagsFieldProps) => {
  const { onChange } = field

  const tags = useEditorStore((state) => state.blog.tags)
  const setBlog = useEditorStore((state) => state.setBlog)

  const [tagsList, setTagsList] = useState<string[] | undefined>(tags)

  const handleRemoveTags = (tagToRemove: string) => {
    setBlog({ tags: tagsList?.filter((tag) => tag !== tagToRemove) })
  }

  return (
    <FormItemWrapper label="Tags">
      <>
        <TagInput
          {...field}
          placeholder="Enter a topic"
          disabled={tagsList?.length === maxTags}
          onRemoveTag={handleRemoveTags}
          tags={tagsList}
          setTags={(newTags) => {
            setTagsList(newTags)
            onChange(newTags as [string, ...string[]])
            setBlog({ tags: newTags as [string, ...string[]] })
          }}
        />
        <FormDescription className="flex align-baseline sm:justify-between">
          <span className="hidden sm:block">
            Add up to 5 tags to categorize your blog
          </span>

          <span className="ml-auto flex items-center justify-center text-xs text-foreground">
            {`${tagsList?.length}`}/{`${maxTags}`}
            <span className="text-muted-foreground">&nbsp;tags</span>
          </span>
        </FormDescription>
      </>
    </FormItemWrapper>
  )
}
