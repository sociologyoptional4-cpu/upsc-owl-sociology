import { getServerSideURL } from '@/lib/url'

/** IndexNow ping (Bing/Yandex/…); Google discovers via sitemap. No-op without INDEXNOW_KEY. */
export async function pingIndexNow(urls: string[]): Promise<{ sent: boolean; status?: number }> {
  const key = process.env.INDEXNOW_KEY
  if (!key || urls.length === 0 || process.env.NODE_ENV === 'test') return { sent: false }
  const origin = getServerSideURL()
  if (origin.includes('localhost')) return { sent: false }
  const host = new URL(origin).host
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation: `${origin}/${key}.txt`, urlList: urls.slice(0, 100).map((u) => new URL(u, origin).toString()) }),
  })
  return { sent: true, status: response.status }
}
