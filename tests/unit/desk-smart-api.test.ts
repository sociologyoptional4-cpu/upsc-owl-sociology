import { afterEach, describe, expect, it, vi } from 'vitest'

import { DeskError, smartCurrentAffair, smartQuiz } from '@/components/admin/write/api'

const reply = (status: number, body: unknown) => vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(body), { status })))
afterEach(() => vi.unstubAllGlobals())

describe('smart paste client', () => {
  it('turns quiz flags into readable Hinglish warnings', async () => {
    reply(200, { success: true, error: null, data: { quizId: 4, adminUrl: '/admin/collections/quizzes/4', added: 5, flags: [{ index: 0, kind: 'answer-guessed' }, { index: 2, kind: 'no-story-match' }] } })
    const out = await smartQuiz('x'.repeat(40))
    expect(out.detail).toBe('5 sawal')
    expect(out.warnings).toEqual(['Sawal 1: answer AI ne guess kiya, check karo', 'Sawal 3: koi current affair match nahi hua'])
  })

  it('sends current affairs to the review queue', async () => {
    reply(200, { success: true, error: null, data: { id: 9, adminUrl: '/x', headline: 'Headline', topics: ['a', 'b'], thinkers: [], warnings: ['Source link nahi mila'] } })
    const out = await smartCurrentAffair('x'.repeat(40), 'https://example.com/a')
    expect(out.adminUrl).toBe('/admin/review')
    expect(out.warnings).toEqual(['Source link nahi mila'])
  })

  it('explains a missing endpoint instead of a raw 404', async () => {
    reply(404, {})
    await expect(smartQuiz('x'.repeat(40))).rejects.toThrow('ready nahi')
  })

  it('keeps the existing draft link on 409', async () => {
    reply(409, { success: false, error: 'Duplicate', data: { id: 7, adminUrl: '/admin/review' } })
    const error = await smartCurrentAffair('x'.repeat(40)).catch((e: unknown) => e)
    expect(error).toBeInstanceOf(DeskError)
    expect((error as DeskError).existing?.postId).toBe(7)
  })
})
