import { z } from 'zod'

/**
 * Lexical JSON is deep and editor-specific, so the AI never writes it directly.
 * The pipeline sends `markdown`, which the ingest endpoint converts to Lexical (Phase 2).
 */
export const richTextSchema = z.object({
  blockType: z.literal('richText'),
  markdown: z.string().min(1).max(20_000),
})
