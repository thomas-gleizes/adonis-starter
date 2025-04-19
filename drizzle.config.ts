import env from '#start/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './app/schemas',
  out: './drizzle',
  dbCredentials: {
    url: env.get('DATABASE_URL'),
  },
})
