import { getRssPosts } from '@/lib/data/blog'
import { getServerSideURL } from '@/lib/url'

export const revalidate = 3600

const esc = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')

export async function GET(): Promise<Response> {
  const base = getServerSideURL()
  const posts = await getRssPosts(30)
  const items = posts
    .map((post) => {
      const url = `${base}${post.href}`
      return `    <item>
      <title>${esc(post.title)}</title>
      <link>${esc(url)}</link>
      <guid isPermaLink="true">${esc(url)}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description>${esc(post.excerpt ?? post.title)}</description>
      ${post.category ? `<category>${esc(post.category.title)}</category>` : ''}
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>UPSC OWL Sociology — Blog</title>
    <link>${esc(`${base}/blog`)}</link>
    <description>UPSC Sociology Optional ke thinkers, concepts, answer writing aur current affairs articles.</description>
    <language>en-IN</language>
    <atom:link href="${esc(`${base}/blog/rss.xml`)}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
      'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
