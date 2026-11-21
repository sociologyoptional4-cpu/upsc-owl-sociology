import OpenAI from 'openai'
import { z } from 'zod'

import type { IngestItem } from '@/lib/ingest/schema'
import { ingestItemSchema } from '@/lib/ingest/schema'
import type { PipelineConfig } from '../config'
import type { FeedItem } from '../clean'
import { validateWrittenItem } from '../validate'

const client = (key: string) => new OpenAI({ apiKey: key })
/** Models sometimes send null for optional fields; Zod expects them absent. */
export function stripNulls(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stripNulls)
  if (typeof value !== 'object' || value === null) return value
  return Object.fromEntries(Object.entries(value).filter(([, v]) => v !== null).map(([k, v]) => [k, stripNulls(v)]))
}

export async function embedTitles(config: PipelineConfig, titles: string[]): Promise<{ embeddings: number[][]; inputTokens: number }> {
  if (!titles.length) return { embeddings: [], inputTokens: 0 }
  const result = await client(config.OPENAI_API_KEY).embeddings.create({ model: config.EMBEDDING_MODEL, input: titles })
  return { embeddings: result.data.map((row) => row.embedding), inputTokens: result.usage.prompt_tokens }
}
export async function writeItem(config: PipelineConfig, item: FeedItem, paper: 'P1' | 'P2' | 'Both', topics: string[], thinkers: string[], prompt: string, style: string, examples: string, repairHint = ''): Promise<{ item: IngestItem; inputTokens: number; outputTokens: number; cachedTokens: number }> {
  // JSON mode (not strict json_schema): OpenAI strict mode rejects parts of our Zod schema
  // (uri formats, oneOf unions, optional keys). The schema is given as guidance text and
  // the Zod check below is the real gate; the caller retries once with `repairHint`.
  const shape = JSON.stringify(z.toJSONSchema(ingestItemSchema.omit({ embedding: true }), { target: 'draft-7' }))
  const result = await client(config.OPENAI_API_KEY).responses.create({
    model: config.WRITER_MODEL,
    instructions: `${style}\n\n${examples}\n\n${prompt}\n\nReturn ONLY one JSON object that matches this JSON Schema (no prose, no markdown fences):\n${shape}${repairHint ? `\n\nRepair the previous invalid output using this validation feedback: ${repairHint}` : ''}`,
    // json_object mode requires the word "json" in the input itself.
    input: `Write the note as one json object for this input:\n${JSON.stringify({ source: item, paper, allowedTopicSlugs: topics, allowedThinkerSlugs: thinkers })}`,
    text: { format: { type: 'json_object' } },
  })
  const parsed = validateWrittenItem(stripNulls(JSON.parse(result.output_text)), item.description)
  return { item: parsed, inputTokens: result.usage?.input_tokens ?? 0, outputTokens: result.usage?.output_tokens ?? 0, cachedTokens: result.usage?.input_tokens_details?.cached_tokens ?? 0 }
}
