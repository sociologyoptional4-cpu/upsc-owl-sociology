import type { MetadataRoute } from 'next'
import { getServerSideURL } from '@/lib/url'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: ['Googlebot', 'Bingbot'], allow: '/', disallow: ['/admin', '/api'] },
      {
        userAgent: ['GPTBot', 'CCBot', 'Bytespider', 'ClaudeBot', 'Amazonbot'],
        disallow: ['/syllabus/', '/admin', '/api'],
      },
      { userAgent: '*', allow: '/', disallow: ['/admin', '/api'] },
    ],
    sitemap: new URL('/sitemap.xml', getServerSideURL()).toString(),
  }
}
