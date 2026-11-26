'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import { useState } from 'react'

import type { SyllabusPaper } from '@/lib/data/types'

import { MobileChaptersDrawer } from './MobileChaptersDrawer'

type TabKey = 'home' | 'chapters' | 'blog' | 'ca' | 'account'

function activeTabFor(pathname: string): TabKey {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/syllabus')) return 'chapters'
  if (pathname.startsWith('/blog')) return 'blog'
  if (pathname.startsWith('/current-affairs')) return 'ca'
  if (pathname.startsWith('/account') || pathname.startsWith('/login') || pathname.startsWith('/signup') || pathname.startsWith('/pro')) {
    return 'account'
  }
  return 'home'
}

export function MobileAppShell({ papers }: { papers: SyllabusPaper[] }) {
  const pathname = usePathname() || '/'
  const [chaptersOpen, setChaptersOpen] = useState(false)
  const current = chaptersOpen ? 'chapters' : activeTabFor(pathname)

  const itemCls = 'relative flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-bold transition-transform active:scale-95'

  return (
    <>
      <nav
        aria-label="Mobile app navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-paper/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <div className="mx-auto flex max-w-lg items-stretch justify-around px-1">
          <Link href="/" onClick={() => setChaptersOpen(false)} className={`${itemCls} ${current === 'home' ? 'text-ink' : 'text-ink-mute'}`}>
            {current === 'home' ? <motion.span layoutId="mobile-bottom-active" className="absolute top-0 h-1 w-9 rounded-b-full bg-saffron-deep" /> : null}
            <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg>
            <span>Home</span>
          </Link>

          <button
            type="button"
            onClick={() => setChaptersOpen((v) => !v)}
            className={`${itemCls} ${current === 'chapters' ? 'text-saffron-deep' : 'text-ink'}`}
          >
            {current === 'chapters' ? <motion.span layoutId="mobile-bottom-active" className="absolute top-0 h-1 w-9 rounded-b-full bg-saffron-deep" /> : null}
            <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
            <span>Full Notes</span>
          </button>

          <Link href="/blog" onClick={() => setChaptersOpen(false)} className={`${itemCls} ${current === 'blog' ? 'text-ink' : 'text-ink-mute'}`}>
            {current === 'blog' ? <motion.span layoutId="mobile-bottom-active" className="absolute top-0 h-1 w-9 rounded-b-full bg-saffron-deep" /> : null}
            <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4Z" /></svg>
            <span>Blogs</span>
          </Link>

          <Link href="/current-affairs" onClick={() => setChaptersOpen(false)} className={`${itemCls} ${current === 'ca' ? 'text-ink' : 'text-ink-mute'}`}>
            {current === 'ca' ? <motion.span layoutId="mobile-bottom-active" className="absolute top-0 h-1 w-9 rounded-b-full bg-saffron-deep" /> : null}
            <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M10 6h8" /><path d="M10 10h8" /><path d="M10 14h4" /></svg>
            <span>CA News</span>
          </Link>

          <Link href="/account" onClick={() => setChaptersOpen(false)} className={`${itemCls} ${current === 'account' ? 'text-ink' : 'text-ink-mute'}`}>
            {current === 'account' ? <motion.span layoutId="mobile-bottom-active" className="absolute top-0 h-1 w-9 rounded-b-full bg-saffron-deep" /> : null}
            <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
            <span>Account</span>
          </Link>
        </div>
      </nav>

      <MobileChaptersDrawer open={chaptersOpen} onClose={() => setChaptersOpen(false)} papers={papers} />
    </>
  )
}
