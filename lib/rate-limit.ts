/**
 * In-memory fixed-window rate limiter, keyed by identifier (e.g. IP). Scoped
 * to a single warm serverless instance — on Vercel this throttles sustained
 * abuse hitting the same instance but doesn't coordinate across instances.
 * Good enough as defense-in-depth alongside the honeypot; swap for
 * Vercel Firewall or @upstash/ratelimit if abuse persists.
 */
const buckets = new Map<string, { count: number; resetAt: number }>()

export function isRateLimited(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || now >= bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return false
  }

  bucket.count += 1
  return bucket.count > limit
}
