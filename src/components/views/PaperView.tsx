import type { PaperPageData } from '@/lib/data/types'

export function PaperView({ data }: { data: PaperPageData }) { return <pre className="p-8 text-xs">{JSON.stringify(data, null, 2)}</pre> }
