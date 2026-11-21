import type { MetadataRoute } from 'next'
import { getServerSideURL } from '@/lib/url'

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/', disallow: ['/admin', '/api'] }, sitemap: new URL('/sitemap.xml', getServerSideURL()).toString() }
}
