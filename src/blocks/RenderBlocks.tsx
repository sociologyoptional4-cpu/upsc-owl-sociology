import type { ReactNode } from 'react'

import type { Page } from '@/payload-types'

import { CalloutBlockComponent } from './callout/Component'
import { CtaBlockComponent } from './cta/Component'
import { HeroBlockComponent } from './hero/Component'
import { KeyTermsTableComponent } from './key-terms-table/Component'
import { PyqListComponent } from './pyq-list/Component'
import { RichTextBlockComponent } from './rich-text/Component'
import { SummaryBlockComponent } from './summary/Component'

export type LayoutBlock = NonNullable<Page['layout']>[number]

function renderBlock(block: LayoutBlock): ReactNode {
  switch (block.blockType) {
    case 'hero':
      return <HeroBlockComponent block={block} />
    case 'richText':
      return <RichTextBlockComponent block={block} />
    case 'summary':
      return <SummaryBlockComponent block={block} />
    case 'callout':
      return <CalloutBlockComponent block={block} />
    case 'keyTerms':
      return <KeyTermsTableComponent block={block} />
    case 'cta':
      return <CtaBlockComponent block={block} />
    case 'pyqList':
      return <PyqListComponent block={block} />
    default:
      // Unknown block (e.g. added in admin before the frontend shipped): skip, never crash the page.
      return null
  }
}

type Props = { blocks: LayoutBlock[] | null | undefined }

export function RenderBlocks({ blocks }: Props) {
  if (!blocks?.length) return null
  return (
    <>
      {blocks.map((block, index) => (
        <div key={block.id ?? `${block.blockType}-${index}`} data-block={block.blockType}>
          {renderBlock(block)}
        </div>
      ))}
    </>
  )
}
