import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './app/models',
  out: './database',
  dbCredentials: {
    url: 'postgres://adonis:adonis@localhost:5432/adonis',
  },
})
