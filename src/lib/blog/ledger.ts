import type { Payload } from 'payload'

import { env } from '@/lib/env'

type Model = 'deepseek' | 'openai'

export type Usage = { input: number; output: number }

const num = (value: number | undefined): number => value ?? 0

/** USD from per-million-token env prices (0 when prices are not configured). */
export function blogCost(model: Model, usage: Usage): number {
  const [inPrice, outPrice] = model === 'deepseek' ? [num(env.PRICE_DEEPSEEK_INPUT), num(env.PRICE_DEEPSEEK_OUTPUT)] : [num(env.PRICE_OPENAI_INPUT), num(env.PRICE_OPENAI_OUTPUT)]
  return (usage.input * inPrice + usage.output * outPrice) / 1_000_000
}

/** True when today's ledger total (all pipelines) already reached site-settings.maxDailyUsd. */
export async function budgetExhausted(payload: Payload): Promise<boolean> {
  const settings = (await payload.findGlobal({ slug: 'site-settings', overrideAccess: true })) as { maxDailyUsd?: number | null }
  const limit = settings.maxDailyUsd ?? 1
  const start = new Date(); start.setUTCHours(0, 0, 0, 0)
  const runs = await payload.find({ collection: 'pipeline-runs', where: { startedAt: { greater_than_equal: start.toISOString() } }, limit: 500, depth: 0, overrideAccess: true, select: { costUsd: true } })
  const spent = runs.docs.reduce((sum, run) => sum + (run.costUsd ?? 0), 0)
  return spent >= limit
}

export async function logBlogRun(payload: Payload, run: { startedAt: Date; ok: boolean; costUsd: number; usage: Usage; error?: string; promptVersion: string }): Promise<void> {
  await payload.create({
    collection: 'pipeline-runs',
    overrideAccess: true,
    data: {
      kind: 'blog', startedAt: run.startedAt.toISOString(), finishedAt: new Date().toISOString(), status: run.ok ? 'ok' : 'failed',
      costUsd: run.costUsd, tokens: { input: run.usage.input, output: run.usage.output, cached: 0 }, promptVersion: run.promptVersion,
      errors: run.error ? [{ stage: 'blog', message: run.error.slice(0, 240) }] : [],
    },
  })
}
