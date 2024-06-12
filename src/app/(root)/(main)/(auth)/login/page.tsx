import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Suspense } from "react"

import { LoginForm } from "./_components/login-form"
import { LoginFormSkeleton } from "./_components/login-form-skeleton"
import { SingleSocial } from "./_components/single-social"
import { SingleSocialSkeleton } from "./_components/single-social-skeleton"

export default function LoginPage() {
  return (
    <div className="w-full sm:max-w-[400px]">
      <div className="mb-8 flex flex-col space-y-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>
      <Suspense fallback={<LoginFormSkeleton />}>
        <LoginForm />
      </Suspense>
      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border/80" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-y-3">
        <Suspense
          fallback={<SingleSocialSkeleton Icon={FcGoogle} label="google" />}
        >
          <SingleSocial provider="google">
            <FcGoogle className="mr-2" />
          </SingleSocial>
        </Suspense>
        <Suspense
          fallback={<SingleSocialSkeleton Icon={FaGithub} label="github" />}
        >
          <SingleSocial provider="github">
            <FaGithub className="mr-2" />
          </SingleSocial>
        </Suspense>
      </div>
    </div>
  )
}
