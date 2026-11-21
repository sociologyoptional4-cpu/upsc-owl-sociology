import { BlocksFeature, EXPERIMENTAL_TableFeature, lexicalEditor, TextStateFeature } from '@payloadcms/richtext-lexical'

import { BLOG_BLOCKS, BLOG_COLOR_STATE, BLOG_INLINE_BLOCKS } from '@/blocks/blog/configs'

/**
 * Blog-only editor: table + text colours/markers + blog blocks.
 * The shared `richTextEditor()` (pages / CA / notes) is intentionally untouched.
 */
export function blogEditor() {
  return lexicalEditor({
    features: ({ rootFeatures }) => [
      ...rootFeatures,
      EXPERIMENTAL_TableFeature(),
      TextStateFeature({ state: BLOG_COLOR_STATE }),
      BlocksFeature({ blocks: BLOG_BLOCKS, inlineBlocks: BLOG_INLINE_BLOCKS }),
    ],
  })
}
