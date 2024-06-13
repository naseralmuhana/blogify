"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { signInAction } from "../actions/signin-action"
import { useQueryParam } from "@/hooks/use-query-param"

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .min(1, "Email is required.")
    .email("Invalid email address."),
})

type LoginFormType = z.infer<typeof loginSchema>

export const useLoginForm = () => {
  const callbackUrl = useQueryParam()

  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "" },
  })

  const onSubmit = async (values: LoginFormType) => {
    const { email } = values
    signInAction({ method: "resend", email, callbackUrl })
  }

  return { form, onSubmit }
}
