import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BlogListView } from '@/components/views/BlogHubView'
import { getBlogCategories, getPostsByCategory } from '@/lib/data/blog'
import { slugParamSchema } from '@/lib/data/route-schemas'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }>; searchParams: Promise<{ page?: string }> }

export async function generateStaticParams() {
  return (await getBlogCategories()).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!slugParamSchema.safeParse(slug).success) return {}
  const data = await getPostsByCategory(slug, 1)
  return data ? { title: `${data.title} — Blog`, description: data.description ?? `${data.title}: UPSC Sociology Optional blog posts.`, alternates: { canonical: `/blog/category/${slug}` } } : {}
}

export default async function BlogCategoryPage({ params, searchParams }: Props) {
  const { slug } = await params
  if (!slugParamSchema.safeParse(slug).success) notFound()
  const sp = await searchParams
  const page = Math.max(1, Number(sp.page) || 1)
  const data = await getPostsByCategory(slug, page)
  if (!data) notFound()
  return <BlogListView data={data} baseHref={`/blog/category/${slug}`} />
}
