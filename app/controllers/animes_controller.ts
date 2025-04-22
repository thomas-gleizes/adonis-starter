import type { HttpContext } from '@adonisjs/core/http'
import { AnimeService } from '#services/anime_service'
import { inject } from '@adonisjs/core'

@inject()
export default class AnimesController {
  constructor(private animeService: AnimeService) {}

  index({ request }: HttpContext) {
    const query = request.qs()

    console.log('Query', query)

    return this.animeService
      .findAll()
      .limit(query.limit ?? 10)
      .offset(query.offset ?? 0)
  }

  show({ params }: HttpContext) {
    return this.animeService.findById(params.id)
  }

  create({ request }: HttpContext) {
    console.log('TITLE', request.input('title'))

    return {
      id: Math.random().toString(36).substr(2, 10),
      title: request.input('title'),
      description: request.input('description'),
    }
  }
}
