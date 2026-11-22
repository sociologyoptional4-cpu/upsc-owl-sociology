import type { Payload } from 'payload'
import { z } from 'zod'

import { lexicalToPlain, type LexRoot } from '@/lib/blog/text'
import { loadSmartConfig, type SmartConfig } from '@/lib/smart/config'
import { SmartError } from '@/lib/smart/errors'
import { assertBudget, priceOf, recordRun, roughTokens } from '@/lib/smart/ledger'
import { openaiJson } from '@/lib/smart/llm'
import { loadPostQuizPrompt } from '@/lib/smart/prompts'

const itemSchema = z.object({
  question: z.string().trim().min(8).max(400),
  options: z.array(z.string().trim().min(1).max(200)).length(4),
  answerIndex: z.number().int().min(0).max(3),
  explanation: z.string().trim().min(8).max(600),
})
const outputSchema = z.object({ items: z.array(itemSchema).min(1).max(5) })
export type PostQuizItem = z.infer<typeof itemSchema>

/** Pure: model output → rows for `posts.quiz` (options as {text}). Throws a Hinglish error if unusable. */
export function toQuizRows(raw: unknown): { question: string; options: { text: string }[]; answerIndex: number; explanation: string }[] {
  const parsed = outputSchema.safeParse(raw)
  if (!parsed.success) throw new SmartError('AI ka quiz format sahi nahi aaya. Dobara try karo.', 502)
  return parsed.data.items.slice(0, 3).map((item) => ({ ...item, options: item.options.map((text) => ({ text })) }))
}

/** Reads the saved draft, writes a 3-question quiz into `posts.quiz`. Draft only; never publishes. */
export async function generatePostQuiz(payload: Payload, postId: number, config: SmartConfig = loadSmartConfig()): Promise<{ count: number }> {
  const post = await payload.findByID({ collection: 'posts', id: postId, draft: true, depth: 0, overrideAccess: true })
  const text = lexicalToPlain(post.content as LexRoot).slice(0, 14_000)
  if (text.split(/\s+/).filter(Boolean).length < 120) throw new SmartError('Quiz ke liye post mein kam se kam 120 words chahiye.', 422)
  await assertBudget(payload, config, { input: roughTokens(text.length) + 800, output: 900 })
  const call = await openaiJson(config, loadPostQuizPrompt(), { title: post.title, text })
  const rows = toQuizRows(call.json)
  await payload.update({ collection: 'posts', id: postId, draft: true, overrideAccess: true, context: { skipBlogOrganize: true, skipExternal: true, disableRevalidate: true }, data: { quiz: rows } })
  await recordRun(payload, { kind: 'smart-paste', promptVersion: 'smart-post-quiz.v1', costUsd: priceOf(config, call.usage, { input: 0, output: 0 }), tokens: call.usage, written: rows.length })
  return { count: rows.length }
}
