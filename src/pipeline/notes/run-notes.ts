/**
 * Daily topic-notes writer: next N empty syllabus topics → OpenAI note → POST /api/ingest/notes (draft, review queue).
 * Run: npm run notes:daily  |  npm run notes:dry   (env NOTES_PER_DAY, default 5, max 5)
 */
import 'dotenv/config'

import { canSpend, estimateCost } from '../cost'
import { loadConfig, type PipelineConfig } from '../config'
import { finishRun, startRun } from '../ledger'
import { apiRequest, getDailySpend } from '../publish'
import { handoutBackground } from './handouts'
import { NOTES_PROMPT_VERSION, type WrittenNote, writeNote } from './writer'

type Settings = { pipelineEnabled?: boolean; maxDailyUsd?: number }
type NextTopic = {
  id: number
  slug: string
  title: string
  unitTitle: string
  paper: 'P1' | 'P2'
  pyqs: { year: number; question: string }[]
  allowedThinkerSlugs: string[]
}

const MAX_PER_DAY = 5
const EST_TOKENS = { input: 9000, output: 3500 }

const perDay = () => Math.min(MAX_PER_DAY, Math.max(1, Number(process.env.NOTES_PER_DAY ?? MAX_PER_DAY) || MAX_PER_DAY))

async function writeWithRetry(config: PipelineConfig, topic: NextTopic, background: string): Promise<WrittenNote> {
  const input = { topicTitle: topic.title, unitTitle: topic.unitTitle, paper: topic.paper, pyqs: topic.pyqs, allowedThinkerSlugs: topic.allowedThinkerSlugs, background }
  try {
    return await writeNote(config, input)
  } catch (error) {
    const hint = error instanceof Error ? error.message : 'invalid output'
    return writeNote(config, input, hint)
  }
}

async function main(): Promise<void> {
  const config = loadConfig()
  const settings = await apiRequest<Settings>(config, '/api/globals/site-settings')
  if (!settings.pipelineEnabled) { console.info('Pipeline disabled in site settings'); return }
  const maxUsd = settings.maxDailyUsd ?? 1
  const next = await apiRequest<{ topics: NextTopic[] }>(config, `/api/ingest/notes/next?limit=${perDay()}`)
  if (next.topics.length === 0) { console.info('No empty topics left to write'); return }

  const run = config.DRY_RUN ? null : await startRun(config, NOTES_PROMPT_VERSION)
  const counts = { picked: next.topics.length, written: 0, failed: 0 }
  const tokens = { input: 0, output: 0, cached: 0 }
  const errors: string[] = []
  let cost = 0
  const spent = await getDailySpend(config)

  for (const topic of next.topics) {
    const estimate = estimateCost(EST_TOKENS, config.PRICE_OPENAI_INPUT, config.PRICE_OPENAI_OUTPUT)
    if (!canSpend(spent + cost, estimate, maxUsd)) { errors.push('Daily budget reached'); break }
    try {
      const written = await writeWithRetry(config, topic, handoutBackground(topic.slug))
      const itemCost = estimateCost({ input: written.inputTokens, output: written.outputTokens }, config.PRICE_OPENAI_INPUT, config.PRICE_OPENAI_OUTPUT)
      cost += itemCost
      tokens.input += written.inputTokens
      tokens.output += written.outputTokens
      if (config.DRY_RUN) {
        const headings = written.note.bodyMarkdown.split('\n').filter((l) => l.startsWith('## ')).map((l) => l.slice(3))
        console.info(JSON.stringify({ topic: topic.slug, headings, keyTerms: written.note.keyTerms.map((k) => k.term), pyqs: topic.pyqs.length }))
      } else {
        await apiRequest(config, '/api/ingest/notes', {
          method: 'POST',
          body: JSON.stringify({ topicId: topic.id, note: written.note, model: config.WRITER_MODEL, promptVersion: NOTES_PROMPT_VERSION, costUsd: itemCost }),
        })
      }
      counts.written += 1
    } catch (error) {
      counts.failed += 1
      errors.push(`${topic.slug}: ${error instanceof Error ? error.message.slice(0, 200) : 'failed'}`)
    }
  }

  if (errors.length) console.error(JSON.stringify({ errors }, null, 2))
  console.info(JSON.stringify({ counts, costUsd: Number(cost.toFixed(4)) }))
  if (run) await finishRun(config, run.id, counts.failed && !counts.written ? 'failed' : 'ok', cost, tokens, counts, errors.join(' | ') || undefined)
}

void main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : 'Notes run failed')
  process.exitCode = 1
})
