import { nanoid } from "nanoid"

import { getUserByUsername } from "@/data/auth/get-user-by-username"

export const generateUsername = async (email: string | null | undefined) => {
  if (!email) return nanoid(7)

  let username = email.split("@")[0]

  const existingUser = await getUserByUsername(username)
  if (!existingUser) return username

  username += "_" + nanoid(3)

  return username
}
