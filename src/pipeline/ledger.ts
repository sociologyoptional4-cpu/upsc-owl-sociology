import type { PipelineConfig } from './config'
import { apiRequest } from './publish'

type Run = { id: number }
export async function startRun(config: PipelineConfig, promptVersion: string): Promise<Run> {
  // Payload REST create returns { doc, message }; unwrap so callers get a real id.
  const created = await apiRequest<{ doc?: Run } & Partial<Run>>(config, '/api/pipeline-runs', { method: 'POST', body: JSON.stringify({ startedAt: new Date().toISOString(), status: 'running', promptVersion, counts: {}, tokens: {}, costUsd: 0 }) })
  const run = (created.doc ?? created) as Run
  if (typeof run.id !== 'number') throw new Error('Could not create a pipeline-runs record')
  return run
}
export async function finishRun(config: PipelineConfig, id: number, status: 'ok' | 'failed', costUsd: number, tokens: { input: number; output: number; cached: number }, counts: Record<string, number>, error?: string): Promise<void> {
  await apiRequest(config, `/api/pipeline-runs/${id}`, { method: 'PATCH', body: JSON.stringify({ finishedAt: new Date().toISOString(), status, costUsd, tokens, counts, errors: error ? [{ stage: 'generation', message: error.slice(0, 240) }] : [] }) })
}
