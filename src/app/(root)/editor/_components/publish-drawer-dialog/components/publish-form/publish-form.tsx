"use client"

import { Form, FormField } from "@/components/ui/form"
import { usePublishForm } from "./hooks/use-publish-form"
import { TitleField } from "./components/title-field"
import { DescriptionField } from "./components/description-field"
import { TagsField } from "./components/tags-field"

export type PublishFieldsType = {
  title: string
  description: string
  tags: string[]
}

export const PublishForm = () => {
  const { form, onSubmit } = usePublishForm()

  return (
    <Form {...form}>
      <form
        id="publish-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => <TitleField field={field} />}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => <DescriptionField field={field} />}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => <TagsField field={field} />}
        />
      </form>
    </Form>
  )
}
