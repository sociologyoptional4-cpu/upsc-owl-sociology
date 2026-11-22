/** Pure: trims, collapses spaces, strips SQL-like wildcards and caps length. Returns '' when too short to search. */
export function normalizeQuery(raw: unknown): string {
  if (typeof raw !== 'string') return ''
  const q = raw.replace(/[%_\\]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80)
  return q.length >= 2 ? q : ''
}
