import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BlogListView } from '@/components/views/BlogHubView'
import { getBlogTags, getPostsByTag } from '@/lib/data/blog'
import { slugParamSchema } from '@/lib/data/route-schemas'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> }

export async function generateStaticParams() {
  return (await getBlogTags()).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!slugParamSchema.safeParse(slug).success) return {}
  const data = await getPostsByTag(slug, 1)
  return data ? { title: `${data.title} — Blog`, description: data.description ?? `Posts tagged ${data.title}.`, alternates: { canonical: `/blog/tag/${slug}` } } : {}
}

export default async function BlogTagPage({ params, searchParams }: Props) {
  const { slug } = await params
  if (!slugParamSchema.safeParse(slug).success) notFound()
  const sp = await searchParams
  const page = Math.max(1, Number(sp.page) || 1)
  const data = await getPostsByTag(slug, page)
  if (!data) notFound()
  return <BlogListView data={data} baseHref={`/blog/tag/${slug}`} />
}
