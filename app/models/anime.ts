import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const animes = pgTable('animes', {
  id: serial('id').primaryKey(),
  title: text('name'),
  slug: text('slug').notNull().unique(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt')
    .defaultNow()
    .$onUpdate(() => new Date()),
})
