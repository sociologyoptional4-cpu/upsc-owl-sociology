import type { PipelineConfig } from './config'
import type { IngestItem } from '@/lib/ingest/schema'

export async function apiRequest<T>(config: PipelineConfig, path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(new URL(path, config.SITE_URL), { ...init, headers: { authorization: `Bearer ${config.AI_BOT_API_KEY}`, 'content-type': 'application/json', ...init.headers } })
  if (!response.ok) throw new Error(`Site API ${response.status} at ${path}`)
  const result = await response.json() as { success?: boolean; data?: T; errors?: unknown }
  if (result.success === false) throw new Error(`Site API rejected ${path}`)
  return (result.data ?? result) as T
}
export async function sendIngest(config: PipelineConfig, runId: number, items: IngestItem[]): Promise<unknown> {
  return apiRequest(config, '/api/ingest/batch', { method: 'POST', body: JSON.stringify({ runId, items }) })
}

export async function getDailySpend(config: PipelineConfig): Promise<number> {
  const result = await apiRequest<{ costUsd: number }>(config, '/api/pipeline/spend')
  return result.costUsd
}
