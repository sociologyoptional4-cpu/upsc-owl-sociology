import OpenAI from 'openai'
import { z } from 'zod'

import type { IngestItem } from '@/lib/ingest/schema'
import { ingestItemSchema } from '@/lib/ingest/schema'
import type { PipelineConfig } from '../config'
import type { FeedItem } from '../clean'
import { validateWrittenItem } from '../validate'

const client = (key: string) => new OpenAI({ apiKey: key })
export async function embedTitles(config: PipelineConfig, titles: string[]): Promise<{ embeddings: number[][]; inputTokens: number }> {
  if (!titles.length) return { embeddings: [], inputTokens: 0 }
  const result = await client(config.OPENAI_API_KEY).embeddings.create({ model: config.EMBEDDING_MODEL, input: titles })
  return { embeddings: result.data.map((row) => row.embedding), inputTokens: result.usage.prompt_tokens }
}
export async function writeItem(config: PipelineConfig, item: FeedItem, paper: 'P1' | 'P2' | 'Both', topics: string[], thinkers: string[], prompt: string, style: string, examples: string, repairHint = ''): Promise<{ item: IngestItem; inputTokens: number; outputTokens: number; cachedTokens: number }> {
  const modelSchema = ingestItemSchema.omit({ embedding: true })
  const schema = z.toJSONSchema(modelSchema, { target: 'draft-7' }) as Record<string, unknown>
  const result = await client(config.OPENAI_API_KEY).responses.create({
    model: config.WRITER_MODEL,
    instructions: `${style}\n\n${examples}\n\n${prompt}${repairHint ? `\n\nRepair the previous invalid output using this validation feedback: ${repairHint}` : ''}`,
    input: JSON.stringify({ source: item, paper, allowedTopicSlugs: topics, allowedThinkerSlugs: thinkers }),
    text: { format: { type: 'json_schema', name: 'ingest_item', strict: true, schema } },
  })
  const parsed = validateWrittenItem(JSON.parse(result.output_text), item.description)
  return { item: parsed, inputTokens: result.usage?.input_tokens ?? 0, outputTokens: result.usage?.output_tokens ?? 0, cachedTokens: result.usage?.input_tokens_details?.cached_tokens ?? 0 }
}
