import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getThinkers, getThinkerDetail } from '@/lib/data/thinkers'
import { ThinkerView } from '@/components/views/ThinkerView'
import { slugParamSchema } from '@/lib/data/route-schemas'

export const revalidate = 3600
type Props = { params: Promise<{ slug: string }> }
export async function generateStaticParams() { return (await getThinkers()).map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; if (!slugParamSchema.safeParse(slug).success) return {}; const data = await getThinkerDetail(slug); return data ? { title: data.name, description: `${data.name}: key sociological ideas and related current affairs.`, alternates: { canonical: data.href } } : {} }
export default async function ThinkerPage({ params }: Props) { const { slug } = await params; if (!slugParamSchema.safeParse(slug).success) notFound(); const data = await getThinkerDetail(slug); if (!data) notFound(); return <ThinkerView data={data} /> }
