import { BaseCommand } from '@adonisjs/core/ace'

import type { CommandOptions } from '@adonisjs/core/types/ace'
import { database } from '#config/drizzle'
import { imports } from '#models/import'
import { and, eq, max } from 'drizzle-orm'

export default class ProcessAnimes extends BaseCommand {
  static commandName = 'process:animes'
  static description = ''

  static options: CommandOptions = {}

  async run() {
    try {
      let offset = 0

      const subQuery = database
        .select({ slug: imports.slug, import_at: max(imports.importAt).as('latest_import_at') })
        .from(imports)
        .groupBy(imports.slug)
        .where(eq(imports.type, 'anime'))
        .as('animes')

      const results = await database
        .select({
          id: imports.id,
          slug: imports.slug,
          content: imports.content,
          importAt: imports.importAt,
        })
        .from(imports)
        .innerJoin(
          subQuery,
          and(eq(subQuery.slug, imports.slug), eq(subQuery.import_at, imports.importAt))
        )
        .limit(1000)
        .offset(offset)

      for (const anime of results) {
        console.log(anime.id, anime.content.attributes.canonicalTitle)
      }
    } catch (error) {
      console.log('Error', error)
    } finally {
      console.log('Finally')
    }
  }
}
