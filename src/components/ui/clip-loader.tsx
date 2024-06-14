import { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

interface ClipLoader extends HTMLAttributes<HTMLSpanElement> {
  size?: number
}

export const ClipLoader = ({ size = 23, className, ...props }: ClipLoader) => {
  return (
    <span
      style={{
        width: size,
        height: size,
      }}
      className={cn(
        "inline-block animate-clip-loader rounded-full border-2 border-border border-b-transparent bg-transparent",
        className,
      )}
      {...props}
    />
  )
}
