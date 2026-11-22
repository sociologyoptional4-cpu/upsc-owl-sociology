import { z } from 'zod'

import { aiLayoutSchema } from '@/blocks/ai-schema'

const sourceSchema = z.object({ name: z.string().min(1).max(160), url: z.string().url().max(2048).refine((value) => ['http:', 'https:'].includes(new URL(value).protocol), 'Only HTTP(S) source links are allowed') }).strict()
export const ingestItemSchema = z.object({
  headline: z.string().trim().min(8).max(240), date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => !Number.isNaN(Date.parse(`${value}T00:00:00Z`)) && new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value, 'Invalid calendar date'),
  paper: z.enum(['P1', 'P2', 'Both']), topicSlugs: z.array(z.string().min(1).max(120)).max(20),
  thinkerSlugs: z.array(z.string().min(1).max(120)).max(20), sources: z.array(sourceSchema).min(1).max(8),
  summary: z.string().max(3000), relevance: z.number().min(0).max(1), promptVersion: z.string().max(80),
  model: z.string().max(120), costUsd: z.number().min(0).max(100), layout: aiLayoutSchema,
  embedding: z.array(z.number().finite()).max(4096).optional(),
}).strict()
export const ingestBatchSchema = z.object({ runId: z.union([z.number().int().positive(), z.string().min(1).max(120)]), items: z.array(ingestItemSchema).max(20) }).strict()
export const reviewActionSchema = z.object({ action: z.enum(['approve', 'reject', 'revise']), kind: z.enum(['ca', 'topic']).default('ca'), reason: z.string().trim().max(2000).optional() }).strict().refine((value) => !['reject', 'revise'].includes(value.action) || Boolean(value.reason && value.reason.length >= 5), 'A 5-character reason is required')
export type IngestItem = z.infer<typeof ingestItemSchema>
