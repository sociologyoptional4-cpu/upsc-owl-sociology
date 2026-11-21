const LOCAL_URL = 'http://localhost:3000'

/** Absolute site origin for metadata, OG images and revalidation links. */
export function getServerSideURL(): string {
  const explicit = process.env.NEXT_PUBLIC_SERVER_URL
  if (explicit) return explicit.replace(/\/$/, '')
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (vercel) return `https://${vercel}`
  return LOCAL_URL
}
