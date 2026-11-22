import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, PayloadRequest } from 'payload'

type Doc = Record<string, unknown> & { _status?: 'draft' | 'published' }
type PathsFor = (doc: Doc, req: PayloadRequest) => string[] | Promise<string[]>

/**
 * Next's cache API only exists inside a Next server. Seed scripts and the
 * Payload CLI load the same config, so imports are lazy and failures are logged, not thrown.
 */
async function revalidatePaths(paths: string[], req: PayloadRequest): Promise<void> {
  if (req.context?.disableRevalidate || paths.length === 0) return
  try {
    const { revalidatePath } = await import('next/cache')
    for (const path of new Set(paths)) revalidatePath(path)
    req.payload.logger.info(`revalidated: ${[...new Set(paths)].join(', ')}`)
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error)
    req.payload.logger.warn(`revalidate skipped (${message})`)
  }
}

/**
 * Revalidates a doc's public URLs when it is published, or when a previously
 * published version changes (unpublish, slug change). Drafts-only edits do nothing.
 */
export function revalidateAfterChange(pathsFor: PathsFor): CollectionAfterChangeHook {
  return async ({ doc, previousDoc, req }) => {
    if (req.context?.disableRevalidate) return doc
    const current = doc as Doc
    const previous = (previousDoc ?? {}) as Doc
    const paths = [
      ...(current._status === 'published' ? await pathsFor(current, req) : []),
      ...(previous._status === 'published' ? await pathsFor(previous, req) : []),
    ]
    await revalidatePaths(paths, req)
    return doc
  }
}

export function revalidateAlwaysAfterChange(pathsFor: PathsFor): CollectionAfterChangeHook {
  return async ({ doc, req }) => {
    if (req.context?.disableRevalidate) return doc
    await revalidatePaths(await pathsFor(doc as Doc, req), req)
    return doc
  }
}

export async function unitPaths(doc: Doc, req: PayloadRequest): Promise<string[]> {
  const unitSlug = typeof doc.slug === 'string' ? doc.slug : ''
  const paperId = typeof doc.paper === 'number' ? doc.paper : typeof doc.paper === 'object' && doc.paper ? (doc.paper as { id?: number }).id : undefined
  if (!unitSlug || !paperId) return ['/syllabus', '/']
  const paper = await req.payload.findByID({ collection: 'papers', id: paperId, depth: 0, overrideAccess: true }).catch(() => null)
  const paperSlug = paper?.slug ?? ''
  if (!paperSlug) return ['/syllabus', '/']
  return [`/syllabus/${paperSlug}/${unitSlug}`, `/syllabus/${paperSlug}`, '/syllabus', '/']
}

export async function topicPaths(doc: Doc, req: PayloadRequest): Promise<string[]> {
  const topicSlug = typeof doc.slug === 'string' ? doc.slug : ''
  const unitId = typeof doc.unit === 'number' ? doc.unit : typeof doc.unit === 'object' && doc.unit ? (doc.unit as { id?: number }).id : undefined
  if (!topicSlug || !unitId) return ['/syllabus', '/']
  const unit = await req.payload.findByID({ collection: 'units', id: unitId, depth: 1, overrideAccess: true })
  const paper = typeof unit.paper === 'object' && unit.paper ? unit.paper : await req.payload.findByID({ collection: 'papers', id: typeof unit.paper === 'number' ? unit.paper : 0, depth: 0, overrideAccess: true }).catch(() => null)
  const paperSlug = paper?.slug ?? ''
  const unitSlug = unit.slug ?? ''
  return [`/syllabus/${paperSlug}/${unitSlug}/${topicSlug}`, `/syllabus/${paperSlug}/${unitSlug}`, `/syllabus/${paperSlug}`, '/syllabus', '/']
}

export function revalidateAfterDelete(pathsFor: PathsFor): CollectionAfterDeleteHook {
  return async ({ doc, req }) => {
    await revalidatePaths(await pathsFor(doc as Doc, req), req)
    return doc
  }
}
