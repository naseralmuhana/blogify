"use client"

import { Form, FormField } from "@/components/ui/form"
import { TitleField, BannerField, ContentField } from "./components"
import { useEditorForm } from "./hooks/use-editor-form"
import { Separator } from "@/components/ui/separator"

export type EditorFieldsType = {
  bannerUrl: string
  title: string
  content: string
}

export const EditorForm = () => {
  const { form, onSubmit } = useEditorForm()

  return (
    <Form {...form}>
      <form
        id="editor-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <FormField
          control={form.control}
          name="bannerUrl"
          render={({ field }) => <BannerField field={field} />}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => <TitleField field={field} />}
        />
        <Separator />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => <ContentField field={field} />}
        />
      </form>
    </Form>
  )
}
