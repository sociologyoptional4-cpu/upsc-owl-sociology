import type { Metadata } from 'next'

import { BlogHubView } from '@/components/views/BlogHubView'
import { getBlogHub } from '@/lib/data/blog'
import type { PaperCode } from '@/lib/data/types'
import { slugParamSchema } from '@/lib/data/route-schemas'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Blog — UPSC Sociology Optional Articles & Notes',
  description: 'UPSC Sociology Optional ke thinkers, Paper 1 & Paper 2 concepts, answer writing aur current affairs linkages.',
  alternates: {
    canonical: '/blog',
    types: { 'application/rss+xml': '/blog/rss.xml' },
  },
}

type Search = Promise<{ page?: string; category?: string; paper?: string; unit?: string }>

export default async function BlogHubPage({ searchParams }: { searchParams: Search }) {
  const sp = await searchParams
  const page = Math.max(1, Number(sp.page) || 1)
  const category = sp.category && slugParamSchema.safeParse(sp.category).success ? sp.category : undefined
  const paper: PaperCode | undefined = sp.paper === 'P1' || sp.paper === 'P2' ? sp.paper : undefined
  const unit = sp.unit && slugParamSchema.safeParse(sp.unit).success ? sp.unit : undefined

  const data = await getBlogHub({ page, category, paper, unit })
  return <BlogHubView data={data} />
}
