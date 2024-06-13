"use client"

import { MdEmail } from "react-icons/md"

import { useLoginForm } from "./hooks/use-login-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const LoginForm = () => {
  const { form, onSubmit } = useLoginForm()

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="name@example.com"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  suffixBefore={{ icon: MdEmail }}
                  className="h-auto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full items-center justify-center">
          <Button
            size="md-rounded"
            className="w-[80%] capitalize"
            type="submit"
          >
            Sign In with Email
          </Button>
        </div>
      </form>
    </Form>
  )
}
