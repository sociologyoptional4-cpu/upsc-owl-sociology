import type { PipelineConfig } from '../config'

type ScoreConfig = Pick<PipelineConfig, 'DEEPSEEK_BASE_URL' | 'DEEPSEEK_API_KEY' | 'SCORER_MODEL'>
import type { FeedItem } from '../clean'
import { z } from 'zod'

export type Score = { id: string; relevant: boolean; score: number; paper: 'P1' | 'P2' | 'Both'; candidateTopicSlugs: string[]; reason: string }
const scoreSchema = z.array(z.object({ id: z.string(), relevant: z.boolean(), score: z.number().min(0).max(1), paper: z.enum(['P1', 'P2', 'Both']), candidateTopicSlugs: z.array(z.string().max(120)).max(20), reason: z.string().max(300).refine((value) => value.trim().split(/\s+/).length <= 20) }).strict()).max(20)
const isScoreLike = (value: unknown): boolean => typeof value === 'object' && value !== null && 'id' in value && 'score' in value
const isScoreList = (value: unknown): value is unknown[] => Array.isArray(value) && value.length > 0 && value.every(isScoreLike)

/** Accepts [..], {items:[..]} under any key, or a single score object; never an unrelated inner array. */
export function extractScoreList(parsed: unknown): unknown[] | null {
  if (isScoreList(parsed)) return parsed
  if (typeof parsed !== 'object' || parsed === null) return null
  if (isScoreLike(parsed)) return [parsed]
  return Object.values(parsed).find(isScoreList) ?? null
}

export async function scoreItems(config: ScoreConfig, items: FeedItem[], topics: string[], prompt: string): Promise<{ items: Score[]; inputTokens: number; outputTokens: number }> {
  const response = await fetch(`${config.DEEPSEEK_BASE_URL}/chat/completions`, { method: 'POST', headers: { authorization: `Bearer ${config.DEEPSEEK_API_KEY}`, 'content-type': 'application/json' }, body: JSON.stringify({ model: config.SCORER_MODEL, max_tokens: 16384, response_format: { type: 'json_object' }, messages: [{ role: 'system', content: `${prompt}\nAllowed topic slugs: ${topics.join(', ')}\n\nOUTPUT FORMAT (strict): return ONLY a JSON object {"items": [ ... ]} with exactly one entry per input item, in input order, each using that item's id.` }, { role: 'user', content: JSON.stringify(items.map((item, index) => ({ id: String(index), title: item.title, description: item.description, source: item.source }))) }] }) })
  if (!response.ok) throw new Error(`Scorer request failed (${response.status})`)
  const body = await response.json() as { choices?: { finish_reason?: string; message?: { content?: string } }[]; usage?: { prompt_tokens?: number; completion_tokens?: number } }
  const content = body.choices?.[0]?.message?.content
  if (!content) throw new Error(`Scorer returned no content (finish_reason: ${body.choices?.[0]?.finish_reason ?? 'unknown'})`)
  if (process.env.DEBUG_SCORER === '1') console.error('[scorer raw]', content.slice(0, 1500))
  const parsed: unknown = JSON.parse(content)
  // json_object mode forces an object; models wrap the list under varying keys (items/scores/results).
  const scores = extractScoreList(parsed)
  if (scores) return { items: scoreSchema.parse(scores), inputTokens: body.usage?.prompt_tokens ?? 0, outputTokens: body.usage?.completion_tokens ?? 0 }
  throw new Error(`Scorer output is not an array (keys: ${typeof parsed === 'object' && parsed !== null ? Object.keys(parsed).join(',') : typeof parsed})`)
}
