import type { IssueSummary, Paginated } from '@/lib/data/types'
import type { CACard } from '@/lib/data/types'

export function CAHubView({ data }: { data: { list: Paginated<CACard>; issues: IssueSummary[] } }) { return <pre className="p-8 text-xs">{JSON.stringify(data, null, 2)}</pre> }
