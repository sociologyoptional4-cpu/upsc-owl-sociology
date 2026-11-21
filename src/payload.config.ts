import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { CurrentAffairs } from './collections/CurrentAffairs'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Papers } from './collections/Papers'
import { Thinkers } from './collections/Thinkers'
import { Topics } from './collections/Topics'
import { Units } from './collections/Units'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'
import { getServerSideURL } from './lib/url'

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
    meta: { titleSuffix: ' · AUM Admin' },
  },
  collections: [Pages, CurrentAffairs, Topics, Units, Papers, Thinkers, Media, Users],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: requireEnv('PAYLOAD_SECRET'),
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({
    pool: { connectionString: requireEnv('DATABASE_URL') },
  }),
  sharp,
  plugins: [],
})
