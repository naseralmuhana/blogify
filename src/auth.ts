import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { eq } from "drizzle-orm"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Resend from "next-auth/providers/resend"

import { db } from "@/db"
import { generateUsername } from "@/lib/auth/generate-username"
import { generateImage } from "@/lib/auth/generate-image"
import {
  accounts,
  profiles,
  sessions,
  users,
  verificationTokens,
} from "@/db/schema"

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [
    Github,
    Google,
    Resend({
      from: "no-replay@naseralmuhana.com",
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/auth-error",
    verifyRequest: "/verify-request",
  },
  events: {
    // create new user
    async createUser({ user }) {
      !!user.id && (await db.insert(profiles).values({ userId: user.id }))
    },
    // linkAccount
    async linkAccount({ user }) {
      const username = await generateUsername(user.email)
      !!user.id &&
        (await db.update(users).set({ username }).where(eq(users.id, user.id)))
    },
    // signin
    async signIn({ account, user, isNewUser }) {
      if (account?.provider === "resend" && isNewUser) {
        const username = await generateUsername(user.email)
        const image = generateImage()
        !!user.id &&
          (await db
            .update(users)
            .set({ username, image })
            .where(eq(users.id, user.id)))
      }
    },
  },
  callbacks: {
    session({ session }) {
      return session
    },
  },
})
