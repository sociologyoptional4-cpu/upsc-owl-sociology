import { NextResponse } from 'next/server'
import { z } from 'zod'

import { findActiveSubscriptionByEmail } from '@/lib/auth/member'
import { verifyPassword } from '@/lib/auth/password'
import { isAuthRateLimited } from '@/lib/auth/rate-limit'
import { MEMBER_COOKIE_NAME, MEMBER_SESSION_DAYS, memberCookieOptions, signMemberToken } from '@/lib/auth/session'
import { PRO_COOKIE_NAME, normalizeEmail, proCookieOptions, signProToken } from '@/lib/billing/token'
import { getPayloadClient } from '@/lib/queries'

const loginSchema = z.object({
  email: z.string().trim().email('Valid email address daalein'),
  password: z.string().min(1, 'Password daalein').max(100),
})

export async function POST(req: Request) {
  if (isAuthRateLimited(req, 'login', 20)) {
    return NextResponse.json(
      { error: 'Bahut zyada login attempts ho gaye. 10 minute baad try karein.' },
      { status: 429, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400, headers: { 'Cache-Control': 'no-store' } })
  }

  const parsed = loginSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid email or password' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  const cleanEmail = normalizeEmail(parsed.data.email)
  const payload = await getPayloadClient()
  const found = await payload.find({
    collection: 'members',
    where: { email: { equals: cleanEmail } },
    limit: 1,
    overrideAccess: true,
    showHiddenFields: true,
  })

  const doc = found.docs[0]
  if (!doc || !verifyPassword(parsed.data.password, doc.passwordHash)) {
    return NextResponse.json(
      { error: 'Email ya password galat hai.' },
      { status: 401, headers: { 'Cache-Control': 'no-store' } },
    )
  }
  if (doc.status !== 'active') {
    return NextResponse.json(
      { error: 'Aapka account suspended hai. Support se contact karein.' },
      { status: 403, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  const now = new Date()
  await payload.update({
    collection: 'members',
    id: doc.id,
    overrideAccess: true,
    data: { lastLoginAt: now.toISOString() },
  })

  const sub = await findActiveSubscriptionByEmail(payload, cleanEmail)
  const sessionExpires = new Date(now.getTime() + MEMBER_SESSION_DAYS * 24 * 60 * 60 * 1000)
  const memberToken = signMemberToken({
    memberId: doc.id,
    email: doc.email,
    name: doc.name,
    exp: sessionExpires.getTime(),
  })

  const pro = sub
    ? {
        unlocked: true,
        reason: 'subscription' as const,
        email: sub.email,
        expiresAt: sub.expiresAt,
        accessCode: sub.accessCode,
      }
    : { unlocked: false, reason: 'none' as const, email: null, expiresAt: null, accessCode: null }

  const res = NextResponse.json(
    {
      member: { id: doc.id, name: doc.name, email: doc.email, phone: doc.phone ?? null },
      pro,
    },
    { headers: { 'Cache-Control': 'no-store' } },
  )
  res.cookies.set(MEMBER_COOKIE_NAME, memberToken, memberCookieOptions(sessionExpires))

  if (sub) {
    const subExpires = new Date(sub.expiresAt)
    const proToken = signProToken({ subId: sub.id, email: sub.email, code: sub.accessCode, exp: subExpires.getTime() })
    res.cookies.set(PRO_COOKIE_NAME, proToken, proCookieOptions(subExpires))
  }

  return res
}
