import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { EventStatus } from '../enums/EventStatus.js'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare price: number

  @column()
  declare capacity: number

  @column()
  declare feature: boolean

  @column()
  declare status: EventStatus

  @column()
  declare category:
    | 'training'
    | 'workshop'
    | 'seminar'
    | 'webinar'
    | 'meetup'
    | 'conference'
    | 'convention'
    | 'summit'
    | 'expo'
    | 'fair'
    | 'festival'
    | 'concert'
    | 'show'
    | 'performance'
    | 'competition'
    | 'game'
    | 'tournament'

  @column()
  declare location: string

  @column()
  declare city: string

  @column({ columnName: 'start_at', serializeAs: 'startAt' })
  declare startAt: DateTime

  @column({ columnName: 'end_at', serializeAs: 'endAt' })
  declare endAt: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  serialize() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      price: this.price,
      capacity: this.capacity,
      feature: this.feature,
      status: this.status,
      category: this.category,
      location: this.location,
      city: this.city,
      startAt: this.startAt,
      endAt: this.endAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }
}
