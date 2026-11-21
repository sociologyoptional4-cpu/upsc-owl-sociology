import type { CollectionConfig } from 'payload'

import { canCreateContent, canUpdateContent, isAdmin, publishedOrLoggedIn } from '@/access/roles'
import { LAYOUT_BLOCKS } from '@/blocks'
import { slugField } from '@/fields/slug'
import { forceBotDrafts } from '@/hooks/payload/forceBotDrafts'

// Topic routes ship in Phase 1; revalidation hooks are added with them.
export const Topics: CollectionConfig = {
  slug: 'topics',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'unit', '_status'], group: 'Syllabus' },
  access: {
    read: publishedOrLoggedIn,
    create: canCreateContent,
    update: canUpdateContent,
    delete: isAdmin,
  },
  versions: { drafts: true, maxPerDoc: 25 },
  hooks: { beforeChange: [forceBotDrafts] },
  fields: [
    { name: 'title', type: 'text', required: true },
    slugField(),
    { name: 'unit', type: 'relationship', relationTo: 'units', required: true },
    { name: 'summary', type: 'textarea', admin: { description: '2-3 line overview (cards aur SEO mein)' } },
    { name: 'layout', type: 'blocks', blocks: LAYOUT_BLOCKS },
    { name: 'thinkers', type: 'relationship', relationTo: 'thinkers', hasMany: true },
    { name: 'relatedTopics', type: 'relationship', relationTo: 'topics', hasMany: true },
  ],
}
