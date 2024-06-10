import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const BlogTable = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),

  createdAt: timestamp("createdAt").defaultNow().notNull(),
})
