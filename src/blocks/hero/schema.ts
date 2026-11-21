import { z } from 'zod'

import { hrefSchema } from '@/blocks/shared-schema'

export const heroSchema = z.object({
  blockType: z.literal('hero'),
  kicker: z.string().max(80).optional(),
  heading: z.string().min(3).max(140),
  subheading: z.string().max(400).optional(),
  variant: z.enum(['plain', 'masthead']).default('plain'),
  actions: z.array(z.object({ label: z.string().min(1).max(40), href: hrefSchema })).max(2).optional(),
})
