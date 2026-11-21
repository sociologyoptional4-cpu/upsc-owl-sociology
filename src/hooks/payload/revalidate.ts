import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, PayloadRequest } from 'payload'

type Doc = Record<string, unknown> & { _status?: 'draft' | 'published' }
type PathsFor = (doc: Doc) => string[]

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
    const current = doc as Doc
    const previous = (previousDoc ?? {}) as Doc
    const paths = [
      ...(current._status === 'published' ? pathsFor(current) : []),
      ...(previous._status === 'published' ? pathsFor(previous) : []),
    ]
    await revalidatePaths(paths, req)
    return doc
  }
}

export function revalidateAfterDelete(pathsFor: PathsFor): CollectionAfterDeleteHook {
  return async ({ doc, req }) => {
    await revalidatePaths(pathsFor(doc as Doc), req)
    return doc
  }
}
