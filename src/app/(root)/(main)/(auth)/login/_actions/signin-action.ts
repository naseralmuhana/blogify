"use server"

import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

type ResendSignInProps = {
  method: "resend"
  email: string
  callbackUrl?: string | null
}

type ProviderSignInProps = {
  method: "provider"
  provider: "google" | "github"
  callbackUrl?: string | null
}

type SignInActionProps = ResendSignInProps | ProviderSignInProps

export const signInAction = async (props: SignInActionProps) => {
  const { method, callbackUrl } = props
  const redirectTo = callbackUrl || DEFAULT_LOGIN_REDIRECT

  if (method === "resend") {
    const { email } = props
    await signIn("resend", { email, redirectTo })
  } else if (method === "provider") {
    const { provider } = props
    await signIn(provider, { redirectTo })
  } else {
    throw new Error("Invalid sign-in method")
  }
}
