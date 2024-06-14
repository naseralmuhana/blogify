"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { signInAction } from "../actions/signin-action"
import { useQueryParam } from "@/hooks/use-query-param"
import { loginFormSchema } from "../schema"
import { useGlobalStore } from "@/store"

type LoginFormType = z.infer<typeof loginFormSchema>

export const useLoginForm = () => {
  const setIsLoading = useGlobalStore((state) => state.setIsLoading)

  const callbackUrl = useQueryParam()

  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: "" },
  })

  const onSubmit = async (values: LoginFormType) => {
    const { email } = values

    try {
      setIsLoading(true)
      await signInAction({ method: "resend", email, callbackUrl })
    } catch (error) {
      console.error("useLoginForm", error)
    } finally {
      setIsLoading(false)
    }
  }

  return { form, onSubmit }
}
