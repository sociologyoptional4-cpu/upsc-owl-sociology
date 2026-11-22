import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BlogListView } from '@/components/views/BlogHubView'
import { getPostsBySeries } from '@/lib/data/blog'
import { slugParamSchema } from '@/lib/data/route-schemas'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!slugParamSchema.safeParse(slug).success) return {}
  const data = await getPostsBySeries(slug, 1)
  return data ? { title: `${data.title} — Series`, description: data.description ?? `${data.title}: UPSC Sociology Optional series, part by part.`, alternates: { canonical: `/blog/series/${slug}` } } : {}
}

export default async function BlogSeriesPage({ params, searchParams }: Props) {
  const { slug } = await params
  if (!slugParamSchema.safeParse(slug).success) notFound()
  const page = Math.max(1, Number((await searchParams).page) || 1)
  const data = await getPostsBySeries(slug, page)
  if (!data) notFound()
  return <BlogListView data={data} baseHref={`/blog/series/${slug}`} />
}
