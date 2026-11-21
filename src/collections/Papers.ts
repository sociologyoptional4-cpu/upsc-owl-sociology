import type { CollectionConfig } from 'payload'

import { isAdmin } from '@/access/roles'
import { slugField } from '@/fields/slug'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/payload/revalidate'

export const Papers: CollectionConfig = {
  slug: 'papers',
  admin: { useAsTitle: 'title', group: 'Syllabus' },
  access: { read: () => true, create: isAdmin, update: isAdmin, delete: isAdmin },
  hooks: { afterChange: [revalidateAfterChange(() => ['/syllabus'])], afterDelete: [revalidateAfterDelete(() => ['/syllabus'])] },
  fields: [
    { name: 'code', type: 'select', required: true, unique: true, options: ['P1', 'P2'] },
    { name: 'title', type: 'text', required: true },
    slugField(),
    { name: 'description', type: 'textarea' },
  ],
}
