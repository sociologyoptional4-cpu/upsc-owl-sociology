import sharp from 'sharp'

export type QrCropBox = {
  left: number
  top: number
  width: number
  height: number
}

type RowScan = { y: number; dark: number; minX: number; maxX: number; span: number }

function scanRows(grayscale: Uint8Array, width: number, height: number): RowScan[] {
  const marginX = Math.min(24, Math.floor(width / 8))
  const rows: RowScan[] = []
  for (let y = 0; y < height; y += 1) {
    let dark = 0
    let minX = width
    let maxX = 0
    const rowOffset = y * width
    for (let x = marginX; x < width - marginX; x += 1) {
      if (grayscale[rowOffset + x]! < 60) {
        dark += 1
        if (x < minX) minX = x
        if (x > maxX) maxX = x
      }
    }
    rows.push({ y, dark, minX, maxX, span: maxX > minX ? maxX - minX : 0 })
  }
  return rows
}

/** Finds the square QR matrix inside Razorpay's tall poster PNG and adds white quiet-zone padding. */
export function detectQrBounds(grayscale: Uint8Array, width: number, height: number): QrCropBox | null {
  if (width < 160 || height < 160 || grayscale.length < width * height) return null
  const minSpan = Math.floor(width * 0.35)
  const rows = scanRows(grayscale, width, height)

  let best: { y1: number; y2: number; minX: number; maxX: number } | null = null
  let current: { y1: number; y2: number; minX: number; maxX: number } | null = null

  for (const row of rows) {
    if (row.span > minSpan && row.dark > 60) {
      if (!current) {
        current = { y1: row.y, y2: row.y, minX: row.minX, maxX: row.maxX }
      } else {
        current.y2 = row.y
        current.minX = Math.min(current.minX, row.minX)
        current.maxX = Math.max(current.maxX, row.maxX)
      }
    } else if (current) {
      if (!best || current.y2 - current.y1 > best.y2 - best.y1) best = current
      current = null
    }
  }
  if (current && (!best || current.y2 - current.y1 > best.y2 - best.y1)) best = current
  if (!best) return null

  const boxW = best.maxX - best.minX
  const boxH = best.y2 - best.y1
  if (boxW < 120 || boxH < 120) return null
  if (Math.abs(boxW - boxH) > Math.max(boxW, boxH) * 0.15) return null

  const pad = 28
  const left = Math.max(0, best.minX - pad)
  const top = Math.max(0, best.y1 - pad)
  const cropW = Math.min(width - left, boxW + pad * 2)
  const cropH = Math.min(height - top, boxH + pad * 2)
  return { left, top, width: cropW, height: cropH }
}

/** Downloads Razorpay's poster PNG and returns a base64 PNG data URL containing only the scannable QR square. */
export async function cropRazorpayQrImage(imageUrl: string): Promise<string | null> {
  try {
    const res = await fetch(imageUrl, { signal: AbortSignal.timeout(10_000) })
    if (!res.ok) return null
    const buf = Buffer.from(await res.arrayBuffer())
    const { data, info } = await sharp(buf).grayscale().raw().toBuffer({ resolveWithObject: true })
    const box = detectQrBounds(data, info.width, info.height)
    if (!box) return null

    const cropped = await sharp(buf)
      .extract(box)
      .flatten({ background: '#ffffff' })
      .png({ compressionLevel: 9 })
      .toBuffer()
    return `data:image/png;base64,${cropped.toString('base64')}`
  } catch {
    return null
  }
}
