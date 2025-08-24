import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'

export const subscribers = pgTable('subscribers', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  role: text('role'),
  referrer: text('referrer'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
