import type { UnitPageData } from '@/lib/data/types'

export function UnitView({ data }: { data: UnitPageData }) { return <pre className="p-8 text-xs">{JSON.stringify(data, null, 2)}</pre> }
