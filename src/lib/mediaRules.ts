export const MAX_IMAGE_BYTES = 8 * 1024 * 1024
export const MAX_PDF_BYTES = 15 * 1024 * 1024

const IST = 'Asia/Kolkata'

/** Alt text when the uploader gave none: "Pasted image 2026-11-22 14:03" for clipboard files, else a humanised filename. */
export function deriveAlt(filename: string | undefined, now = new Date()): string {
  const base = (filename ?? '').replace(/\.[^.]+$/, '').trim()
  if (!base || /^(pasted-image|image|screenshot|img[_-]?\d*|download)$/i.test(base)) {
    const parts = new Intl.DateTimeFormat('en-CA', { timeZone: IST, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(now)
    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '00'
    return `Pasted image ${get('year')}-${get('month')}-${get('day')} ${get('hour')}:${get('minute')}`
  }
  const words = base.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim()
  return (words.charAt(0).toUpperCase() + words.slice(1)).slice(0, 120)
}

/** Hinglish error for an oversize upload, or null when the size is fine. */
export function uploadSizeError(mimetype: string | undefined, size: number | undefined): string | null {
  if (!mimetype || !size) return null
  if (mimetype === 'application/pdf' && size > MAX_PDF_BYTES) return 'PDF 15 MB se chhoti honi chahiye.'
  if (mimetype.startsWith('image/') && size > MAX_IMAGE_BYTES) return 'Image 8 MB se chhoti honi chahiye. Chhota karke upload karo.'
  return null
}
