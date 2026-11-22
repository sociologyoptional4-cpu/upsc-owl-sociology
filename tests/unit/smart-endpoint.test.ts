import { describe, expect, it, vi } from 'vitest'

vi.mock('@/lib/smart/quiz', () => ({ smartQuiz: vi.fn(async () => ({ quizId: 1, adminUrl: '/x', added: 1, flags: [] })) }))
vi.mock('@/lib/smart/currentAffair', () => ({ smartCurrentAffair: vi.fn(async () => ({ id: 2, adminUrl: '/admin/review', headline: 'h', topics: [], thinkers: [], warnings: [] })) }))

import { smartEndpoints } from '@/endpoints/smart'
import { smartCurrentAffair } from '@/lib/smart/currentAffair'
import { SmartError } from '@/lib/smart/errors'

type Req = Parameters<(typeof smartEndpoints)[0]['handler']>[0]
const make = (user: { id: number; role: string } | null, body: unknown) => ({
  user, headers: new Headers(), payload: { logger: { error: vi.fn() } },
  text: async () => (typeof body === 'string' ? body : JSON.stringify(body)),
}) as unknown as Req
const quiz = smartEndpoints.find((e) => e.path === '/smart/quiz')!
const ca = smartEndpoints.find((e) => e.path === '/smart/current-affair')!
const text = 'x'.repeat(40)

describe('smart endpoints', () => {
  it('rejects anonymous and ai-bot callers', async () => {
    expect((await quiz.handler(make(null, { text }))).status).toBe(401)
    expect((await quiz.handler(make({ id: 1, role: 'ai-bot' }, { text }))).status).toBe(401)
  })

  it('validates input with Hinglish messages', async () => {
    const short = await quiz.handler(make({ id: 2, role: 'editor' }, { text: 'chhota' }))
    expect(short.status).toBe(400)
    expect((await short.json()).error).toContain('paste karo')
    expect((await quiz.handler(make({ id: 2, role: 'editor' }, 'not json'))).status).toBe(400)
    expect((await quiz.handler(make({ id: 2, role: 'editor' }, { text, extra: 1 }))).status).toBe(400)
    expect((await quiz.handler(make({ id: 2, role: 'editor' }, { text, date: '2026-02-31' }))).status).toBe(400)
  })

  it('returns the envelope on success', async () => {
    const res = await quiz.handler(make({ id: 3, role: 'admin' }, { text, date: '2026-11-22' }))
    expect(res.status).toBe(200)
    expect(await res.json()).toMatchObject({ success: true, data: { quizId: 1 }, error: null })
  })

  it('passes SmartError status and data through (409 duplicate)', async () => {
    vi.mocked(smartCurrentAffair).mockRejectedValueOnce(new SmartError('Ye khabar pehle se hai.', 409, { id: 9 }))
    const res = await ca.handler(make({ id: 4, role: 'editor' }, { text }))
    expect(res.status).toBe(409)
    expect(await res.json()).toMatchObject({ success: false, data: { id: 9 }, error: 'Ye khabar pehle se hai.' })
  })

  it('hides unexpected errors behind a generic message', async () => {
    vi.mocked(smartCurrentAffair).mockRejectedValueOnce(new Error('sk-secret leaked in message'))
    const res = await ca.handler(make({ id: 5, role: 'editor' }, { text }))
    expect(res.status).toBe(500)
    expect(JSON.stringify(await res.json())).not.toContain('sk-secret')
  })

  it('rate limits a user after 6 calls per minute', async () => {
    let last = 200
    for (let i = 0; i < 8; i += 1) last = (await ca.handler(make({ id: 99, role: 'editor' }, { text }))).status
    expect(last).toBe(429)
  })
})
