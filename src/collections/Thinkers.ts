import type { CollectionConfig } from 'payload'

import { canCreateContent, canUpdateContent, isAdmin, publishedOrLoggedIn } from '@/access/roles'
import { LAYOUT_BLOCKS } from '@/blocks'
import { slugField } from '@/fields/slug'
import { forceBotDrafts } from '@/hooks/payload/forceBotDrafts'

export const Thinkers: CollectionConfig = {
  slug: 'thinkers',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'era', '_status'], group: 'Content' },
  access: {
    read: publishedOrLoggedIn,
    create: canCreateContent,
    update: canUpdateContent,
    delete: isAdmin,
  },
  versions: { drafts: true, maxPerDoc: 25 },
  hooks: { beforeChange: [forceBotDrafts] },
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
