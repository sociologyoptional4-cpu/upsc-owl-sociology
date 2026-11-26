import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import type { ReactNode } from 'react'

import { AgencyUtmPreserver } from '@/components/analytics/AgencyTracker'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { MobileAppShell } from '@/components/mobile/MobileAppShell'
import { AntiCloneGuard } from '@/components/security/AntiCloneGuard'
import { JsonLd } from '@/components/ui/Breadcrumbs'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { themeInitScript } from '@/components/layout/ThemeToggle'
import { DuotoneDefs } from '@/components/thinkers/DuotoneDefs'
import { AuroraBackground } from '@/components/ui/AuroraBackground'
import { getAgencyTrackerScriptUrl } from '@/lib/analytics/agency-tracker'
import { buildSiteKeywords } from '@/lib/seo/keywords'
import { siteJsonLd } from '@/lib/seo/jsonld'
import { getServerSideURL } from '@/lib/url'
import { getNavigation } from '@/lib/data/navigation'
import { getSyllabusTree } from '@/lib/data/syllabus'
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
  keywords: buildSiteKeywords(),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'UPSC OWL Sociology',
  },
  twitter: { card: 'summary_large_image' },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.BING_SITE_VERIFICATION ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } } : {}),
  },
}

type Props = { children: ReactNode }

export default async function RootLayout({ children }: Props) {
  const [navigation, syllabus] = await Promise.all([getNavigation(), getSyllabusTree()])
  const trackerSrc = getAgencyTrackerScriptUrl()
  return (
    <html lang="en" data-theme="light" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Static, first-party script (no user input): sets theme before paint to avoid a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {trackerSrc ? <script defer src={trackerSrc} /> : null}
        <noscript>
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <AuroraBackground />
        <JsonLd data={siteJsonLd()} />
        <AntiCloneGuard />
        <AgencyUtmPreserver />
        <DuotoneDefs />
        <a
          href="#main"
          className="sr-only z-50 rounded-card bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Content pe jao
        </a>
        <SmoothScroll />
        <Header nav={navigation.header} />
        <main id="main" className="relative z-10 pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileAppShell papers={syllabus} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
