import { RichText } from '@payloadcms/richtext-lexical/react'

import type { RichTextBlock as RichTextBlockData } from '@/payload-types'

type Props = { block: RichTextBlockData }

export function RichTextBlockComponent({ block }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-6 md:px-8">
      <RichText data={block.content} className="prose-journal" />
    </section>
  )
}
