import type { Block } from 'payload'

import { CalloutBlock } from './callout/config'
import { CtaBlock } from './cta/config'
import { HeroBlock } from './hero/config'
import { KeyTermsTableBlock } from './key-terms-table/config'
import { PyqListBlock } from './pyq-list/config'
import { RichTextBlock } from './rich-text/config'
import { SummaryBlock } from './summary/config'

/** Every block an editor (or the AI) can use in a `layout` field. */
export const LAYOUT_BLOCKS: Block[] = [
  HeroBlock,
  RichTextBlock,
  SummaryBlock,
  CalloutBlock,
  KeyTermsTableBlock,
  CtaBlock,
  PyqListBlock,
]
