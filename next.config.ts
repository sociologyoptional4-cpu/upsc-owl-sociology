import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'
import { env } from './src/lib/env'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  // Smart paste reads the AI prompt files at runtime; make sure Vercel bundles them with the API routes.
  // Prerendering many DB-backed pages at once exhausted Supabase connections on Vercel; fewer at a time + retry.
  experimental: { staticGenerationMaxConcurrency: 2, staticGenerationRetryCount: 3 },
  outputFileTracingIncludes: { '/api/**': ['./src/pipeline/llm/prompts/**/*'] },
  images: {
    unoptimized: true,
    remotePatterns: [
      ...(env.S3_PUBLIC_URL ? [{ protocol: 'https' as const, hostname: new URL(env.S3_PUBLIC_URL).hostname, pathname: '/storage/v1/object/public/**' }] : []),
      { protocol: 'http' as const, hostname: 'localhost', pathname: '/api/media/file/**' },
      { protocol: 'http' as const, hostname: '127.0.0.1', pathname: '/api/media/file/**' },
    ],
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
      {
        pathname: '/assets/**',
      },
    ],
  },
  async headers() {
    return [{ source: '/(.*)', headers: [
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'Content-Security-Policy', value: "frame-ancestors 'self'; frame-src 'self' https://www.youtube-nocookie.com https://checkout.razorpay.com https://api.razorpay.com;" },
    ] }]
  },
  async rewrites() {
    return [
      {
        source: '/:key([a-f0-9]{16,64})\\.txt',
        destination: '/api/indexnow-key?key=:key',
      },
    ]
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
