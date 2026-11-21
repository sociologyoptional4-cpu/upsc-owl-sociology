/** Accept only internal paths ("/x") and http(s) URLs; blocks javascript:, data:, etc. */
export function isSafeHref(value: string): boolean {
  if (value.startsWith('/') && !value.startsWith('//')) return true
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}

export function safeHref(value: string | null | undefined): string | undefined {
  return value && isSafeHref(value) ? value : undefined
}

export function isExternalHref(value: string): boolean {
  return /^https?:\/\//.test(value)
}

/** Payload field validator: returns true or a Hinglish error. */
export function validateHref(value: unknown): true | string {
  if (value == null || value === '') return true
  if (typeof value === 'string' && isSafeHref(value)) return true
  return 'Link "/" se shuru ho ya https:// URL ho.'
}
