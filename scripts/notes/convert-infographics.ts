import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const TARGET_DIR = path.resolve(process.cwd(), 'public/assets/infographics')

async function convertOne(srcPath: string, outName: string): Promise<void> {
  fs.mkdirSync(TARGET_DIR, { recursive: true })
  const outPath = path.join(TARGET_DIR, outName)
  await sharp(srcPath)
    .resize(819, 1024, { fit: 'cover', position: 'centre' })
    .webp({ quality: 84 })
    .toFile(outPath)
  const meta = await sharp(outPath).metadata()
  const kb = Math.round(fs.statSync(outPath).size / 1024)
  console.log(`Saved ${outName} (${meta.width}x${meta.height}, ${kb} KB)`)
}

const args = process.argv.slice(2)
if (args.length === 1 && args[0]!.endsWith('.json')) {
  const jobs = JSON.parse(fs.readFileSync(args[0]!, 'utf8')) as { src: string; out: string }[]
  for (const job of jobs) {
    await convertOne(job.src, job.out)
  }
} else if (args.length === 2) {
  await convertOne(args[0]!, args[1]!)
} else {
  console.error('Usage: npx tsx scripts/notes/convert-infographics.ts <src> <out.webp> OR <jobs.json>')
  process.exit(1)
}