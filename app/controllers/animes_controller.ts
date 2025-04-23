import type { HttpContext } from '@adonisjs/core/http'
import { AnimeService } from '#services/anime_service'
import { inject } from '@adonisjs/core'

@inject()
export default class AnimesController {
  constructor(private animeService: AnimeService) {}

  index({ request, inertia }: HttpContext) {
    const query = request.qs()

    const animes = this.animeService.findAll({ offset: query.offset, limit: query.limit })

    return inertia.render('animes/index', { animes })
  }

  apiIndex({ request }: HttpContext) {
    const query = request.qs()

    const animes = this.animeService.findAll({ offset: query.offset, limit: query.limit })

    return { records: animes }
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
