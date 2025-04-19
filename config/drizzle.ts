import pg from 'pg'
import env from '#start/env'
import { drizzle } from 'drizzle-orm/node-postgres'

const pool = new pg.Pool({ connectionString: env.get('DATABASE_URL') })

export const database = drizzle(pool)
