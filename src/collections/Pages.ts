import type { CollectionBeforeChangeHook, CollectionConfig } from 'payload'

import { canCreateContent, canUpdateContent, isAdmin, publishedOrLoggedIn } from '@/access/roles'
import { LAYOUT_BLOCKS } from '@/blocks'
import { slugField } from '@/fields/slug'
import { forceBotDrafts } from '@/hooks/payload/forceBotDrafts'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/payload/revalidate'
import { isReservedTopLevelSlug, joinPath, pathToHref } from '@/lib/slug'

/** path = parent's path + own slug, recomputed on every save. */
const computePath: CollectionBeforeChangeHook = async ({ data, req }) => {
  const slug = String(data.slug ?? '')
  const parentId = typeof data.parent === 'object' ? data.parent?.id : data.parent
  if (!parentId) return { ...data, path: slug }
  const parent = await req.payload.findByID({ collection: 'pages', id: parentId, depth: 0, req })
  return { ...data, path: joinPath(parent.path, slug) }
}

const pagePaths = (doc: Record<string, unknown>) =>
  typeof doc.path === 'string' && doc.path ? [pathToHref(doc.path)] : []

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'path', '_status', 'updatedAt'],
    group: 'Content',
    description: 'Koi bhi page — About, Mentorship, landing pages. Slug "home" = homepage.',
  },
  access: {
    read: publishedOrLoggedIn,
    create: canCreateContent,
    update: canUpdateContent,
    delete: isAdmin,
  },
  versions: { drafts: { autosave: { interval: 800 } }, maxPerDoc: 25 },
  hooks: {
    beforeChange: [forceBotDrafts, computePath],
    afterChange: [revalidateAfterChange(pagePaths)],
    afterDelete: [revalidateAfterDelete(pagePaths)],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField({
      validate: (value, { data }) => {
        if (!value) return 'Slug chahiye (ya title bharo)'
        const hasParent = Boolean((data as { parent?: unknown } | undefined)?.parent)
        if (!hasParent && isReservedTopLevelSlug(value)) {
          return `"${value}" reserved hai (site ka apna section). Dusra slug do.`
        }
        return true
      },
    }),
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'pages',
      admin: { position: 'sidebar', description: 'Nested URL ke liye, e.g. guides/answer-writing' },
    },
    {
      name: 'path',
      type: 'text',
      unique: true,
      index: true,
      admin: { position: 'sidebar', readOnly: true, description: 'Apne aap banta hai' },
    },
    { name: 'layout', type: 'blocks', blocks: LAYOUT_BLOCKS, required: true, minRows: 1 },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea', maxLength: 180 },
      ],
    },
  ],
}
