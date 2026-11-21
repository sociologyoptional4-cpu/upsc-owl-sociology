import type { SyllabusPaper } from '@/lib/data/types'

export function SyllabusView({ data }: { data: SyllabusPaper[] }) { return <pre className="p-8 text-xs">{JSON.stringify(data, null, 2)}</pre> }
