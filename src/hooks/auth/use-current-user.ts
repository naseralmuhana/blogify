import { useSession } from "next-auth/react"

// Custom React hook to retrieve the current user from the session.
export const useCurrentUser = () => {
  // Get the session information using the provided useSession hook
  const session = useSession()

  // Return the user object from the session data, if available
  return session.data?.user
}
