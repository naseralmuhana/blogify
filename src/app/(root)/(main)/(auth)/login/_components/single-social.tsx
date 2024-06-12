"use client"

import { Button } from "@/components/ui/button"
import { signInAction } from "@/actions/auth/signin-action"
import { useQueryParam } from "@/hooks/use-query-param"

interface SingleSocialProps {
  children: React.ReactNode
  provider: "google" | "github"
  label?: string
}

export const SingleSocial = ({
  provider,
  label,
  children,
}: SingleSocialProps) => {
  const callbackUrl = useQueryParam()

  const handleClick = (provider: "github" | "google") => {
    signInAction({ method: "provider", provider, callbackUrl })
    console.log({ provider })
  }

  return (
    <Button
      variant="outline"
      size="md-rounded"
      className="w-[80%]"
      onClick={() => handleClick(provider)}
    >
      {children}
      <span className="capitalize">{label ?? provider}</span>
    </Button>
  )
}
