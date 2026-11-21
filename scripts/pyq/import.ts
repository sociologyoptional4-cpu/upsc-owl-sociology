import 'dotenv/config'
import path from 'node:path'
import { getPayload } from 'payload'
import config from '@payload-config'
import { importPyqs } from './import-pyqs'
import { readPyqJsonl } from './read-data'

const FILE = path.resolve(process.cwd(), 'data/pyq/paper1-2013-2025.jsonl')

async function main(): Promise<void> {
  const payload = await getPayload({ config })
  try {
    const result = await importPyqs(payload, readPyqJsonl(FILE))
    payload.logger.info(`PYQs ready: ${result.total} source rows, ${result.created} created, ${result.updated} updated, ${result.total - result.created - result.updated} skipped`)
  } finally {
    await payload.destroy()
  }
}

try {
  await main()
} catch {
  console.error('PYQ import failed')
  process.exit(1)
}
