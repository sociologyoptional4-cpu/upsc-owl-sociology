import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'
import { importSyllabus } from './import-syllabus'

async function main(): Promise<void> {
  const payload = await getPayload({ config })
  try {
    const counts = await importSyllabus(payload)
    payload.logger.info(`Syllabus ready: ${counts.units} units, ${counts.topics} official topics`)
  } finally {
    await payload.destroy()
  }
}

try {
  await main()
} catch {
  console.error('Syllabus build failed')
  process.exit(1)
}
