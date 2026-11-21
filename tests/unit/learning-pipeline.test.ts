import type { CollectionAfterChangeHook } from 'payload'
import { describe, expect, it, vi } from 'vitest'
import { escapeTelegramHTML, postCurrentAffair } from '@/lib/telegram/postCurrentAffair'
import { groupStoriesByTopic } from '@/pipeline/digest-utils'
import { quizSchema } from '@/pipeline/quiz-schema'

describe('learning and Telegram helpers', () => {
  it('escapes Telegram HTML metacharacters', () => {
    expect(escapeTelegramHTML('<headline & "quote">')).toBe('&lt;headline &amp; &quot;quote&quot;&gt;')
  })
  it('groups stories by topic while retaining relevance order', () => {
    const groups = groupStoriesByTopic([{ id: 2, topics: [4, { id: 6 }] }, { id: 1, topics: [4] }])
    expect(groups).toEqual([{ topic: 4, items: [{ id: 2, topics: [4, { id: 6 }] }, { id: 1, topics: [4] }] }, { topic: 6, items: [{ id: 2, topics: [4, { id: 6 }] }] }])
  })
  it('validates five MCQs with four choices and bounded answer indexes', () => {
    const one = { question: 'Which concept explains this social pattern?', options: ['A', 'B', 'C', 'D'], answerIndex: 3, explanation: 'The supplied current affair supports this explanation.', caId: 1 }
    expect(quizSchema.safeParse({ items: Array.from({ length: 5 }, () => one) }).success).toBe(true)
    expect(quizSchema.safeParse({ items: Array.from({ length: 5 }, () => ({ ...one, answerIndex: 4 })) }).success).toBe(false)
  })
  it('does not post again after a Telegram message ID is stored', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    vi.stubEnv('TELEGRAM_BOT_TOKEN', 'test-token')
    vi.stubEnv('TELEGRAM_CHANNEL_ID', 'test-channel')
    const args = { doc: { id: 7, _status: 'published', telegramMessageId: '123' }, previousDoc: { _status: 'draft' }, req: {}, context: {} } as unknown as Parameters<CollectionAfterChangeHook>[0]
    await postCurrentAffair(args)
    expect(fetchMock).not.toHaveBeenCalled()
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  })
})
