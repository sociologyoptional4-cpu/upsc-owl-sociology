import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Payload } from 'payload'
import { getPayload } from 'payload'

import config from '@payload-config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface ThinkerAsset {
  slug: string
  name: string
  status: 'ok' | 'none'
  file: string | null
  fileSm: string | null
  width: number | null
  height: number | null
  license: 'public-domain' | 'cc0' | 'cc-by' | 'cc-by-sa' | null
  licenseName: string | null
  author: string | null
  sourceUrl: string | null
  year: string | null
  attribution: string | null
}

const CTX = { disableRevalidate: true }

export async function attachPortraits(payload: Payload): Promise<void> {
  const manifestPath = path.resolve(process.cwd(), 'src/data/thinker-assets.json')
  const raw = fs.readFileSync(manifestPath, 'utf-8')
  const manifest: ThinkerAsset[] = JSON.parse(raw)

  const okEntries = manifest.filter((entry): entry is ThinkerAsset & { file: string; license: NonNullable<ThinkerAsset['license']> } =>
    entry.status === 'ok' && typeof entry.file === 'string' && entry.license !== null
  )

  payload.logger.info(`Processing ${okEntries.length} 'ok' portrait assets...`)

  for (const entry of okEntries) {
    const filename = path.basename(entry.file)
    const filePath = path.resolve(process.cwd(), 'public', entry.file.replace(/^\//, ''))

    if (!fs.existsSync(filePath)) {
      payload.logger.error(`File missing on disk: ${filePath}`)
      continue
    }

    // 1. Check if media document already exists by filename
    const { docs: existingMedia } = await payload.find({
      collection: 'media',
      where: {
        filename: {
          equals: filename,
        },
      },
      limit: 1,
      depth: 0,
    })

    let mediaId: number

    if (existingMedia.length > 0) {
      mediaId = existingMedia[0].id
      payload.logger.info(`Reusing existing media doc #${mediaId} for ${filename}`)
    } else {
      const createdMedia = await payload.create({
        collection: 'media',
        context: CTX,
        data: {
          alt: `Portrait of ${entry.name}`,
          license: entry.license,
          credit: entry.attribution ?? entry.author ?? undefined,
          sourceUrl: entry.sourceUrl ?? undefined,
        },
        filePath,
      })
      mediaId = createdMedia.id
      payload.logger.info(`Created media doc #${mediaId} for ${filename}`)
    }

    // 2. Set thinkers.{slug}.portrait to mediaId (create published thinker if slug doesn't exist)
    const { docs: existingThinkers } = await payload.find({
      collection: 'thinkers',
      where: {
        slug: {
          equals: entry.slug,
        },
      },
      limit: 1,
      depth: 0,
      draft: true,
    })

    if (existingThinkers.length > 0) {
      const thinker = existingThinkers[0]
      await payload.update({
        collection: 'thinkers',
        id: thinker.id,
        context: CTX,
        data: {
          portrait: mediaId,
        },
      })
      payload.logger.info(`Attached portrait #${mediaId} to existing thinker ${entry.slug}`)
    } else {
      await payload.create({
        collection: 'thinkers',
        context: CTX,
        data: {
          name: entry.name,
          slug: entry.slug,
          portrait: mediaId,
          _status: 'published',
        },
      })
      payload.logger.info(`Created thinker ${entry.slug} with portrait #${mediaId}`)
    }
  }
}

// Top-level await for payload run
try {
  const payload = await getPayload({ config })
  await attachPortraits(payload)
  payload.logger.info('attach-portraits finished successfully')
  process.exit(0)
} catch (err: unknown) {
  console.error('attach-portraits failed:', err)
  process.exit(1)
}
