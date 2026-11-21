import 'dotenv/config'
import OpenAI from 'openai'
import { z } from 'zod'
import { loadConfig } from './config'
import { apiRequest, getDailySpend } from './publish'
import { canSpend, estimateCost } from './cost'
import { finishRun, startRun } from './ledger'
import { groupStoriesByTopic } from './digest-utils'

const introSchema = z.object({ intro: z.string().max(700) }).strict()
type Story = { id: number; headline: string; date: string; aiMeta?: { relevance?: number }; topics?: ({ id: number; title: string; slug: string } | number)[] }
const argType = process.argv[2]
function isoWeekKey(value: Date): string {
  const date = new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()))
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7))
  const year = date.getUTCFullYear()
  const yearStart = new Date(Date.UTC(year, 0, 1))
  const week = Math.ceil(((date.getTime() - yearStart.getTime()) / 86_400_000 + 1) / 7)
  return `${year}-w${String(week).padStart(2, '0')}`
}
async function run(): Promise<void> {
  if (argType !== 'weekly' && argType !== 'monthly') throw new Error('Usage: tsx src/pipeline/digest.ts weekly|monthly')
  const config = loadConfig()
  const settings = await apiRequest<{ pipelineEnabled?: boolean; maxDailyUsd?: number }>(config, '/api/globals/site-settings')
  if (!settings.pipelineEnabled) return
  const estimate = estimateCost({ input: 14000, output: 500 }, config.PRICE_OPENAI_INPUT, config.PRICE_OPENAI_OUTPUT)
  if (!canSpend(await getDailySpend(config), estimate, settings.maxDailyUsd ?? 1)) throw new Error('Daily budget would be exceeded before digest generation')
  const run = await startRun(config, `digest.${argType}.v1`)
  try {
  const now = new Date()
  const to = new Date(now); to.setDate(to.getDate() - 1)
  const from = new Date(to); from.setDate(from.getDate() - (argType === 'weekly' ? 6 : to.getDate() - 1))
  const dateKey = argType === 'weekly' ? isoWeekKey(from) : `${from.getFullYear()}-${String(from.getMonth() + 1).padStart(2, '0')}`
  const data = await apiRequest<{ docs: Story[] }>(config, `/api/current-affairs?where[_status][equals]=published&where[date][greater_than_equal]=${from.toISOString()}&where[date][less_than_equal]=${to.toISOString()}&limit=200&depth=2&sort=-aiMeta.relevance`)
  const grouped = groupStoriesByTopic(data.docs.sort((a, b) => (b.aiMeta?.relevance ?? 0) - (a.aiMeta?.relevance ?? 0)).map((story) => ({ ...story, topics: story.topics ?? [] })))
  const jsonSchema = z.toJSONSchema(introSchema, { target: 'draft-7' }) as Record<string, unknown>
  const ai = new OpenAI({ apiKey: config.OPENAI_API_KEY })
  const introResponse = await ai.responses.create({ model: config.WRITER_MODEL, instructions: 'Write an accurate Roman Hinglish digest introduction in at most 80 words using only supplied headlines.', input: JSON.stringify(data.docs.map(({ headline }) => headline)), text: { format: { type: 'json_schema', name: 'digest_intro', strict: true, schema: jsonSchema } } })
  const { intro } = introSchema.parse(JSON.parse(introResponse.output_text))
  await apiRequest(config, '/api/digests', { method: 'POST', body: JSON.stringify({ type: argType, key: dateKey, range: { from: from.toISOString(), to: to.toISOString() }, intro, groups: grouped.map((group) => ({ topic: group.topic, items: group.items.map(({ id }) => id) })), _status: 'draft' }) })
  const inputTokens = introResponse.usage?.input_tokens ?? 0
  const outputTokens = introResponse.usage?.output_tokens ?? 0
  const cost = estimateCost({ input: inputTokens, output: outputTokens }, config.PRICE_OPENAI_INPUT, config.PRICE_OPENAI_OUTPUT)
  await finishRun(config, run.id, 'ok', cost, { input: inputTokens, output: outputTokens, cached: introResponse.usage?.input_tokens_details?.cached_tokens ?? 0 }, { written: 1 })
  } catch (error) {
    await finishRun(config, run.id, 'failed', estimate, { input: 0, output: 0, cached: 0 }, { failedValidation: 1 }, error instanceof Error ? error.message : 'digest generation failed')
    throw error
  }
}
void run().catch((error: unknown) => { console.error(error instanceof Error ? error.message : 'Digest pipeline failed'); process.exitCode = 1 })
