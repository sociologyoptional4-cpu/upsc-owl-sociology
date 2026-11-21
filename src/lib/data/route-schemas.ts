import { z } from 'zod'

export const dateParamSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
export const slugParamSchema = z.string().regex(/^[a-z0-9-]+$/)
export const paperRouteSchema = z.object({ paper: slugParamSchema, path: z.array(slugParamSchema).optional() })
export const caSearchSchema = z.object({
  page: z.string().regex(/^\d+$/).optional(), limit: z.string().regex(/^\d+$/).optional(),
  paper: z.enum(['P1', 'P2']).optional(), topic: slugParamSchema.optional(), thinker: slugParamSchema.optional(),
  month: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/).optional(),
})
