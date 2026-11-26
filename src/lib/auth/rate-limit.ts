const authRateWindows = new Map<string, { start: number; count: number }>()
const WINDOW_MS = 10 * 60_000

/** Simple in-memory per-IP rate limiter for student auth endpoints. */
export function isAuthRateLimited(req: Request, bucketKey: string, maxAttempts: number): boolean {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
  const key = `${bucketKey}:${ip}`
  const now = Date.now()
  const entry = authRateWindows.get(key)
  if (!entry || now - entry.start > WINDOW_MS) {
    authRateWindows.set(key, { start: now, count: 1 })
    return false
  }
  entry.count += 1
  return entry.count > maxAttempts
}
