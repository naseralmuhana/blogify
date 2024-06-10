import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Resend from "next-auth/providers/resend"

import { db } from "@/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Github,
    Google,
    Resend({
      from: "no-replay@naseralmuhana.com",
    }),
  ],
  pages: {
    signIn: "/login",
  },
})
