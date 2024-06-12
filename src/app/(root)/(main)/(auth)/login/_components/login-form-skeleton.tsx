import { MdEmail } from "react-icons/md"

import { Skeleton } from "@/components/ui/skeleton"

export const LoginFormSkeleton = () => {
  return (
    <div className="space-y-8">
      <Skeleton className="flex h-11 w-full items-center justify-start gap-x-4 rounded-md border px-3 py-2 text-sm">
        <MdEmail />
        <span>name@example.com</span>
      </Skeleton>
      <div className="flex w-full items-center justify-center">
        <Skeleton className="inline-flex h-10 w-[80%] items-center justify-center rounded-full text-sm">
          Sign In with Email
        </Skeleton>
      </div>
    </div>
  )
}
