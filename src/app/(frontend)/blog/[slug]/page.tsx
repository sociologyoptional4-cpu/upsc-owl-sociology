import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { BlogPostView } from '@/components/views/BlogPostView'
import { getPost, getPostStaticParams } from '@/lib/data/blog'
import { slugParamSchema } from '@/lib/data/route-schemas'
import { getServerSideURL } from '@/lib/url'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getPostStaticParams(50)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!slugParamSchema.safeParse(slug).success) return {}
  const post = await getPost(slug)
  if (!post) return {}
  const base = getServerSideURL()
  const title = post.seo.title ?? post.title
  const description = post.seo.description ?? post.excerpt ?? post.title
  const canonical = post.seo.canonical ?? `${base}${post.href}`
  const images = post.seo.ogImageUrl ? [{ url: new URL(post.seo.ogImageUrl, base).toString(), width: 1200, height: 630, alt: title }] : undefined

  return {
    title,
    description,
    alternates: { canonical },
    robots: post.seo.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonical,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: post.author ? [post.author.name] : ['UPSC OWL Sociology'],
      tags: post.tags.map((t) => t.title),
      ...(images ? { images } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(images ? { images: images.map((i) => i.url) } : {}),
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  if (!slugParamSchema.safeParse(slug).success) notFound()
  const preview = (await draftMode()).isEnabled
  const post = await getPost(slug, preview)
  if (!post) notFound()
  return <BlogPostView post={post} />
}
