import { ReactNode } from "react"

import { ThemeProvider } from "@/providers/theme-provider"

interface ProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
