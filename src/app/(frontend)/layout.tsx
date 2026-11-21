import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import type { ReactNode } from 'react'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { themeInitScript } from '@/components/layout/ThemeToggle'
import { DuotoneDefs } from '@/components/thinkers/DuotoneDefs'
import { getServerSideURL } from '@/lib/url'
import { getNavigation } from '@/lib/data/navigation'
import '@/styles/global.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'UPSC OWL Sociology — Sociology Optional, roz update',
    template: '%s · UPSC OWL Sociology',
  },
  description:
    'UPSC Sociology Optional ke notes, thinkers aur roz ke current affairs, syllabus topics se jude hue.',
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.BING_SITE_VERIFICATION ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } } : {}),
  },
}

type Props = { children: ReactNode }

export default async function RootLayout({ children }: Props) {
  const navigation = await getNavigation()
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Static, first-party script (no user input): sets theme before paint to avoid a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <DuotoneDefs />
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
