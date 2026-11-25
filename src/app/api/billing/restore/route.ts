import { NextResponse } from 'next/server'
import { z } from 'zod'

import { restoreSubscription } from '@/lib/billing/subscriptions'
import { PRO_COOKIE_NAME, proCookieOptions, signProToken } from '@/lib/billing/token'
import { getPayloadClient } from '@/lib/queries'

const restoreSchema = z.object({
  email: z.string().trim().email('Valid email daalein'),
  credential: z.string().trim().min(4, 'Access code, mobile number, ya Razorpay Payment ID daalein').max(80),
})

const rateWindows = new Map<string, { start: number; count: number }>()
const WINDOW_MS = 10 * 60_000
const MAX_ATTEMPTS = 15

function isRateLimited(req: Request): boolean {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local'
  const now = Date.now()
  const entry = rateWindows.get(ip)
  if (!entry || now - entry.start > WINDOW_MS) {
    rateWindows.set(ip, { start: now, count: 1 })
    return false
  }
  entry.count += 1
  return entry.count > MAX_ATTEMPTS
}

export async function POST(req: Request) {
  if (isRateLimited(req)) {
    return NextResponse.json(
      { error: 'Bahut zyada attempts ho gaye. 10 minute baad try karein.' },
      { status: 429, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400, headers: { 'Cache-Control': 'no-store' } })
  }

  const parsed = restoreSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid input' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  const payload = await getPayloadClient()
  const match = await restoreSubscription(payload, parsed.data.email, parsed.data.credential)
  if (!match) {
    return NextResponse.json(
      { error: 'Is email aur code/phone se koi active Pro pass nahi mila.' },
      { status: 404, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  const expiresAt = new Date(match.expiresAt)
  const token = signProToken({ subId: match.id, email: match.email, code: match.accessCode, exp: expiresAt.getTime() })
  const res = NextResponse.json(
    { unlocked: true, accessCode: match.accessCode, expiresAt: match.expiresAt, email: match.email },
    { headers: { 'Cache-Control': 'no-store' } },
  )
  res.cookies.set(PRO_COOKIE_NAME, token, proCookieOptions(expiresAt))
  return res
}
