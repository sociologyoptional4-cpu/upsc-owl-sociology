import type { Metadata } from 'next'
import Link from 'next/link'

import { PaywallGate } from '@/components/billing/PaywallGate'
import { ProLogoutButton } from '@/components/billing/ProLogoutButton'
import { TELEGRAM_MENTORSHIP_URL } from '@/components/ui/links'
import { getProAccessStatus } from '@/lib/billing/subscriptions'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Pro Pass (₹399 / Year · 60% OFF)',
  description:
    'Unlock Paper 1 Units 6–10 and complete Paper 2 UPSC Sociology Optional notes, bilingual Hinglish sheets, mind maps, and 597 solved PYQs for ₹399/year.',
  alternates: { canonical: '/pro' },
}

export default async function ProPage() {
  const access = await getProAccessStatus()

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
      {access.unlocked ? (
        <section className="rounded-card border-2 border-ink bg-pastel-mint p-6 text-ink shadow-paper md:p-8">
          <p className="inline-block rounded-chip border border-ink bg-paper px-3 py-1 text-xs font-extrabold uppercase">
            ✓ Pro Pass Active
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold">Saare 25 Units &amp; Chapters Unlocked Hain</h1>
          <p className="mt-2 text-sm text-ink-soft">
            {access.reason === 'admin'
              ? `Admin / Editor account (${access.email ?? 'staff'}) se full syllabus unlocked hai.`
              : `Registered Email: ${access.email ?? ''} · Valid till ${
                  access.expiresAt
                    ? new Date(access.expiresAt).toLocaleDateString('en-IN', { dateStyle: 'long' })
                    : '1 Year'
                }.`}
          </p>

          {access.accessCode ? (
            <div className="mt-5 rounded-card border-2 border-ink bg-paper p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-ink-mute">Backup Access Code (Doosre device ke liye)</p>
              <p className="mt-1 select-all font-mono text-2xl font-extrabold tracking-wider text-ink">{access.accessCode}</p>
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/syllabus" className="btn-cta rounded-md px-5 py-2.5 text-sm font-bold">
              Syllabus Padhna Shuru Karein →
            </Link>
            <a
              href={TELEGRAM_MENTORSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-ink bg-paper px-4 py-2.5 text-sm font-bold text-ink hover:bg-pastel-yellow"
            >
              Direct Mentorship / Help ↗
            </a>
            {access.reason === 'subscription' ? <ProLogoutButton /> : null}
          </div>
        </section>
      ) : (
        <PaywallGate mode="standalone" />
      )}
    </div>
  )
}
