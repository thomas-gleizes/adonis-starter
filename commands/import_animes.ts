import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import { KitsuCollectionAnimeResponse } from '../types/kitsu.js'
import { database } from '#config/drizzle'
import { imports } from '#models/import'

export default class ImportAnimes extends BaseCommand {
  static commandName = 'import:animes'
  static description = ''

  static options: CommandOptions = {}

  async run() {
    this.logger.info('Start importing animes')

    let total = 0
    let n = 0

    do {
      const { data, meta } = await fetch(
        `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${n}`
      ).then((resp) => resp.json() as Promise<KitsuCollectionAnimeResponse>)

      total = meta.count

      for (const item of data) {
        n++
        console.log()

        this.logger.info(
          `n: ${n}, ID: ${item.id}, slug: ${item.attributes.slug}, title: ${item.attributes.canonicalTitle}`
        )

        try {
          await database.insert(imports).values({
            slug: item.attributes.slug,
            type: item.type,
            kitsuId: +item.id,
            content: { attributes: item.attributes, relationships: item.relationships },
            importAt: new Date(),
          })
        } catch (error) {
          this.logger.error(
            `${item.id}, ${item.attributes.slug}, ${item.attributes.canonicalTitle}, ${error.message}`
          )
        }
      }
    } while (n < total)
  }
}
