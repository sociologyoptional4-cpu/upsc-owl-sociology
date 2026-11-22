import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'
import { getCAArticle, getCAStaticParams } from '@/lib/data/current-affairs'
import { CAArticleView } from '@/components/views/CAArticleView'
import { dateParamSchema, slugParamSchema } from '@/lib/data/route-schemas'

export const revalidate = 3600
type Props = { params: Promise<{ date: string; slug: string }> }
export async function generateStaticParams() { return getCAStaticParams() }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { date, slug } = await params; if (!dateParamSchema.safeParse(date).success || !slugParamSchema.safeParse(slug).success) return {}; const item = await getCAArticle(date, slug); return item ? { title: item.seo.title || item.headline, description: item.seo.description || item.summary || item.headline, alternates: { canonical: item.href } } : {} }
export default async function CAArticlePage({ params }: Props) { const { date, slug } = await params; if (!dateParamSchema.safeParse(date).success || !slugParamSchema.safeParse(slug).success) notFound(); const preview = (await draftMode()).isEnabled; const data = await getCAArticle(date, slug, preview); if (!data) notFound(); return <CAArticleView data={data} /> }
