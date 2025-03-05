import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { EventRepository } from '#services/event_repository'

@inject()
export default class HomeController {
  constructor(private readonly eventRepository: EventRepository) {}

  async index(ctx: HttpContext) {
    const [nextEvents, featuringEvents] = await Promise.all([
      this.eventRepository.retrieveNextEvents(),
      this.eventRepository.retrieveFeaturingEvents(),
    ])

    return { nextEvents, featuringEvents }
    return ctx.inertia.render('home', { nextEvents: nextEvents, featuringEvents })
  }
}
