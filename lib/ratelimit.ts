import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Check if Redis environment variables are available
const hasRedisConfig = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN

let redis: Redis | null = null
let ratelimitInstance: Ratelimit | null = null

if (hasRedisConfig) {
  try {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })

    // Create a new ratelimiter that allows 5 requests per 10 seconds
    ratelimitInstance = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '10 s'),
      analytics: true,
    })
  } catch (error) {
    console.warn('Failed to initialize Redis:', error)
  }
}

// Export a fallback ratelimit that always succeeds if Redis is not available
export const ratelimit = ratelimitInstance || {
  limit: async () => ({ success: true, limit: 5, remaining: 4, reset: Date.now() + 10000 }),
} as Ratelimit
