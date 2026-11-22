import { postgresAdapter } from '@payloadcms/db-postgres'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { CurrentAffairs } from './collections/CurrentAffairs'
import { Sources } from './collections/Sources'
import { PipelineRuns } from './collections/PipelineRuns'
import { Digests } from './collections/Digests'
import { Quizzes } from './collections/Quizzes'
import { Posts } from './collections/Posts'
import { BlogCategories, BlogSeries, BlogTags } from './collections/BlogTaxonomies'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Papers } from './collections/Papers'
import { Thinkers } from './collections/Thinkers'
import { Topics } from './collections/Topics'
import { Units } from './collections/Units'
import { Pyqs } from './collections/Pyqs'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'
import { getServerSideURL } from './lib/url'
import { endpoints } from './endpoints'
import { richTextEditor } from './lib/lexical/richTextEditor'
import { env } from './lib/env'
import { blogJobs } from './lib/blog/jobs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const IS_BUILD = process.env.NEXT_PHASE === 'phase-production-build'

export default buildConfig({
  serverURL: getServerSideURL(),
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: ' · UPSC OWL Admin' },
    // Admin UI (owned by Claude, see STATE): branded graphics, custom dashboard, review queue.
    components: {
      graphics: {
        Logo: '/components/admin/AdminBrand#AdminLogo',
        Icon: '/components/admin/AdminBrand#AdminIcon',
      },
      afterNavLinks: ['/components/admin/ReviewNavLink#ReviewNavLink'],
      views: {
        dashboard: { Component: '/components/admin/OwlDashboard#OwlDashboard' },
        reviewQueue: { Component: '/components/admin/ReviewQueueView#ReviewQueueView', path: '/review' },
        writeDesk: { Component: '/components/admin/WriteDesk#WriteDesk', path: '/write' },
        seoControlCenter: { Component: '/components/admin/SeoControlCenter#SeoControlCenter', path: '/seo' },
      },
    },
  },
  collections: [Pages, CurrentAffairs, Topics, Units, Papers, Pyqs, Thinkers, Media, Users, Sources, PipelineRuns, Digests, Quizzes, Posts, BlogCategories, BlogTags, BlogSeries],
  globals: [SiteSettings, Navigation],
  editor: richTextEditor(),
  secret: env.PAYLOAD_SECRET,
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({
    push: env.NODE_ENV !== 'production',
    pool: {
      connectionString: env.DATABASE_URL,
      // `next build` prerenders hundreds of pages in parallel workers; one connection with a 10 s wait
      // timed out on Vercel. Build gets a slightly larger pool and longer wait; runtime stays lean.
      max: IS_BUILD ? 3 : 1,
      idleTimeoutMillis: 10_000,
      connectionTimeoutMillis: IS_BUILD ? 60_000 : 10_000,
      ssl: env.DATABASE_SSL_CA ? { ca: env.DATABASE_SSL_CA } : undefined,
    },
  }),
  sharp,
  plugins: env.S3_ENDPOINT ? [s3Storage({
    collections: { media: true },
    bucket: env.S3_BUCKET!,
    config: {
      endpoint: env.S3_ENDPOINT,
      region: env.S3_REGION,
      forcePathStyle: true,
      credentials: { accessKeyId: env.S3_ACCESS_KEY_ID!, secretAccessKey: env.S3_SECRET_ACCESS_KEY! },
    },
  })] : [],
  endpoints,
  jobs: blogJobs,
})
