import { z } from 'zod'

export const summarySchema = z.object({
  blockType: z.literal('summary'),
  heading: z.string().max(80).optional(),
  points: z.array(z.object({ text: z.string().min(5).max(400) })).min(1).max(8),
})
