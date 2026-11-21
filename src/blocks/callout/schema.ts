import { z } from 'zod'

import { CALLOUT_TONES } from './config'

export const calloutSchema = z.object({
  blockType: z.literal('callout'),
  tone: z.enum(CALLOUT_TONES),
  title: z.string().max(100).optional(),
  body: z.string().min(5).max(1000),
})
