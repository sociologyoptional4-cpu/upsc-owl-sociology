import type { CollectionConfig } from 'payload'

import { isAdmin, isStaff } from '@/access/roles'
import { slugField } from '@/fields/slug'

export const Units: CollectionConfig = {
  slug: 'units',
  admin: { useAsTitle: 'title', defaultColumns: ['number', 'title', 'paper'], group: 'Syllabus' },
  access: { read: () => true, create: isStaff, update: isStaff, delete: isAdmin },
  fields: [
    { name: 'paper', type: 'relationship', relationTo: 'papers', required: true },
    { name: 'number', type: 'number', required: true, min: 1 },
    { name: 'title', type: 'text', required: true },
    slugField({ isUnique: false }),
  ],
}
