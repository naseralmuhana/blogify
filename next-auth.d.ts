import { type DefaultSession } from "next-auth"

interface User {
  username?: string
}

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"]
  }
}
