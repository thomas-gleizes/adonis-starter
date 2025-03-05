import { BaseSchema } from '@adonisjs/lucid/schema'
import { EventStatus } from '../../app/enums/EventStatus.js'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()

      table.string('title').notNullable()
      table.string('description')

      table.float('price').unsigned().defaultTo(0.0)
      table.smallint('capacity').unsigned().defaultTo(5)

      table.boolean('feature').defaultTo(false)
      table.enum('status', Object.values(EventStatus)).defaultTo('draft')
      table
        .enum('category', [
          'training',
          'workshop',
          'seminar',
          'webinar',
          'meetup',
          'conference',
          'convention',
          'summit',
          'expo',
          'fair',
          'festival',
          'concert',
          'show',
          'performance',
          'competition',
          'game',
          'tournament',
        ])
        .defaultTo('conference')

      table.string('location')
      table.string('city')

      table.date('start_at')
      table.date('end_at')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
