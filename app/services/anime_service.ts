import { database } from '#config/drizzle'
import { animes } from '#models/anime'
import { eq } from 'drizzle-orm'

export class AnimeService {
  findAll() {
    return database.select().from(animes)
  }

  findById(id: number) {
    return database.select().from(animes).where(eq(animes.id, id))
  }
}
