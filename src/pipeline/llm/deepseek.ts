import type { PipelineConfig } from '../config'
import type { FeedItem } from '../clean'
import { z } from 'zod'

export type Score = { id: string; relevant: boolean; score: number; paper: 'P1' | 'P2' | 'Both'; candidateTopicSlugs: string[]; reason: string }
const scoreSchema = z.array(z.object({ id: z.string(), relevant: z.boolean(), score: z.number().min(0).max(1), paper: z.enum(['P1', 'P2', 'Both']), candidateTopicSlugs: z.array(z.string().max(120)).max(20), reason: z.string().max(300).refine((value) => value.trim().split(/\s+/).length <= 20) }).strict()).max(20)
export async function scoreItems(config: PipelineConfig, items: FeedItem[], topics: string[], prompt: string): Promise<{ items: Score[]; inputTokens: number; outputTokens: number }> {
  const response = await fetch(`${config.DEEPSEEK_BASE_URL}/chat/completions`, { method: 'POST', headers: { authorization: `Bearer ${config.DEEPSEEK_API_KEY}`, 'content-type': 'application/json' }, body: JSON.stringify({ model: config.SCORER_MODEL, response_format: { type: 'json_object' }, messages: [{ role: 'system', content: `${prompt}\nAllowed topic slugs: ${topics.join(', ')}` }, { role: 'user', content: JSON.stringify(items.map((item, index) => ({ id: String(index), title: item.title, description: item.description, source: item.source }))) }] }) })
  if (!response.ok) throw new Error(`Scorer request failed (${response.status})`)
  const body = await response.json() as { choices?: { message?: { content?: string } }[]; usage?: { prompt_tokens?: number; completion_tokens?: number } }
  const content = body.choices?.[0]?.message?.content
  if (!content) throw new Error('Scorer returned no content')
  const parsed: unknown = JSON.parse(content)
  const scores = Array.isArray(parsed) ? parsed : typeof parsed === 'object' && parsed !== null && 'items' in parsed && Array.isArray(parsed.items) ? parsed.items : null
  if (scores) return { items: scoreSchema.parse(scores), inputTokens: body.usage?.prompt_tokens ?? 0, outputTokens: body.usage?.completion_tokens ?? 0 }
  throw new Error('Scorer output is not an array')
}
