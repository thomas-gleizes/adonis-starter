import vine from '@vinejs/vine'
import { DateTime } from 'luxon'
import { EventCategory } from '../enums/EventCategory.js'
import { EventStatus } from '../enums/EventStatus.js'

export const createEventValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(5).maxLength(255),
    description: vine.string().minLength(5).maxLength(255),
    price: vine.number().min(0),
    capacity: vine.number().min(5),
    feature: vine.boolean(),
    status: vine.enum([EventStatus.Draft, EventStatus.Publish]),
    category: vine.enum([
      EventCategory.Webinar,
      EventCategory.Expo,
      EventCategory.Concert,
      EventCategory.Competition,
    ]),
    city: vine.string().minLength(1).maxLength(255),
    location: vine.string().minLength(1).maxLength(255),
    startAt: vine
      .date()
      .after('tomorrow')
      .transform((date) => DateTime.fromJSDate(date)),
    endAt: vine
      .date()
      .afterOrSameAs('startAt')
      .transform((date) => DateTime.fromJSDate(date)),
  })
)
