import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import type { ReactNode } from 'react'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { themeInitScript } from '@/components/layout/ThemeToggle'
import { getServerSideURL } from '@/lib/url'
import { getNavigation } from '@/lib/data/navigation'
import '@/styles/global.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'AUM Sociology — UPSC Sociology Optional, roz update',
    template: '%s · AUM Sociology',
  },
  description:
    'UPSC Sociology Optional ke notes, thinkers aur roz ke current affairs, syllabus topics se jude hue.',
}

type Props = { children: ReactNode }

export default async function RootLayout({ children }: Props) {
  const navigation = await getNavigation()
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Static, first-party script (no user input): sets theme before paint to avoid a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only z-50 rounded-card bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Content pe jao
        </a>
        <SmoothScroll />
        <Header nav={navigation.header} />
        <main id="main" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
