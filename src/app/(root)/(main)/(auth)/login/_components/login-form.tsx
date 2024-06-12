"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { MdEmail } from "react-icons/md"

import { signInAction } from "@/actions/auth/signin-action"
import { useQueryParam } from "@/hooks/use-query-param"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .min(1, "Email is required.")
    .email("Invalid email address."),
})

type LoginFormType = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const callbackUrl = useQueryParam()

  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "" },
  })

  const onSubmit = async (values: LoginFormType) => {
    const { email } = values
    signInAction({ method: "resend", email, callbackUrl })
  }
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
