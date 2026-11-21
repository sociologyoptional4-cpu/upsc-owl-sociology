import { describe, expect, it } from 'vitest'
import { vi } from 'vitest'
vi.mock('server-only', () => ({}))
import { getCAArticle } from '@/lib/data/current-affairs'

describe('getCAArticle', () => {
  it('returns null when the date and slug do not identify a published article', async () => {
    const result = await getCAArticle('2026-11-21', 'no-such-article')
    expect(result).toBeNull()
  })
})
