import crypto from 'crypto'

const KEY_LENGTH = 64

/** Hashes a student password using per-user random salt + Node built-in scrypt. */
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex')
  const derived = crypto.scryptSync(password, salt, KEY_LENGTH).toString('hex')
  return `scrypt$${salt}$${derived}`
}

/** Verifies a student password against a stored `scrypt$salt$hash` value in constant time. */
export function verifyPassword(password: string, stored: string): boolean {
  const parts = stored.split('$')
  if (parts.length !== 3 || parts[0] !== 'scrypt') return false
  const [, salt, expectedHex] = parts
  if (!salt || !expectedHex || expectedHex.length !== KEY_LENGTH * 2) return false

  try {
    const actual = crypto.scryptSync(password, salt, KEY_LENGTH)
    const expected = Buffer.from(expectedHex, 'hex')
    return actual.length === expected.length && crypto.timingSafeEqual(actual, expected)
  } catch {
    return false
  }
}
