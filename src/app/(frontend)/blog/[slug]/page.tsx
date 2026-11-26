import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { BlogPostView } from '@/components/views/BlogPostView'
import { getPost, getPostStaticParams } from '@/lib/data/blog'
import { slugParamSchema } from '@/lib/data/route-schemas'
import { buildBlogKeywords } from '@/lib/seo/keywords'
import { getServerSideURL } from '@/lib/url'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getPostStaticParams(200)
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
  // Declare the real size: a hard-coded 1200x630 on a square/portrait upload makes some scrapers mis-crop it.
  const dims = post.cover && post.seo.ogImageUrl === post.cover.url ? { width: post.cover.width, height: post.cover.height } : {}
  const images = post.seo.ogImageUrl ? [{ url: new URL(post.seo.ogImageUrl, base).toString(), ...dims, alt: title }] : undefined

  return {
    title,
    description,
    keywords: buildBlogKeywords(post),
    alternates: { canonical },
    robots: post.seo.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
    openGraph: {
      type: 'article',
      locale: 'en_IN',
      siteName: 'UPSC OWL Sociology',
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
