import { z } from 'zod'

import { hrefSchema } from '@/blocks/shared-schema'

export const ctaSchema = z.object({
  blockType: z.literal('cta'),
  heading: z.string().min(3).max(120),
  body: z.string().max(400).optional(),
  label: z.string().min(1).max(40),
  href: hrefSchema,
  style: z.enum(['ink', 'telegram']).default('ink'),
})
