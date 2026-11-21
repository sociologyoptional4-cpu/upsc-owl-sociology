import Link from 'next/link'

import { isExternalHref } from '@/lib/href'

import { TELEGRAM_URL } from '../ui/links'

const COLUMNS = [
  { title: 'Quick links', links: [{ label: 'Current Affairs', href: '/current-affairs' }, { label: 'Syllabus', href: '/syllabus' }, { label: 'Thinkers', href: '/thinkers' }] },
  { title: 'Connect', links: [{ label: 'Telegram', href: TELEGRAM_URL }, { label: 'About', href: '/about' }] },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative z-10 mt-[var(--space-section)] bg-neutral-950 text-neutral-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1fr_1fr_1.4fr] md:px-8">
        {COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="border-b border-neutral-800 pb-2 text-sm font-semibold text-white">{column.title}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white" {...(isExternalHref(link.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div>
          <p className="border-b border-neutral-800 pb-2 text-sm font-semibold text-white">About UPSC OWL Sociology</p>
          <p className="mt-4 text-sm leading-relaxed">
            UPSC Sociology Optional ke liye roz update hone wali site. Content AI-assisted hai aur human-reviewed hai, har note ke saath original source link.
          </p>
        </div>
      </div>
      <p className="border-t border-neutral-800 py-5 text-center text-xs text-neutral-500">© {year} UPSC OWL Sociology</p>
    </footer>
  )
}
