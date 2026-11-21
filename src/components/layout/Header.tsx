import Link from 'next/link'

import { TELEGRAM_URL } from '../ui/links'

import { ThemeToggle } from './ThemeToggle'

type NavItem = { label: string; href: string }

export function Header({ nav }: { nav: NavItem[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Link href="/" className="group flex flex-col leading-none" aria-label="UPSC OWL Sociology home">
          <span className="font-display text-xl font-extrabold tracking-tight">
            UPSC <span className="text-saffron-deep">OWL</span>
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-ink-mute group-hover:text-ink">
            Sociology
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center">
            {nav.map((item) => (
              <li key={item.href} className="-ml-px">
                <Link
                  href={item.href}
                  className="block border border-rule bg-paper px-4 py-1.5 text-sm text-ink-soft transition-colors hover:z-10 hover:border-ink hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta hidden rounded-md px-4 py-2 text-sm transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 active:scale-[0.98] sm:inline-flex"
          >
            Telegram join
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
