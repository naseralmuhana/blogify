import { ReactNode } from "react"

import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

interface FormItemWrapperProps {
  children: ReactNode
  label?: string
  description?: string
}

export const FormItemWrapper = ({
  label,
  description,
  children,
}: FormItemWrapperProps) => {
  return (
    <FormItem>
      {!!label && <FormLabel>{label}</FormLabel>}
      <FormControl>{children}</FormControl>
      {!!description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  )
}
