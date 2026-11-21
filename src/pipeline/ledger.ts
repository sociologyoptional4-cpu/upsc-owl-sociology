import type { PipelineConfig } from './config'
import { apiRequest } from './publish'

type Run = { id: number }
export async function startRun(config: PipelineConfig, promptVersion: string): Promise<Run> {
  return apiRequest<Run>(config, '/api/pipeline-runs', { method: 'POST', body: JSON.stringify({ startedAt: new Date().toISOString(), status: 'running', promptVersion, counts: {}, tokens: {}, costUsd: 0 }) })
}
export async function finishRun(config: PipelineConfig, id: number, status: 'ok' | 'failed', costUsd: number, tokens: { input: number; output: number; cached: number }, counts: Record<string, number>, error?: string): Promise<void> {
  await apiRequest(config, `/api/pipeline-runs/${id}`, { method: 'PATCH', body: JSON.stringify({ finishedAt: new Date().toISOString(), status, costUsd, tokens, counts, errors: error ? [{ stage: 'generation', message: error.slice(0, 240) }] : [] }) })
}
