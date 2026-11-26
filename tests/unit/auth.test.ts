import { describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/env', () => ({
  env: {
    PAYLOAD_SECRET: 'test-secret-key-at-least-32-chars-long-0123',
  },
}))

import { hashPassword, verifyPassword } from '@/lib/auth/password'
import { signMemberToken, verifyMemberToken } from '@/lib/auth/session'

describe('student password hashing', () => {
  it('hashes with unique random salts and verifies correct password', () => {
    const h1 = hashPassword('sociology123')
    const h2 = hashPassword('sociology123')
    expect(h1).toMatch(/^scrypt\$[a-f0-9]{32}\$[a-f0-9]{128}$/)
    expect(h1).not.toBe(h2)
    expect(verifyPassword('sociology123', h1)).toBe(true)
    expect(verifyPassword('wrongpass', h1)).toBe(false)
    expect(verifyPassword('sociology123', `${h1.slice(0, -1)}0`)).toBe(false)
  })
})

describe('student session tokens', () => {
  it('round-trips a signed member token and rejects tampering or expiry', () => {
    const token = signMemberToken({
      memberId: 7,
      email: 'student@example.com',
      name: 'Aarav Sharma',
      exp: Date.now() + 60_000,
    })
    const decoded = verifyMemberToken(token)
    expect(decoded).toMatchObject({ memberId: 7, email: 'student@example.com', name: 'Aarav Sharma' })

    const [payloadPart, sigPart] = token.split('.')
    expect(verifyMemberToken(`${payloadPart}x.${sigPart}`)).toBeNull()
    expect(verifyMemberToken(`${payloadPart}.${sigPart}x`)).toBeNull()

    const expired = signMemberToken({
      memberId: 7,
      email: 'student@example.com',
      name: 'Aarav Sharma',
      exp: Date.now() - 1000,
    })
    expect(verifyMemberToken(expired)).toBeNull()
  })
})
