import type { ThinkerCard } from '@/lib/data/types'

export function ThinkersView({ data }: { data: ThinkerCard[] }) { return <pre className="p-8 text-xs">{JSON.stringify(data, null, 2)}</pre> }
