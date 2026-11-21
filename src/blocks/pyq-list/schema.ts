import { z } from 'zod'

export const pyqListSchema = z.object({
  blockType: z.literal('pyqList'),
  heading: z.string().max(100).optional(),
  items: z
    .array(z.object({ year: z.number().int().min(1990).max(2100), marks: z.number().int().min(0).max(60).optional(), question: z.string().min(10).max(1500) }))
    .min(1)
    .max(60),
})
