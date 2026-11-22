import OpenAI from 'openai'

import { stripNulls } from '@/pipeline/llm/openai'
import type { SmartConfig } from './config'
import { SmartError } from './errors'

export type Usage = { input: number; output: number }

const parse = (raw: string): unknown => {
  try { return stripNulls(JSON.parse(raw)) } catch { throw new SmartError('AI ka jawab samajh nahi aaya. Dobara try karo.', 502) }
}

/** OpenAI Responses API in json_object mode. The caller's Zod schema is the real gate. */
export async function openaiJson(config: SmartConfig, instructions: string, payload: unknown): Promise<{ json: unknown; usage: Usage }> {
  const result = await new OpenAI({ apiKey: config.OPENAI_API_KEY }).responses.create({
    model: config.WRITER_MODEL, instructions,
    input: `Return one json object for this input:\n${JSON.stringify(payload)}`,
    text: { format: { type: 'json_object' } },
  })
  return { json: parse(result.output_text), usage: { input: result.usage?.input_tokens ?? 0, output: result.usage?.output_tokens ?? 0 } }
}

/** DeepSeek chat completions in json_object mode (scorer-style classification). */
export async function deepseekJson(config: SmartConfig, instructions: string, payload: unknown): Promise<{ json: unknown; usage: Usage }> {
  const response = await fetch(`${config.DEEPSEEK_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: { authorization: `Bearer ${config.DEEPSEEK_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({ model: config.SCORER_MODEL, max_tokens: 16384, temperature: 0, response_format: { type: 'json_object' }, messages: [{ role: 'system', content: instructions }, { role: 'user', content: `Return one json object for this input:\n${JSON.stringify(payload)}` }] }),
  })
  if (!response.ok) throw new SmartError(`DeepSeek request fail hui (${response.status}).`, 502)
  const body = await response.json() as { choices?: { message?: { content?: string } }[]; usage?: { prompt_tokens?: number; completion_tokens?: number } }
  const content = body.choices?.[0]?.message?.content
  if (!content) throw new SmartError('DeepSeek ne khaali jawab diya.', 502)
  return { json: parse(content), usage: { input: body.usage?.prompt_tokens ?? 0, output: body.usage?.completion_tokens ?? 0 } }
}
