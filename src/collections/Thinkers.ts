import type { CollectionConfig } from 'payload'

import { canCreateContent, canUpdateContent, isAdmin, publishedOrLoggedIn } from '@/access/roles'
import { LAYOUT_BLOCKS } from '@/blocks'
import { slugField } from '@/fields/slug'
import { forceBotDrafts } from '@/hooks/payload/forceBotDrafts'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/payload/revalidate'

export const Thinkers: CollectionConfig = {
  slug: 'thinkers',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'era', '_status', 'updatedAt'], listSearchableFields: ['name'], group: 'Content' },
  access: {
    read: publishedOrLoggedIn,
    create: canCreateContent,
    update: canUpdateContent,
    delete: isAdmin,
  },
  versions: { drafts: true, maxPerDoc: 25 },
  hooks: { beforeChange: [forceBotDrafts], afterChange: [revalidateAfterChange((doc) => ['/thinkers', '/', ...(typeof doc.slug === 'string' ? [`/thinkers/${doc.slug}`] : [])])], afterDelete: [revalidateAfterDelete((doc) => ['/thinkers', '/', ...(typeof doc.slug === 'string' ? [`/thinkers/${doc.slug}`] : [])]) ] },
  fields: [
    { name: 'name', type: 'text', required: true },
    slugField({ source: 'name' }),
    { name: 'era', type: 'text', admin: { description: 'e.g. 1818–1883' } },
    {
      name: 'portrait',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Transparent WebP/AVIF cut-out (floating card ke liye)' },
    },
    {
      name: 'keyIdeas',
      type: 'array',
      maxRows: 6,
      fields: [{ name: 'idea', type: 'text', required: true }],
    },
    { name: 'layout', type: 'blocks', blocks: LAYOUT_BLOCKS },
  ],
}
