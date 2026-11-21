import { describe, expect, it } from 'vitest'
import { copyGuard } from '@/pipeline/validate'
import { canSpend, estimateCost } from '@/pipeline/cost'
import { uniqueFeedItems } from '@/pipeline/dedupe'

describe('pipeline guards', () => {
  it('deduplicates tracking variants by normalized source URL', () => {
    const items = [
      { title: 'one', description: '', link: 'https://example.org/a?utm_source=x', date: '', source: 'feed' },
      { title: 'two', description: '', link: 'https://example.org/a#top', date: '', source: 'feed' },
    ]
    expect(uniqueFeedItems(items)).toHaveLength(1)
  })
  it('blocks a 15-word copied sequence', () => {
    const source = 'one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen'
    expect(copyGuard(`prefix ${source} suffix`, source)).toBe(false)
    expect(copyGuard('A fully rewritten sociological analysis with original phrasing and no copied long phrase.', source)).toBe(true)
  })
  it('checks projected cost before continuing', () => {
    expect(estimateCost({ input: 1_000_000, output: 0 }, 0.4, 1.6)).toBe(0.4)
    expect(canSpend(0.6, 0.3, 1)).toBe(true)
    expect(canSpend(0.8, 0.3, 1)).toBe(false)
  })
})
