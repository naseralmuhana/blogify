import { Skeleton } from "@/components/ui/skeleton"
import { createElement } from "react"
import { IconType } from "react-icons"

interface SingleSocialProps {
  label?: string
  Icon: IconType
}

export const SingleSocialSkeleton = ({
  label,

  Icon,
}: SingleSocialProps) => {
  const icon = createElement(Icon, { className: "mr-2" })
  return (
    <Skeleton className="inline-flex h-10 w-[80%] items-center justify-center rounded-full border border-input text-sm">
      {icon}
      <span className="capitalize">{label}</span>
    </Skeleton>
  )
}
