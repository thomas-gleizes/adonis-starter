import { database } from '#config/drizzle'
import { animes } from '#models/anime'
import { eq } from 'drizzle-orm'

type PaginationArgs = {
  limit?: number
  offset?: number
}

export class AnimeService {
  findAll({ limit, offset }: PaginationArgs = {}) {
    return database
      .select()
      .from(animes)
      .limit(Math.min(limit ?? 20, 20))
      .offset(offset ?? 0)
      .execute()
  }

  findById(id: number) {
    return database.select().from(animes).where(eq(animes.id, id))
  }
}
