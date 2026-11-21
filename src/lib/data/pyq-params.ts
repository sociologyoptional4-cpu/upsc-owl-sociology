import { z } from 'zod'
import type { PaperCode } from './types'

const paramsSchema = z.object({ paper: z.enum(['P1', 'P2']).optional(), topic: z.string().min(1).max(120).optional(), year: z.coerce.number().int().min(1900).max(2100).optional(), page: z.coerce.number().int().min(1).default(1), limit: z.coerce.number().int().min(1).max(50).default(20) }).strict()
export const parsePyqParams = (input: Record<string, unknown>) => paramsSchema.safeParse(input)
export type PyqParams = { paper?: PaperCode; topic?: string; year?: number; page?: number; limit?: number }
