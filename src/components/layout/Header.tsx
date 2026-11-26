import Link from 'next/link'

import { ProStatusPill } from '../billing/ProStatusPill'
import { StudyStreakPill } from '../gamification/StudyStreakPill'
import { TELEGRAM_MENTORSHIP_URL, TELEGRAM_URL } from '../ui/links'

import { ThemeToggle } from './ThemeToggle'

type NavItem = { label: string; href: string }

export function Header({ nav }: { nav: NavItem[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 md:h-16 md:gap-6 md:px-8">
        <Link href="/" className="group flex shrink-0 flex-col leading-none" aria-label="UPSC OWL Sociology home">
          <span className="font-display text-lg font-extrabold tracking-tight md:text-xl">
            UPSC <span className="text-saffron-deep">OWL</span>
          </span>
          <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-ink-mute group-hover:text-ink md:text-[10px]">
            Sociology
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center">
            {nav.map((item) => (
              <li key={item.href} className="-ml-px">
                <Link
                  href={item.href}
                  className="block whitespace-nowrap border border-rule bg-paper px-2.5 py-1.5 text-xs text-ink-soft transition-colors hover:z-10 hover:border-ink hover:text-ink lg:px-3.5 lg:text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1.5 md:gap-2">
          <ProStatusPill />
          <div className="hidden min-[400px]:inline-flex">
            <StudyStreakPill />
          </div>
          <Link
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram Channel join karo"
            title="Telegram Channel join karo"
            className="grid size-9 shrink-0 place-items-center rounded-md border border-ink bg-[#229ED9] text-white shadow-paper transition-transform active:scale-95 sm:hidden"
          >
            <svg aria-hidden width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.9 4.6a1 1 0 0 0-1.1-.2L2.8 11.6a1 1 0 0 0 .1 1.9l4.4 1.4 1.7 5.2a1 1 0 0 0 1.7.4l2.5-2.6 4.5 3.3a1 1 0 0 0 1.6-.6l2.9-14.9a1 1 0 0 0-.3-1.1Zm-3.6 3.5-8.4 7.6-.4 3.1-1.3-4.1 10.1-6.6Z" />
            </svg>
          </Link>
          <Link
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta hidden shrink-0 whitespace-nowrap rounded-md px-4 py-2 text-sm transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 active:scale-[0.98] sm:inline-flex"
          >
            Telegram join
          </Link>
          <Link
            href={TELEGRAM_MENTORSHIP_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Direct contact & mentorship on Telegram"
            className="hidden shrink-0 whitespace-nowrap rounded-md border border-ink bg-paper-raised px-3 py-2 text-xs font-bold text-ink transition-colors hover:bg-pastel-yellow lg:inline-flex"
          >
            Mentorship
          </Link>
          <Link href="/search" aria-label="Site mein search karo" className="grid h-9 w-9 place-items-center rounded-md border border-rule text-ink-soft transition-colors hover:border-ink hover:text-ink">
            <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
