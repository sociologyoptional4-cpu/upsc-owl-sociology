import crypto from 'crypto'
import { env } from '@/lib/env'

export const MEMBER_COOKIE_NAME = 'upscowl_member'
export const MEMBER_SESSION_DAYS = 30

export type MemberTokenPayload = {
  memberId: number
  email: string
  name: string
  exp: number
}

function sessionSecret(baseSecret: string): string {
  return `${baseSecret}:member-session`
}

function signDigest(encoded: string, baseSecret: string): string {
  return crypto.createHmac('sha256', sessionSecret(baseSecret)).update(encoded).digest('base64url')
}

/** Signs a compact HMAC-SHA256 student session token stored in an HttpOnly cookie. */
export function signMemberToken(payload: MemberTokenPayload, secret = env.PAYLOAD_SECRET): string {
  const encoded = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url')
  const sig = signDigest(encoded, secret)
  return `${encoded}.${sig}`
}

/** Verifies student session token signature and expiry; returns payload or null. */
export function verifyMemberToken(raw: string | undefined, secret = env.PAYLOAD_SECRET): MemberTokenPayload | null {
  if (!raw) return null
  const parts = raw.split('.')
  if (parts.length !== 2) return null
  const [encoded, providedSig] = parts
  if (!encoded || !providedSig) return null

  const expectedSig = signDigest(encoded, secret)
  const a = Buffer.from(providedSig, 'utf8')
  const b = Buffer.from(expectedSig, 'utf8')
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null

  try {
    const parsed = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8')) as Partial<MemberTokenPayload>
    if (
      typeof parsed.memberId !== 'number' ||
      typeof parsed.email !== 'string' ||
      typeof parsed.name !== 'string' ||
      typeof parsed.exp !== 'number'
    ) {
      return null
    }
    if (Date.now() > parsed.exp) return null
    return { memberId: parsed.memberId, email: parsed.email, name: parsed.name, exp: parsed.exp }
  } catch {
    return null
  }
}

export function memberCookieOptions(expiresAt: Date) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    expires: expiresAt,
  }
}
