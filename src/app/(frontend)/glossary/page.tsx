import type { Metadata } from 'next'

import { GlossaryView } from '@/components/views/GlossaryView'
import { getGlossary } from '@/lib/data/glossary'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Sociology Glossary (A-Z) — UPSC Optional',
  description: 'UPSC Sociology Optional ke key terms A-Z: anomie, alienation, sanskritisation aur bahut kuch, simple Hinglish mein aur notes ke link ke saath.',
  alternates: { canonical: '/glossary' },
}

export default async function GlossaryPage() {
  return <GlossaryView letters={await getGlossary()} />
}
