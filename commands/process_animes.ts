import { BaseCommand } from '@adonisjs/core/ace'

import type { CommandOptions } from '@adonisjs/core/types/ace'
import { database } from '#config/drizzle'
import { imports } from '#models/import'
import { and, asc, eq, max } from 'drizzle-orm'
import { animes } from '#models/anime'

export default class ProcessAnimes extends BaseCommand {
  static commandName = 'process:animes'
  static description = ''

  static options: CommandOptions = {}

  async run() {
    try {
      let offset = 0
      let loop = true

      do {
        const subQuery = database
          .select({ slug: imports.slug, import_at: max(imports.importAt).as('latest_import_at') })
          .from(imports)
          .groupBy(imports.slug)
          .where(eq(imports.type, 'anime'))
          .as('animes')

        const results = await database
          .select({
            id: imports.id,
            kitsuId: imports.kitsuId,
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
          .orderBy(asc(imports.kitsuId))

        loop = results.length > 0

        for (const item of results) {
          await database.insert(animes).values({
            kitsuId: item.kitsuId,
            slug: item.slug,
            title: item.content.attributes.canonicalTitle,
            titles: item.content.attributes.titles,
            startDate: new Date(item.content.attributes.startDate) ?? null,
            endDate: new Date(item.content.attributes.endDate) ?? null,
            subType: item.content.attributes.subtype,
            showType: item.content.attributes.showType,
            status: item.content.attributes.status,
            episodesCount: item.content.attributes.episodeCount,
            episodeLength: item.content.attributes.episodeLength,
            totalLength: item.content.attributes.totalLength,
            ageRating: item.content.attributes.ageRating,
            synopsis: item.content.attributes.synopsis,
            description: item.content.attributes.description,
            posters: item.content.attributes.posterImage,
            covers: item.content.attributes.coverImage,
          })

          offset++
        }
      } while (loop)
    } catch (error) {
      console.log('Error', error)
    } finally {
      console.log('Finally')
    }
  }
}
