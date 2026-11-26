import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { AuthForm } from '@/components/auth/AuthForm'
import { getCurrentMember } from '@/lib/auth/member'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Login · UPSC OWL Sociology',
  description: 'Login to your UPSC OWL Sociology student account to access your unlocked Pro chapters across devices.',
  alternates: { canonical: '/login' },
}

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const [{ next }, member] = await Promise.all([searchParams, getCurrentMember()])
  const target = next && next.startsWith('/') && !next.startsWith('//') ? next : '/account'
  if (member) redirect(target)

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
      <AuthForm initialTab="login" nextPath={target} />
    </div>
  )
}
