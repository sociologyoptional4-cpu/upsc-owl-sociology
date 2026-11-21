import type { TopicDetail } from '@/lib/data/types'

export function TopicView({ data }: { data: TopicDetail }) { return <pre className="p-8 text-xs">{JSON.stringify(data, null, 2)}</pre> }
