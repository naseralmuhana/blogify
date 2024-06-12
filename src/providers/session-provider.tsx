import {
  SessionProvider as NextSessionProvider,
  type SessionProviderProps,
} from "next-auth/react"

export const SessionProvider = async ({ children }: SessionProviderProps) => {
  return <NextSessionProvider>{children}</NextSessionProvider>
}
