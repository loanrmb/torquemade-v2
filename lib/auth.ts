import { timingSafeEqual } from 'node:crypto'

/**
 * Timing-safe secret comparison. Buffer.from + timingSafeEqual throws on
 * length mismatch, so lengths are checked first (that check is fast-exit by
 * design — timing-safe equality only matters once lengths already match).
 */
export function isValidSecret(provided: string | null, expected: string): boolean {
  if (!provided) return false
  const providedBuf = Buffer.from(provided)
  const expectedBuf = Buffer.from(expected)
  if (providedBuf.length !== expectedBuf.length) return false
  return timingSafeEqual(providedBuf, expectedBuf)
}
