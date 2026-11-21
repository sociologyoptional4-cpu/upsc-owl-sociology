import type { Metadata } from 'next'
import { getThinkers } from '@/lib/data/thinkers'
import { ThinkersView } from '@/components/views/ThinkersView'

export const revalidate = 3600
export const metadata: Metadata = { title: 'Thinkers', description: 'Sociology ke classical aur Indian thinkers.', alternates: { canonical: '/thinkers' } }
export default async function ThinkersPage() { return <ThinkersView data={await getThinkers()} /> }
