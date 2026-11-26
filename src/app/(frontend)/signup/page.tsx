import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { AuthForm } from '@/components/auth/AuthForm'
import { getCurrentMember } from '@/lib/auth/member'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Create Account · UPSC OWL Sociology',
  description: 'Create your UPSC OWL Sociology student account to link and access your 1-Year Pro Pass across devices.',
  alternates: { canonical: '/signup' },
}

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const [{ next }, member] = await Promise.all([searchParams, getCurrentMember()])
  const target = next && next.startsWith('/') && !next.startsWith('//') ? next : '/account'
  if (member) redirect(target)

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
      <AuthForm initialTab="signup" nextPath={target} />
    </div>
  )
}
