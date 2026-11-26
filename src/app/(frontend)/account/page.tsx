import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { AccountLogoutButton } from '@/components/auth/AccountLogoutButton'
import { PaywallGate } from '@/components/billing/PaywallGate'
import { TELEGRAM_MENTORSHIP_URL } from '@/components/ui/links'
import { getCurrentMember } from '@/lib/auth/member'
import { getProAccessStatus } from '@/lib/billing/subscriptions'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'My Account · UPSC OWL Sociology',
  description: 'Manage your UPSC OWL Sociology student account and 1-Year Pro Pass status.',
  alternates: { canonical: '/account' },
}

export default async function AccountPage() {
  const [member, pro] = await Promise.all([getCurrentMember(), getProAccessStatus()])
  if (!member) redirect('/login?next=/account')

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-5 py-12 md:px-8 md:py-16">
      <section className="rounded-card border-2 border-ink bg-paper-raised p-6 shadow-paper md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="rounded-chip border border-ink bg-pastel-yellow px-3 py-1 text-xs font-extrabold text-ink">
              Student Account
            </span>
            <h1 className="mt-3 font-display text-3xl font-extrabold text-ink">{member.name}</h1>
            <p className="mt-1 text-sm text-ink-soft">
              {member.email}
              {member.phone ? ` · ${member.phone}` : ''}
            </p>
          </div>
          <AccountLogoutButton />
        </div>

        <div className="mt-6 rounded-card border-2 border-ink bg-paper p-5">
          {pro.unlocked ? (
            <>
              <p className="inline-block rounded-chip border border-ink bg-pastel-mint px-3 py-1 text-xs font-extrabold uppercase text-ink">
                ✓ 1-Year Pro Pass Active
              </p>
              <h2 className="mt-3 font-display text-xl font-extrabold text-ink">
                Saare 25 Units &amp; Chapters Unlocked Hain
              </h2>
              <p className="mt-1 text-sm text-ink-soft">
                Valid till{' '}
                <strong>
                  {pro.expiresAt
                    ? new Date(pro.expiresAt).toLocaleDateString('en-IN', { dateStyle: 'long' })
                    : '1 Year'}
                </strong>
                . Ab aap kisi bhi phone ya laptop par sirf is email se login karke saare notes padh sakte hain.
              </p>
              {pro.accessCode ? (
                <p className="mt-3 text-xs text-ink-soft">
                  Backup Access Code:{' '}
                  <span className="select-all rounded border border-ink bg-paper-raised px-2 py-0.5 font-mono font-bold text-ink">
                    {pro.accessCode}
                  </span>
                </p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/syllabus" className="btn-cta rounded-md px-5 py-2.5 text-sm font-bold">
                  Syllabus Padhna Shuru Karein →
                </Link>
                <a
                  href={TELEGRAM_MENTORSHIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border-2 border-ink bg-paper-raised px-4 py-2.5 text-sm font-bold text-ink hover:bg-pastel-yellow"
                >
                  Direct Mentorship / Help ↗
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="inline-block rounded-chip border border-ink/40 bg-paper-sunk px-3 py-1 text-xs font-bold text-ink">
                Free Plan (Paper 1 Units 1–5 Open)
              </p>
              <h2 className="mt-3 font-display text-xl font-extrabold text-ink">
                Paper 1 Units 6–10 aur Paper 2 Unlock Karein — ₹399/yr (60% OFF ₹999)
              </h2>
              <p className="mt-1 text-sm text-ink-soft">
                Pay karte hi isi account ({member.email}) par 1-Year Pro Pass automatically activate ho jayega.
              </p>
            </>
          )}
        </div>
      </section>

      {!pro.unlocked ? <PaywallGate mode="standalone" /> : null}
    </div>
  )
}
