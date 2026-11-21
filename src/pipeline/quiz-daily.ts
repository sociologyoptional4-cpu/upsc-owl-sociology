import 'dotenv/config'
import OpenAI from 'openai'
import { z } from 'zod'
import { loadConfig } from './config'
import { apiRequest, getDailySpend } from './publish'
import { canSpend, estimateCost } from './cost'
import { finishRun, startRun } from './ledger'
import { quizSchema } from './quiz-schema'

type TodayItem = { id: number; headline: string; summary?: string }
async function run(): Promise<void> {
  const config = loadConfig()
  const settings = await apiRequest<{ pipelineEnabled?: boolean; maxDailyUsd?: number }>(config, '/api/globals/site-settings')
  if (!settings.pipelineEnabled) return
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date())
  const current = await apiRequest<{ docs: TodayItem[] }>(config, `/api/current-affairs?where[date][equals]=${today}&where[_status][equals]=published&limit=50`)
  if (current.docs.length < 1) return
  const estimate = estimateCost({ input: 12000, output: 2500 }, config.PRICE_OPENAI_INPUT, config.PRICE_OPENAI_OUTPUT)
  if (!canSpend(await getDailySpend(config), estimate, settings.maxDailyUsd ?? 1)) throw new Error('Daily budget would be exceeded before quiz generation')
  const run = await startRun(config, 'quiz.v1')
  try {
  const schema = z.toJSONSchema(quizSchema, { target: 'draft-7' }) as Record<string, unknown>
  const ai = new OpenAI({ apiKey: config.OPENAI_API_KEY })
  const response = await ai.responses.create({ model: config.WRITER_MODEL, instructions: 'Create five evidence-based four-option Sociology Optional MCQs in concise Roman Hinglish. Cite only supplied news. Never invent facts.', input: JSON.stringify(current.docs), text: { format: { type: 'json_schema', name: 'daily_quiz', strict: true, schema } } })
  const quiz = quizSchema.parse(JSON.parse(response.output_text))
  if (quiz.items.some((item) => !current.docs.some((story) => story.id === item.caId))) throw new Error('Quiz references an unknown current-affairs id')
  await apiRequest(config, '/api/quizzes', { method: 'POST', body: JSON.stringify({ date: `${today}T00:00:00.000Z`, items: quiz.items.map((item) => ({ ...item, options: item.options.map((text) => ({ text })) })), _status: 'draft' }) })
  const inputTokens = response.usage?.input_tokens ?? 0
  const outputTokens = response.usage?.output_tokens ?? 0
  const cost = estimateCost({ input: inputTokens, output: outputTokens }, config.PRICE_OPENAI_INPUT, config.PRICE_OPENAI_OUTPUT)
  await finishRun(config, run.id, 'ok', cost, { input: inputTokens, output: outputTokens, cached: response.usage?.input_tokens_details?.cached_tokens ?? 0 }, { written: quiz.items.length })
  } catch (error) {
    await finishRun(config, run.id, 'failed', estimate, { input: 0, output: 0, cached: 0 }, { failedValidation: 1 }, error instanceof Error ? error.message : 'quiz generation failed')
    throw error
  }
}
void run().catch((error: unknown) => { console.error(error instanceof Error ? error.message : 'Quiz pipeline failed'); process.exitCode = 1 })
