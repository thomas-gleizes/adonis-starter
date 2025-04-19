import { integer, jsonb, pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { KitsuAnimeAttributes, KitsuAnimeRelationships } from '../../types/kitsu.js'

export const typeImports = pgEnum('type', ['anime'])

export const imports = pgTable('imports', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull(),
  kitsuId: integer('kitsu_id').notNull(),
  type: typeImports('type'),
  content: jsonb('content').notNull().$type<{
    attributes: KitsuAnimeAttributes
    relationships: KitsuAnimeRelationships
  }>(),
  importAt: timestamp('import_at').defaultNow().notNull(),
})
