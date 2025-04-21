import {
  date,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'
import { KitsuMedia, KitsuTitles } from '../../types/kitsu.js'

export const animes = pgTable('animes', {
  id: serial('id').primaryKey(),
  kitsuId: integer('kitsu_id'),
  slug: varchar('slug').notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  titles: jsonb('titles').$type<KitsuTitles>(),
  startDate: date('start_date'),
  endDate: date('end_date'),
  subType: varchar('sub_type', { length: 52 }),
  showType: varchar('show_type', { length: 52 }),
  status: varchar('status', { length: 52 }),
  episodesCount: integer('episodes_count'),
  episodeLength: integer('episode_length'),
  totalLength: integer('total_length'),
  ageRating: varchar('age_rating'),
  synopsis: text('synopsis'),
  description: text('description'),
  posters: jsonb('posters').$type<KitsuMedia>(),
  covers: jsonb('covers').$type<KitsuMedia>(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})
