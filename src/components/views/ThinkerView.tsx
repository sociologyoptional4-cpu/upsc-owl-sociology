import type { ThinkerDetail } from '@/lib/data/types'

export function ThinkerView({ data }: { data: ThinkerDetail }) { return <pre className="p-8 text-xs">{JSON.stringify(data, null, 2)}</pre> }
