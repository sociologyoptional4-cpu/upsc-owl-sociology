import type { CollectionConfig } from 'payload'

import { isAdmin } from '@/access/roles'
import { slugField } from '@/fields/slug'

export const Papers: CollectionConfig = {
  slug: 'papers',
  admin: { useAsTitle: 'title', group: 'Syllabus' },
  access: { read: () => true, create: isAdmin, update: isAdmin, delete: isAdmin },
  fields: [
    { name: 'code', type: 'select', required: true, unique: true, options: ['P1', 'P2'] },
    { name: 'title', type: 'text', required: true },
    slugField(),
    { name: 'description', type: 'textarea' },
  ],
}
