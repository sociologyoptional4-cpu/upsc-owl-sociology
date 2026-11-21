import { postgresAdapter } from '@payloadcms/db-postgres'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { CurrentAffairs } from './collections/CurrentAffairs'
import { Sources } from './collections/Sources'
import { PipelineRuns } from './collections/PipelineRuns'
import { Digests } from './collections/Digests'
import { Quizzes } from './collections/Quizzes'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Papers } from './collections/Papers'
import { Thinkers } from './collections/Thinkers'
import { Topics } from './collections/Topics'
import { Units } from './collections/Units'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'
import { getServerSideURL } from './lib/url'
import { endpoints } from './endpoints'
import { richTextEditor } from './lib/lexical/richTextEditor'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing required env var ${name} (see .env.example)`)
  return value
}

export default buildConfig({
  serverURL: getServerSideURL(),
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: ' · UPSC OWL Admin' },
    components: {
      beforeDashboard: ['/components/admin/TodayWidget#TodayWidget'],
      afterNavLinks: ['/components/admin/ReviewNavLink#ReviewNavLink'],
      views: {
        reviewQueue: { Component: '/components/admin/ReviewQueueView#ReviewQueueView', path: '/review' },
      },
    },
  },
  collections: [Pages, CurrentAffairs, Topics, Units, Papers, Thinkers, Media, Users, Sources, PipelineRuns, Digests, Quizzes],
  globals: [SiteSettings, Navigation],
  editor: richTextEditor(),
  secret: requireEnv('PAYLOAD_SECRET'),
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({
    pool: { connectionString: requireEnv('DATABASE_URL') },
  }),
  sharp,
  plugins: [],
  endpoints,
})
