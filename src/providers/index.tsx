import { ReactNode } from "react"

import { ThemeProvider } from "./theme-provider"
import { SessionProvider } from "./session-provider"

interface ProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  )
}
