import type { PayloadRequest } from 'payload'

const windows = new Map<string, { start: number; count: number }>()

/**
 * true when the caller exceeded `max` requests per minute.
 * shortcut: in-memory per server instance, so the real limit is max × instances; move to a shared store if abuse shows up.
 */
export function rateLimited(req: PayloadRequest, scope: string, max = 10): boolean {
  const who = req.user?.id ? String(req.user.id) : req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'anon'
  const key = `${scope}:${who}`
  const now = Date.now()
  const entry = windows.get(key)
  if (!entry || now - entry.start >= 60_000) { windows.set(key, { start: now, count: 1 }); return false }
  entry.count += 1
  return entry.count > max
}
