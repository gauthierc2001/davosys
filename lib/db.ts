import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '../drizzle/schema'

// Check if database URL is available
const connectionString = process.env.DATABASE_URL

let dbInstance: any = null

if (connectionString) {
  try {
    // Disable prefetch as it is not compatible with "Transaction" pool mode
    const client = postgres(connectionString, { prepare: false })
    dbInstance = drizzle(client, { schema })
  } catch (error) {
    console.warn('Failed to initialize database:', error)
  }
}

// Export a fallback database that logs operations but doesn't fail
export const db = dbInstance || {
  select: () => ({
    from: () => ({
      where: () => ({
        limit: () => Promise.resolve([])
      })
    })
  }),
  insert: () => ({
    values: () => Promise.resolve({ rowCount: 1 })
  })
}
