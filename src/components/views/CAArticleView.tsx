import type { CAArticle } from '@/lib/data/types'

export function CAArticleView({ data }: { data: CAArticle }) { return <pre className="p-8 text-xs">{JSON.stringify(data, null, 2)}</pre> }
