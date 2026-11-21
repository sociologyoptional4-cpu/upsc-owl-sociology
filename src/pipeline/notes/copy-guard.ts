const MIN_SHARED_RUN = 12

const words = (text: string): string[] =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9ऀ-ॿ\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)

/**
 * D15 copy guard: true if `output` shares a run of ≥ 12 consecutive words with `source`.
 * Used to reject notes that echo the private handout background.
 */
export function sharesLongRun(output: string, source: string, minRun = MIN_SHARED_RUN): boolean {
  const src = words(source)
  if (src.length < minRun) return false
  const grams = new Set<string>()
  for (let i = 0; i + minRun <= src.length; i += 1) grams.add(src.slice(i, i + minRun).join(' '))
  const out = words(output)
  for (let i = 0; i + minRun <= out.length; i += 1) {
    if (grams.has(out.slice(i, i + minRun).join(' '))) return true
  }
  return false
}
