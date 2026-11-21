import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BlogListView } from '@/components/views/BlogHubView'
import { getPostsByAuthor } from '@/lib/data/blog'

export const revalidate = 3600

type Props = { params: Promise<{ id: string }>; searchParams: Promise<{ page?: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const numId = Number(id)
  if (!Number.isSafeInteger(numId) || numId < 1) return {}
  const data = await getPostsByAuthor(numId, 1)
  return data ? { title: `${data.title} — Author`, description: data.description ?? `Articles by ${data.title}.`, alternates: { canonical: `/blog/author/${numId}` } } : {}
}

export default async function BlogAuthorPage({ params, searchParams }: Props) {
  const { id } = await params
  const numId = Number(id)
  if (!Number.isSafeInteger(numId) || numId < 1) notFound()
  const sp = await searchParams
  const page = Math.max(1, Number(sp.page) || 1)
  const data = await getPostsByAuthor(numId, page)
  if (!data) notFound()
  return <BlogListView data={data} baseHref={`/blog/author/${numId}`} />
}
