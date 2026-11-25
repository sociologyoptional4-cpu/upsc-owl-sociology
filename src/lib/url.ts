const LOCAL_URL = 'http://localhost:3000'

/** Absolute site origin for metadata, OG images and revalidation links. */
export function getServerSideURL(): string {
  const explicit = process.env.NEXT_PUBLIC_SERVER_URL
  if (explicit) return explicit.replace(/\/$/, '')
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercel) return `https://${vercel}`
  return LOCAL_URL
}

/** Origins allowed by Payload CSRF/CORS checks across production domains, previews, and local dev ports. */
export function getAllowedOrigins(): string[] {
  const origins = new Set<string>([
    getServerSideURL(),
    'https://sociology4upsc.com',
    'https://www.sociology4upsc.com',
  ])
  if (process.env.SITE_URL) origins.add(process.env.SITE_URL.replace(/\/$/, ''))
  if (process.env.VERCEL_URL) origins.add(`https://${process.env.VERCEL_URL}`)
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) origins.add(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
  if (process.env.NODE_ENV !== 'production') {
    for (let port = 3000; port <= 3005; port += 1) {
      origins.add(`http://localhost:${port}`)
      origins.add(`http://127.0.0.1:${port}`)
    }
  }
  return [...origins]
}
