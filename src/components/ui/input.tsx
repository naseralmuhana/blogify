import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import { LucideIcon, LucideProps } from "lucide-react"
import { IconBaseProps, IconType } from "react-icons"

import { cn } from "@/lib/utils"
import { useFormField } from "./form"

const inputVariants = cva(
  "flex h-10 w-full rounded-md border bg-background px-4 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-secondary bg-secondary focus-within:border-input focus-within:bg-background",
        outline:
          "border-input bg-background focus-within:border-secondary focus-within:bg-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

type SuffixType =
  | { icon: IconType; props?: IconBaseProps }
  | { icon: LucideIcon; props?: LucideProps }

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  suffixAfter?: SuffixType
  suffixBefore?: SuffixType
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, disabled, suffixAfter, suffixBefore, variant, ...props },
    ref,
  ) => {
    let suffixBeforeComponent = undefined
    let suffixAfterComponent = undefined

    // Suffix Before Component
    if (!!suffixBefore?.icon) {
      suffixBeforeComponent = React.createElement(suffixBefore.icon, {
        ...suffixBefore.props,
        className: cn(
          "absolute left-3 pointer-events-none",
          suffixBefore.props?.className,
        ),
      })
    }

    // Suffix After Component
    if (!!suffixAfter?.icon) {
      suffixAfterComponent = React.createElement(suffixAfter.icon, {
        ...suffixAfter.props,
        className: cn(
          "absolute right-4 cursor-pointer",
          disabled && "pointer-events-none opacity-50",
          suffixAfter.props?.className,
        ),
      })
    }

    // Input Component
    const inputComponent = (
      <input
        type={type}
        className={cn(
          inputVariants({ variant }),
          !!suffixBeforeComponent && "pl-12",
          !!suffixAfterComponent && "pr-12",
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    )

    if (!!suffixBeforeComponent || !!suffixAfterComponent) {
      return (
        <div className="relative flex items-center">
          {!!suffixBeforeComponent && suffixBeforeComponent}
          {inputComponent}
          {!!suffixAfterComponent && suffixAfterComponent}
        </div>
      )
    }
    return inputComponent
  },
)
Input.displayName = "Input"

export { Input }
