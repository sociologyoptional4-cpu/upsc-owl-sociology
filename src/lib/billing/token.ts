import crypto from 'crypto'
import { env } from '@/lib/env'

export const PRO_COOKIE_NAME = 'upscowl_pro'

export type ProTokenPayload = {
  subId: number
  email: string
  code: string
  exp: number
}

/** Normalizes user email for storage and lookups. */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}

/** Extracts canonical 10-digit Indian phone number (or stripped digits) for matching. */
export function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 10 ? digits.slice(-10) : digits
}

/** Generates a human-friendly 8-char access code formatted as OWL-XXXX-XXXX. */
export function generateAccessCode(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const bytes = crypto.randomBytes(8)
  let raw = ''
  for (let i = 0; i < 8; i += 1) {
    raw += alphabet[bytes[i]! % alphabet.length]
  }
  return `OWL-${raw.slice(0, 4)}-${raw.slice(4)}`
}

function signDigest(encoded: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(encoded).digest('base64url')
}

/** Signs a compact HMAC-SHA256 bearer token stored in an HttpOnly cookie. */
export function signProToken(payload: ProTokenPayload, secret = env.PAYLOAD_SECRET): string {
  const encoded = Buffer.from(JSON.stringify(payload), 'utf8').toString('base64url')
  const sig = signDigest(encoded, secret)
  return `${encoded}.${sig}`
}

/** Verifies token signature and expiry; returns payload or null. */
export function verifyProToken(raw: string | undefined, secret = env.PAYLOAD_SECRET): ProTokenPayload | null {
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
    const parsed = JSON.parse(Buffer.from(encoded, 'base64url').toString('utf8')) as Partial<ProTokenPayload>
    if (
      typeof parsed.subId !== 'number' ||
      typeof parsed.email !== 'string' ||
      typeof parsed.code !== 'string' ||
      typeof parsed.exp !== 'number'
    ) {
      return null
    }
    if (Date.now() > parsed.exp) return null
    return { subId: parsed.subId, email: parsed.email, code: parsed.code, exp: parsed.exp }
  } catch {
    return null
  }
}

export function proCookieOptions(expiresAt: Date) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    expires: expiresAt,
  }
}
