"use client"

import { MdEmail } from "react-icons/md"

import { useLoginForm } from "./hooks/use-login-form"
import { Form, FormField } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useGlobalStore } from "@/store"
import { ClipLoader } from "@/components/ui/clip-loader"
import { FormItemWrapper } from "@/components/shared/form-item-wrapper"

export const LoginForm = () => {
  const { form, onSubmit } = useLoginForm()
  const isLoading = useGlobalStore((state) => state.isLoading)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItemWrapper>
              <Input
                placeholder="name@example.com"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                suffixBefore={{ icon: MdEmail }}
                className="h-auto"
                disabled={isLoading}
                {...field}
              />
            </FormItemWrapper>
          )}
        />
        <div className="flex w-full items-center justify-center">
          <Button
            size="md-rounded"
            className="w-[80%] capitalize"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? <ClipLoader /> : "Sign In with Email"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
