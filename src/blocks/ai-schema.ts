import { z } from 'zod'

import { calloutSchema } from './callout/schema'
import { ctaSchema } from './cta/schema'
import { heroSchema } from './hero/schema'
import { keyTermsSchema } from './key-terms-table/schema'
import { richTextSchema } from './rich-text/schema'
import { summarySchema } from './summary/schema'

/** What the AI pipeline is allowed to send as a page layout. Validated before any write. */
export const aiBlockSchema = z.discriminatedUnion('blockType', [
  heroSchema,
  richTextSchema,
  summarySchema,
  calloutSchema,
  keyTermsSchema,
  ctaSchema,
])

export const aiLayoutSchema = z.array(aiBlockSchema).min(1).max(30)

export type AiBlock = z.infer<typeof aiBlockSchema>
