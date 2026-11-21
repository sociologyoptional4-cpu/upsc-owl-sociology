import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'
import path from 'node:path'
import { importSyllabus } from './import-syllabus'
import { shouldRunProductionImport } from './production-import-gate'
import { importPyqs } from '../pyq/import-pyqs'
import { readPyqJsonl } from '../pyq/read-data'

async function main(): Promise<void> {
  if (!shouldRunProductionImport(process.env)) {
    console.info('Production content import skipped')
    return
  }

  const payload = await getPayload({ config })
  try {
    const syllabus = await importSyllabus(payload)
    const pyqs = await importPyqs(payload, readPyqJsonl(path.resolve(process.cwd(), 'data/pyq/paper1-2013-2025.jsonl')))
    console.info(`Production content import complete: ${syllabus.units} units, ${syllabus.topics} topics, ${pyqs.total} PYQs (${pyqs.created} created, ${pyqs.updated} updated)`)
  } finally {
    await payload.destroy()
  }
}

try {
  await main()
} catch {
  console.error('Production content import failed')
  process.exit(1)
}
