import { db } from "@/db"

export const getUserByUsername = async (username: string) => {
  try {
    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.username, username),
    })
    return user
  } catch (error) {
    console.error("GetUserByUsername")
    console.error(error)
    return null
  }
}
