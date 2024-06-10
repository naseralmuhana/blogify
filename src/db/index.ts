import { PostgresJsDatabase } from "drizzle-orm/postgres-js"
import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import * as schema from "./schema"
import { env } from "@/lib/env"

declare global {
  var db: PostgresJsDatabase<typeof schema> | undefined
}

let db: PostgresJsDatabase<typeof schema>
let pg: ReturnType<typeof neon>

if (env.NODE_ENV === "production") {
  pg = neon(env.DATABASE_URL)
  db = drizzle(pg, { schema })
} else {
  // In a development environment, reuse the existing connection if it exists
  if (!global.db) {
    pg = neon(env.DATABASE_URL) // Create a new PostgreSQL client using the neon function
    global.db = drizzle(pg, { schema }) // Initialize the global database connection with drizzle
  }
  db = global.db! // Assign the global database connection to the local variable
}

export { db, pg }
