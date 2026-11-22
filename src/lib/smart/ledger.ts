import type { Payload } from 'payload'

import { canSpend, estimateCost } from '@/pipeline/cost'
import type { SmartConfig } from './config'
import { SmartError } from './errors'
import type { Usage } from './llm'

const istDay = (date = new Date()): string => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(date)
export const todayIST = (): string => istDay()

export const roughTokens = (chars: number): number => Math.ceil(chars / 3)

export async function spentToday(payload: Payload): Promise<number> {
  const from = new Date(`${istDay()}T00:00:00+05:30`).toISOString()
  const runs = await payload.find({ collection: 'pipeline-runs', where: { startedAt: { greater_than_equal: from } }, limit: 200, depth: 0, overrideAccess: true })
  return runs.docs.reduce((sum, run) => sum + (run.costUsd ?? 0), 0)
}

/** Same daily USD cap as the automated pipelines (site-settings.maxDailyUsd, default 1). */
export async function assertBudget(payload: Payload, config: SmartConfig, estimate: { input: number; output: number }): Promise<void> {
  const settings = await payload.findGlobal({ slug: 'site-settings', overrideAccess: true }) as { maxDailyUsd?: number }
  const cost = estimateCost(estimate, config.PRICE_OPENAI_INPUT, config.PRICE_OPENAI_OUTPUT)
  if (!canSpend(await spentToday(payload), cost, settings.maxDailyUsd ?? 1)) throw new SmartError('Aaj ka AI budget khatam ho gaya. Kal try karo ya Site Settings mein limit badhao.', 429)
}

export const priceOf = (config: SmartConfig, openai: Usage, deepseek: Usage, embeddingTokens = 0): number =>
  estimateCost(openai, config.PRICE_OPENAI_INPUT, config.PRICE_OPENAI_OUTPUT) + estimateCost(deepseek, config.PRICE_DEEPSEEK_INPUT, config.PRICE_DEEPSEEK_OUTPUT) + estimateCost({ input: embeddingTokens, output: 0 }, config.PRICE_OPENAI_EMBEDDING, 0)

/** One finished ledger row per paste (shows up in Pipeline Runs and the daily budget). */
export async function recordRun(payload: Payload, row: { kind: 'smart-paste'; promptVersion: string; costUsd: number; tokens: { input: number; output: number }; written: number; error?: string }): Promise<void> {
  const now = new Date().toISOString()
  try {
    await payload.create({ collection: 'pipeline-runs', overrideAccess: true, data: {
      startedAt: now, finishedAt: now, status: row.error ? 'failed' : 'ok', kind: row.kind, promptVersion: row.promptVersion, costUsd: row.costUsd,
      tokens: { input: row.tokens.input, output: row.tokens.output, cached: 0 }, counts: { written: row.written },
      errors: row.error ? [{ stage: 'smart', message: row.error.slice(0, 240) }] : [],
    } })
  } catch (error) { payload.logger.error(`smart-paste ledger failed: ${error instanceof Error ? error.message : 'unknown'}`) }
}
