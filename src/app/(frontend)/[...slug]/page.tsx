import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { getPrerenderPagePaths, getPublishedPageByPath } from '@/lib/queries'

// Safety net; publishing in /admin revalidates instantly via the afterChange hook.
export const revalidate = 3600
export const dynamicParams = true

type Props = { params: Promise<{ slug: string[] }> }

const toPath = (segments: string[]) => segments.map(decodeURIComponent).join('/')

export async function generateStaticParams() {
  try {
    const paths = await getPrerenderPagePaths()
    return paths.map((path) => ({ slug: path.split('/') }))
  } catch {
    // DB unreachable at build time (e.g. preview deploys): render everything on demand.
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = await getPublishedPageByPath(toPath(slug))
  if (!page) return {}
  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || undefined,
  }
}

export default async function CmsPage({ params }: Props) {
  const { slug } = await params
  const page = await getPublishedPageByPath(toPath(slug))
  if (!page) notFound()
  return (
    <article>
      <RenderBlocks blocks={page.layout} />
    </article>
  )
}
