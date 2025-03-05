import Event from '#models/event'
import db from '@adonisjs/lucid/services/db'
import { DateTime } from 'luxon'

export class EventRepository {
  retrieveNextEvents(): Promise<Event[]> {
    return db
      .from('events')
      .where('status', 'publish')
      .where('start_at', '>', DateTime.now().plus({ day: 1 }).toString())
      .orderBy('start_at', 'asc')
      .limit(10)
  }

  retrieveFeaturingEvents(): Promise<Event[]> {
    return db
      .from('events')
      .where('status', 'publish')
      .where('feature', true)
      .where('start_at', '>', DateTime.now().plus({ day: 1 }).toString())
      .orderBy('start_at', 'asc')
      .limit(10)
  }
}
