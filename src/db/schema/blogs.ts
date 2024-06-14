import { sql } from "drizzle-orm"
import {
  boolean,
  index,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

import { users } from "./auth"

export const blogs = pgTable(
  "blogs",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    slug: text("slug").notNull().unique(),
    title: text("title").notNull(),
    bannerUrl: text("banner_url"),
    content: text("content"),
    description: varchar("description", { length: 301 }),
    tags: text("tags")
      .array()
      .default(sql`ARRAY[]::text[]`),
    isDraft: boolean("is_draft").default(false),
    createdAt: timestamp("created_at").default(sql`now()`),
    updatedAt: timestamp("updated_at")
      .default(sql`now()`)
      .$onUpdate(() => sql`now()`),
  },
  (blogs) => ({
    slugIndex: index("slug_index").on(blogs.slug),
  }),
)
