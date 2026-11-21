import type { CACard, IssueSummary } from '@/lib/data/types'

export function IssueView({ data }: { data: { issue: IssueSummary; items: CACard[] } }) { return <pre className="p-8 text-xs">{JSON.stringify(data, null, 2)}</pre> }
