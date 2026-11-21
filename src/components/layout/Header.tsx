import Link from 'next/link'

import { ThemeToggle } from './ThemeToggle'

export function Header({ nav }: { nav: { label: string; href: string }[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight">AUM</span>
          <span className="text-sm uppercase tracking-[0.2em] text-ink-mute transition-colors group-hover:text-saffron-deep">
            Sociology
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-chip px-3 py-1.5 text-sm text-ink-soft transition-colors hover:bg-paper-sunk hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
