import factory from '@adonisjs/lucid/factories'
import Event from '#models/event'
import { DateTime } from 'luxon'
import { EventStatus } from '../../app/enums/EventStatus.js'
import { EventCategory } from '../../app/enums/EventCategory.js'

export const EventFactory = factory
  .define(Event, async ({ faker }) => {
    const days = faker.number.int({ min: 2, max: 90 })

    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      price: faker.number.float({ min: 1, max: 50, fractionDigits: 2 }),
      capacity: faker.number.int({ min: 5, max: 100 }),
      feature: false,
      status: EventStatus.Publish,
      category: EventCategory.Webinar,
      city: faker.location.city(),
      location: faker.location.street(),
      startAt: DateTime.now().plus(days),
      endAt: DateTime.now().plus(days + faker.number.int({ min: 0, max: 7 })),
    }
  })
  .build()
