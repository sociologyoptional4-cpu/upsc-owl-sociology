import type { PyqBankData } from '@/lib/data/types'

/** Temporary data contract stub; visual design is owned by Claude. */
export function PyqBankView({ data }: { data: PyqBankData }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
