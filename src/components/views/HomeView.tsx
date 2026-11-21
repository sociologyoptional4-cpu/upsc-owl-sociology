import type { HomeData } from '@/lib/data/types'

export function HomeView({ data }: { data: HomeData }) { return <pre className="p-8 text-xs">{JSON.stringify(data, null, 2)}</pre> }
