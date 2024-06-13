import { ReactNode } from "react"

import { ThemeProvider } from "./theme-provider"
import { SessionProvider } from "./session-provider"
import { EdgeStoreProvider } from "@/lib/edgestore/client"

interface ProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <SessionProvider>
      <ThemeProvider>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
