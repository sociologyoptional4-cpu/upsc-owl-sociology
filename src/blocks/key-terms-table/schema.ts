import { z } from 'zod'

export const keyTermsSchema = z.object({
  blockType: z.literal('keyTerms'),
  caption: z.string().max(100).optional(),
  rows: z
    .array(
      z.object({
        term: z.string().min(1).max(80),
        meaning: z.string().min(5).max(500),
        thinker: z.string().max(80).optional(),
      }),
    )
    .min(1)
    .max(20),
})
