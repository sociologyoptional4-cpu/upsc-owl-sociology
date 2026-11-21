import type { Metadata } from 'next'
import { getSyllabusTree } from '@/lib/data/syllabus'
import { SyllabusView } from '@/components/views/SyllabusView'

export const revalidate = 3600
export const metadata: Metadata = { title: 'Syllabus', description: 'UPSC Sociology Optional ka complete syllabus aur topic map.', alternates: { canonical: '/syllabus' } }
export default async function SyllabusPage() { return <SyllabusView data={await getSyllabusTree()} /> }
