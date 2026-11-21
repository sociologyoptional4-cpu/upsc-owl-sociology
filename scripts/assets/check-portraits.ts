import fs from 'node:fs'
import path from 'node:path'
import sharp, { type OverlayOptions } from 'sharp'

interface ManifestEntry {
  slug: string
  name: string
  status: 'ok' | 'none'
  file: string | null
}

const CELL_W = 400
const CELL_H = 500
const PAD = 24
const LABEL_H = 36

function makeYellowCircleBg(): Buffer {
  const cx = CELL_W / 2
  const cy = Math.round(CELL_H * 0.56)
  const r = Math.round(CELL_W * 0.42)
  const svg = `<svg width="${CELL_W}" height="${CELL_H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${CELL_W}" height="${CELL_H}" fill="#FFFFFF"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#FACC15"/>
  </svg>`
  return Buffer.from(svg)
}

function makeDarkBg(): Buffer {
  const svg = `<svg width="${CELL_W}" height="${CELL_H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${CELL_W}" height="${CELL_H}" fill="#0A0A0A"/>
  </svg>`
  return Buffer.from(svg)
}

function makeLabel(text: string, width: number): Buffer {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  const svg = `<svg width="${width}" height="${LABEL_H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${LABEL_H}" fill="#E5E7EB"/>
    <text x="12" y="24" font-family="sans-serif" font-size="16" font-weight="700" fill="#111827">${escaped}</text>
  </svg>`
  return Buffer.from(svg)
}

async function buildContactSheet(): Promise<void> {
  const manifestPath = path.resolve(process.cwd(), 'src/data/thinker-assets.json')
  const entries: ManifestEntry[] = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
  const okEntries = entries.filter((e): e is ManifestEntry & { file: string } => e.status === 'ok' && Boolean(e.file))

  const rowW = CELL_W * 2 + PAD
  const sheetW = rowW + PAD * 2
  const rowH = LABEL_H + CELL_H + PAD
  const sheetH = PAD + okEntries.length * rowH

  const yellowBg = await sharp(makeYellowCircleBg()).png().toBuffer()
  const darkBg = await sharp(makeDarkBg()).png().toBuffer()
  const composites: OverlayOptions[] = []

  for (let i = 0; i < okEntries.length; i++) {
    const entry = okEntries[i]
    const largePath = path.resolve(process.cwd(), 'public', entry.file.replace(/^\//, ''))
    const smPath = largePath.replace(/\.webp$/, '-sm.webp')
    const lgKb = (fs.statSync(largePath).size / 1024).toFixed(1)
    const smKb = fs.existsSync(smPath) ? (fs.statSync(smPath).size / 1024).toFixed(1) : '?'

    const resized = await sharp(largePath)
      .resize(CELL_W, CELL_H, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer()

    const onYellow = await sharp(yellowBg)
      .composite([{ input: resized, top: 0, left: 0 }])
      .png()
      .toBuffer()

    const onDark = await sharp(darkBg)
      .composite([{ input: resized, top: 0, left: 0 }])
      .png()
      .toBuffer()

    const yTop = PAD + i * rowH
    const labelText = `${entry.slug} — ${lgKb} KB / sm ${smKb} KB  (Left: #FACC15 circle | Right: #0A0A0A)`
    composites.push(
      { input: makeLabel(labelText, rowW), top: yTop, left: PAD },
      { input: onYellow, top: yTop + LABEL_H, left: PAD },
      { input: onDark, top: yTop + LABEL_H, left: PAD + CELL_W + PAD },
    )
  }

  const outPath = path.resolve(process.cwd(), 'assets-src/portrait-check.png')
  await sharp({
    create: {
      width: sheetW,
      height: sheetH,
      channels: 4,
      background: { r: 243, g: 244, b: 246, alpha: 1 },
    },
  })
    .composite(composites)
    .png({ compressionLevel: 6 })
    .toFile(outPath)

  console.log(`Saved ${outPath} (${sheetW}x${sheetH}) for ${okEntries.length} portraits.`)
}

buildContactSheet().catch((err: unknown) => {
  console.error('check-portraits failed:', err)
  process.exit(1)
})
