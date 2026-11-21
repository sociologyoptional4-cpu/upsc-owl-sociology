import { describe, expect, it } from 'vitest'

import { aiLayoutSchema } from '@/blocks/ai-schema'

const validLayout = [
  { blockType: 'summary', points: [{ text: 'Census mein caste data dobara aa raha hai.' }] },
  { blockType: 'callout', tone: 'pyq', body: 'Is topic pe 2019 mein 20 marks ka sawaal tha.' },
  { blockType: 'keyTerms', rows: [{ term: 'Dominant caste', meaning: 'M.N. Srinivas ka concept.' }] },
]

describe('aiLayoutSchema', () => {
  it('accepts a well-formed AI layout', () => {
    expect(aiLayoutSchema.safeParse(validLayout).success).toBe(true)
  })
  it('rejects unknown block types', () => {
    const result = aiLayoutSchema.safeParse([{ blockType: 'iframe', src: 'x' }])
    expect(result.success).toBe(false)
  })
  it('rejects unsafe links inside a CTA', () => {
    const result = aiLayoutSchema.safeParse([
      { blockType: 'cta', heading: 'Join karo', label: 'Go', href: 'javascript:alert(1)' },
    ])
    expect(result.success).toBe(false)
  })
  it('rejects an empty layout', () => {
    expect(aiLayoutSchema.safeParse([]).success).toBe(false)
  })
  it('rejects an invalid callout tone', () => {
    const result = aiLayoutSchema.safeParse([{ blockType: 'callout', tone: 'shout', body: 'hello there' }])
    expect(result.success).toBe(false)
  })
})
