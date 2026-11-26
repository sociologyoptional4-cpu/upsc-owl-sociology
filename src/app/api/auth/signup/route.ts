import { NextResponse } from 'next/server'
import { z } from 'zod'

import { findActiveSubscriptionByEmail } from '@/lib/auth/member'
import { hashPassword } from '@/lib/auth/password'
import { isAuthRateLimited } from '@/lib/auth/rate-limit'
import { MEMBER_COOKIE_NAME, MEMBER_SESSION_DAYS, memberCookieOptions, signMemberToken } from '@/lib/auth/session'
import { PRO_COOKIE_NAME, normalizeEmail, normalizePhone, proCookieOptions, signProToken } from '@/lib/billing/token'
import { getPayloadClient } from '@/lib/queries'

const signupSchema = z.object({
  name: z.string().trim().min(2, 'Apna poora naam daalein').max(80),
  email: z.string().trim().email('Valid email address daalein'),
  phone: z.string().trim().max(18).optional(),
  password: z.string().min(6, 'Password kam se kam 6 characters ka hona chahiye').max(100),
})

export async function POST(req: Request) {
  if (isAuthRateLimited(req, 'signup', 15)) {
    return NextResponse.json(
      { error: 'Bahut zyada signup attempts ho gaye. Thodi der baad try karein.' },
      { status: 429, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400, headers: { 'Cache-Control': 'no-store' } })
  }

  const parsed = signupSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Invalid details' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  const cleanEmail = normalizeEmail(parsed.data.email)
  const cleanPhone = parsed.data.phone ? normalizePhone(parsed.data.phone) : undefined
  if (cleanPhone && cleanPhone.length > 0 && cleanPhone.length < 10) {
    return NextResponse.json(
      { error: '10-digit mobile number daalein ya khaali chhodein.' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  const payload = await getPayloadClient()
  const existing = await payload.find({
    collection: 'members',
    where: { email: { equals: cleanEmail } },
    limit: 1,
    overrideAccess: true,
  })
  if (existing.docs.length > 0) {
    return NextResponse.json(
      { error: 'Is email se account pehle se bana hai. Login karein.' },
      { status: 409, headers: { 'Cache-Control': 'no-store' } },
    )
  }

  const now = new Date()
  const member = await payload.create({
    collection: 'members',
    overrideAccess: true,
    data: {
      name: parsed.data.name,
      email: cleanEmail,
      phone: cleanPhone || undefined,
      passwordHash: hashPassword(parsed.data.password),
      status: 'active',
      lastLoginAt: now.toISOString(),
    },
  })

  const sub = await findActiveSubscriptionByEmail(payload, cleanEmail)
  const sessionExpires = new Date(now.getTime() + MEMBER_SESSION_DAYS * 24 * 60 * 60 * 1000)
  const memberToken = signMemberToken({
    memberId: member.id,
    email: member.email,
    name: member.name,
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
      member: { id: member.id, name: member.name, email: member.email, phone: member.phone ?? null },
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
