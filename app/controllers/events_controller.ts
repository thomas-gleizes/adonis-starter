import type { HttpContext } from '@adonisjs/core/http'
import { createEventValidator } from '#validators/event'
import Event from '#models/event'

export default class EventsController {
  async index(ctx: HttpContext) {
    const page = ctx.request.input('page', 1)
    const limit = ctx.request.input('limit', 10)

    const events = await Event.query().paginate(page, limit)

    return ctx.inertia.render('events/index', { events: events.serialize() })
  }

  async store(ctx: HttpContext) {
    const payload = await ctx.request.validateUsing(createEventValidator)

    const event = await Event.create(payload)

    return ctx.response.status(201).send(event)
  }

  async show(ctx: HttpContext) {
    const event = await Event.findOrFail(ctx.params.id)

    return ctx.inertia.render('events/show', { event })
  }
}
