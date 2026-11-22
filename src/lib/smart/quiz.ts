import type { Payload } from 'payload'
import { z } from 'zod'

import { SmartError } from './errors'
import { loadSmartConfig, type SmartConfig } from './config'
import { deepseekJson, openaiJson, type Usage } from './llm'
import { assertBudget, priceOf, recordRun, roughTokens, todayIST } from './ledger'
import { loadMatchPrompt, loadQuizPrompt } from './prompts'

export type QuizFlagKind = 'answer-guessed' | 'explanation-written' | 'no-story-match' | 'options-fixed'
export type QuizFlag = { index: number; kind: QuizFlagKind }
export type QuizItem = { question: string; options: { text: string }[]; answerIndex: number; explanation: string; caId?: number }
export type QuizResult = { quizId: number; adminUrl: string; added: number; flags: QuizFlag[] }

const MAX_ITEMS = 10

const parsedSchema = z.object({ items: z.array(z.object({
  question: z.string().trim().min(5), options: z.array(z.string().trim().min(1)).min(2).max(10),
  answerIndex: z.number().int().min(0).max(9), answerGiven: z.boolean(),
  explanation: z.string().trim().min(5), explanationGiven: z.boolean(),
}).strict()).min(1).max(MAX_ITEMS) }).strict()

const matchSchema = z.object({ matches: z.array(z.object({ index: z.number().int(), caId: z.number().int().positive().optional() })) })

/** Pure: model output → quiz rows + flags. Rejects anything that cannot become a valid 4-option MCQ. */
export function normalizeQuiz(raw: unknown): { items: QuizItem[]; flags: QuizFlag[] } {
  const parsed = parsedSchema.safeParse(raw)
  if (!parsed.success) throw new SmartError('AI MCQs ko theek se samajh nahi paya. Format check karo (har sawal ke 4 options) aur dobara try karo.', 422)
  const flags: QuizFlag[] = []
  const items = parsed.data.items.map((item, index): QuizItem => {
    if (item.options.length < 4) throw new SmartError(`Sawal ${index + 1} mein 4 se kam options hain. Pura sawal paste karo.`, 422)
    if (item.answerIndex > 3) throw new SmartError(`Sawal ${index + 1} ka sahi answer 4 options ke bahar nikla. Check karo.`, 422)
    if (item.options.length > 4) flags.push({ index, kind: 'options-fixed' })
    if (!item.answerGiven) flags.push({ index, kind: 'answer-guessed' })
    if (!item.explanationGiven) flags.push({ index, kind: 'explanation-written' })
    return { question: item.question, options: item.options.slice(0, 4).map((text) => ({ text })), answerIndex: item.answerIndex, explanation: item.explanation }
  })
  return { items, flags }
}

/** Pure: keeps only story ids that really exist; everything else becomes "no match". */
export function applyMatches(items: QuizItem[], raw: unknown, allowedIds: ReadonlySet<number>): { items: QuizItem[]; flags: QuizFlag[] } {
  const parsed = matchSchema.safeParse(raw)
  const byIndex = new Map((parsed.success ? parsed.data.matches : []).map((m) => [m.index, m.caId]))
  const flags: QuizFlag[] = []
  const matched = items.map((item, index) => {
    const id = byIndex.get(index)
    if (id !== undefined && allowedIds.has(id)) return { ...item, caId: id }
    flags.push({ index, kind: 'no-story-match' })
    return item
  })
  return { items: matched, flags }
}

/** One repair retry: models sometimes leave an explanation empty; a hint fixes it without bothering the owner. */
async function parseWithRetry(config: SmartConfig, text: string): Promise<{ parseCall: { json: unknown; usage: Usage }; normalized: ReturnType<typeof normalizeQuiz> }> {
  const first = await openaiJson(config, loadQuizPrompt(), { pasted: text })
  try { return { parseCall: first, normalized: normalizeQuiz(first.json) } } catch (error) {
    if (!(error instanceof SmartError) || error.status !== 422 || !/samajh nahi/.test(error.message)) throw error
    const second = await openaiJson(config, loadQuizPrompt(), { pasted: text, repair: 'Your previous output was invalid. Every item needs a non-empty explanation (write one if the paste has none), an integer answerIndex and the options array. Return the full corrected json.' })
    return { parseCall: { json: second.json, usage: { input: first.usage.input + second.usage.input, output: first.usage.output + second.usage.output } }, normalized: normalizeQuiz(second.json) }
  }
}

async function recentStories(payload: Payload, date: string): Promise<{ id: number; headline: string }[]> {
  const from = new Date(new Date(`${date}T00:00:00Z`).getTime() - 7 * 86_400_000).toISOString()
  const found = await payload.find({ collection: 'current-affairs', where: { and: [{ date: { greater_than_equal: from } }, { date: { less_than_equal: `${date}T23:59:59.999Z` } }] }, sort: '-date', limit: 40, depth: 0, draft: true, overrideAccess: true, select: { headline: true } })
  return found.docs.map((doc) => ({ id: Number(doc.id), headline: doc.headline }))
}

async function saveQuiz(payload: Payload, date: string, items: QuizItem[]): Promise<number> {
  const iso = `${date}T00:00:00.000Z`
  const found = await payload.find({ collection: 'quizzes', where: { date: { equals: iso } }, limit: 1, depth: 0, draft: true, overrideAccess: true })
  const existing = found.docs[0]
  if (!existing) return Number((await payload.create({ collection: 'quizzes', draft: true, overrideAccess: true, data: { date: iso, items, _status: 'draft' } })).id)
  if (existing._status === 'published') throw new SmartError('Is din ka quiz pehle se publish hai. Admin mein jaakar edit karo.', 409, { quizId: existing.id, adminUrl: `/admin/collections/quizzes/${existing.id}` })
  const merged = [...(existing.items ?? []), ...items]
  if (merged.length > MAX_ITEMS) throw new SmartError(`Ek quiz mein max ${MAX_ITEMS} sawal ho sakte hain (pehle se ${existing.items?.length ?? 0} hain).`, 400)
  await payload.update({ collection: 'quizzes', id: existing.id, draft: true, overrideAccess: true, data: { items: merged as never } })
  return Number(existing.id)
}

export async function smartQuiz(payload: Payload, input: { text: string; date?: string }, config: SmartConfig = loadSmartConfig()): Promise<QuizResult> {
  const date = input.date ?? todayIST()
  await assertBudget(payload, config, { input: roughTokens(input.text.length) + 3000, output: 3000 })
  const { parseCall, normalized } = await parseWithRetry(config, input.text)
  const stories = await recentStories(payload, date)
  let usage2: Usage = { input: 0, output: 0 }
  let matched = { items: normalized.items, flags: [] as QuizFlag[] }
  if (stories.length > 0) {
    const matchCall = await deepseekJson(config, loadMatchPrompt(), { questions: normalized.items.map((item, index) => ({ index, question: item.question })), stories })
    usage2 = matchCall.usage
    matched = applyMatches(normalized.items, matchCall.json, new Set(stories.map((s) => s.id)))
  } else matched.flags = normalized.items.map((_, index) => ({ index, kind: 'no-story-match' as const }))
  const quizId = await saveQuiz(payload, date, matched.items)
  await recordRun(payload, { kind: 'smart-paste', promptVersion: 'smart-quiz.v1', costUsd: priceOf(config, parseCall.usage, usage2), tokens: { input: parseCall.usage.input + usage2.input, output: parseCall.usage.output + usage2.output }, written: matched.items.length })
  const flags = [...normalized.flags, ...matched.flags].sort((a, b) => a.index - b.index)
  return { quizId, adminUrl: `/admin/collections/quizzes/${quizId}`, added: matched.items.length, flags }
}
