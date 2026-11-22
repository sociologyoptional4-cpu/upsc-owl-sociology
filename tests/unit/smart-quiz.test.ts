import { beforeEach, describe, expect, it, vi } from 'vitest'

import { SmartError } from '@/lib/smart/errors'

const openaiJson = vi.fn()
const deepseekJson = vi.fn()
vi.mock('@/lib/smart/llm', () => ({ openaiJson: (...a: unknown[]) => openaiJson(...a), deepseekJson: (...a: unknown[]) => deepseekJson(...a) }))

import { applyMatches, normalizeQuiz, smartQuiz } from '@/lib/smart/quiz'

const config = { OPENAI_API_KEY: 'k', DEEPSEEK_API_KEY: 'k', DEEPSEEK_BASE_URL: 'https://x', WRITER_MODEL: 'w', SCORER_MODEL: 's', EMBEDDING_MODEL: 'e', PRICE_OPENAI_INPUT: 1, PRICE_OPENAI_OUTPUT: 1, PRICE_OPENAI_EMBEDDING: 1, PRICE_DEEPSEEK_INPUT: 1, PRICE_DEEPSEEK_OUTPUT: 1 }
const mcq = (over: Record<string, unknown> = {}) => ({ question: 'Which thinker coined anomie?', options: ['Marx', 'Durkheim', 'Weber', 'Mead'], answerIndex: 1, answerGiven: true, explanation: 'Durkheim ne anomie diya.', explanationGiven: true, ...over })

type Doc = Record<string, unknown>
function fakePayload(opts: { stories?: Doc[]; quiz?: Doc | null } = {}) {
  const created: Doc[] = []
  const updated: Doc[] = []
  const payload = {
    findGlobal: vi.fn(async () => ({ maxDailyUsd: 5 })),
    find: vi.fn(async ({ collection }: { collection: string }) => {
      if (collection === 'pipeline-runs') return { docs: [] }
      if (collection === 'current-affairs') return { docs: opts.stories ?? [] }
      if (collection === 'quizzes') return { docs: opts.quiz ? [opts.quiz] : [] }
      return { docs: [] }
    }),
    create: vi.fn(async (args: Doc) => { created.push(args); return { id: 11 } }),
    update: vi.fn(async (args: Doc) => { updated.push(args); return { id: 5 } }),
    logger: { error: vi.fn() },
  }
  return { payload: payload as never, created, updated, raw: payload }
}

beforeEach(() => { openaiJson.mockReset(); deepseekJson.mockReset() })

describe('normalizeQuiz', () => {
  it('keeps given answers and explanations without flags', () => {
    const out = normalizeQuiz({ items: [mcq()] })
    expect(out.flags).toEqual([])
    expect(out.items[0]).toMatchObject({ answerIndex: 1, options: [{ text: 'Marx' }, { text: 'Durkheim' }, { text: 'Weber' }, { text: 'Mead' }] })
  })

  it('flags guessed answers and written explanations per question', () => {
    const out = normalizeQuiz({ items: [mcq(), mcq({ answerGiven: false, explanationGiven: false })] })
    expect(out.flags).toEqual([{ index: 1, kind: 'answer-guessed' }, { index: 1, kind: 'explanation-written' }])
  })

  it('trims a 5th option with a flag but rejects fewer than 4', () => {
    const out = normalizeQuiz({ items: [mcq({ options: ['A', 'B', 'C', 'D', 'E'] })] })
    expect(out.items[0]!.options).toHaveLength(4)
    expect(out.flags).toContainEqual({ index: 0, kind: 'options-fixed' })
    expect(() => normalizeQuiz({ items: [mcq({ options: ['A', 'B', 'C'] })] })).toThrow(/4 se kam/)
  })

  it('rejects an answer outside the 4 kept options and malformed output', () => {
    expect(() => normalizeQuiz({ items: [mcq({ options: ['A', 'B', 'C', 'D', 'E'], answerIndex: 4 })] })).toThrow(SmartError)
    expect(() => normalizeQuiz({ items: [] })).toThrow(SmartError)
    expect(() => normalizeQuiz('nope')).toThrow(SmartError)
  })
})

describe('applyMatches', () => {
  const items = normalizeQuiz({ items: [mcq(), mcq()] }).items
  it('accepts only ids from the candidate list', () => {
    const out = applyMatches(items, { matches: [{ index: 0, caId: 3 }, { index: 1, caId: 999 }] }, new Set([3]))
    expect(out.items[0]!.caId).toBe(3)
    expect(out.items[1]!.caId).toBeUndefined()
    expect(out.flags).toEqual([{ index: 1, kind: 'no-story-match' }])
  })
  it('treats garbage model output as no match', () => {
    expect(applyMatches(items, 'garbage', new Set([3])).flags).toHaveLength(2)
  })
})

describe('smartQuiz', () => {
  it('creates a draft quiz, links stories and returns flags', async () => {
    openaiJson.mockResolvedValue({ json: { items: [mcq({ answerGiven: false })] }, usage: { input: 100, output: 50 } })
    deepseekJson.mockResolvedValue({ json: { matches: [{ index: 0, caId: 7 }] }, usage: { input: 10, output: 5 } })
    const { payload, created } = fakePayload({ stories: [{ id: 7, headline: 'Census caste data' }] })
    const out = await smartQuiz(payload, { text: 'x'.repeat(40), date: '2026-11-22' }, config)
    expect(out).toMatchObject({ quizId: 11, added: 1, adminUrl: '/admin/collections/quizzes/11', flags: [{ index: 0, kind: 'answer-guessed' }] })
    const quiz = created.find((c) => c.collection === 'quizzes') as { data: { items: { caId: number }[]; _status: string } }
    expect(quiz.data._status).toBe('draft')
    expect(quiz.data.items[0]!.caId).toBe(7)
    expect(created.some((c) => c.collection === 'pipeline-runs')).toBe(true)
  })

  it('retries once with a repair hint when the first output is invalid, and gives up after the second', async () => {
    openaiJson.mockResolvedValueOnce({ json: { items: [mcq({ explanation: '' })] }, usage: { input: 1, output: 1 } })
      .mockResolvedValueOnce({ json: { items: [mcq()] }, usage: { input: 1, output: 1 } })
    const { payload } = fakePayload()
    const out = await smartQuiz(payload, { text: 'x'.repeat(40) }, config)
    expect(openaiJson).toHaveBeenCalledTimes(2)
    expect(JSON.stringify(openaiJson.mock.calls[1]![2])).toContain('repair')
    expect(out.added).toBe(1)
    openaiJson.mockReset()
    openaiJson.mockResolvedValue({ json: { items: [] }, usage: { input: 1, output: 1 } })
    await expect(smartQuiz(fakePayload().payload, { text: 'x'.repeat(40) }, config)).rejects.toMatchObject({ status: 422 })
    expect(openaiJson).toHaveBeenCalledTimes(2)
  })

  it('skips the match call and flags no-story-match when there are no stories', async () => {
    openaiJson.mockResolvedValue({ json: { items: [mcq()] }, usage: { input: 1, output: 1 } })
    const { payload } = fakePayload()
    const out = await smartQuiz(payload, { text: 'x'.repeat(40) }, config)
    expect(deepseekJson).not.toHaveBeenCalled()
    expect(out.flags).toEqual([{ index: 0, kind: 'no-story-match' }])
  })

  it('appends to an existing draft quiz and refuses a published one', async () => {
    openaiJson.mockResolvedValue({ json: { items: [mcq()] }, usage: { input: 1, output: 1 } })
    const draft = fakePayload({ quiz: { id: 5, _status: 'draft', items: [{ question: 'old' }] } })
    await smartQuiz(draft.payload, { text: 'x'.repeat(40) }, config)
    expect((draft.updated[0] as { data: { items: unknown[] } }).data.items).toHaveLength(2)
    const live = fakePayload({ quiz: { id: 6, _status: 'published', items: [] } })
    await expect(smartQuiz(live.payload, { text: 'x'.repeat(40) }, config)).rejects.toMatchObject({ status: 409, data: { quizId: 6 } })
  })

  it('stops before any AI call when the daily budget is used up', async () => {
    const { payload, raw } = fakePayload()
    raw.findGlobal.mockResolvedValue({ maxDailyUsd: 0.0001 })
    await expect(smartQuiz(payload, { text: 'x'.repeat(4000) }, config)).rejects.toMatchObject({ status: 429 })
    expect(openaiJson).not.toHaveBeenCalled()
  })
})
