import type { CollectionConfig } from 'payload'

import { isAdmin, isStaff } from '@/access/roles'
import { slugField } from '@/fields/slug'
import { revalidateAfterChange, revalidateAfterDelete } from '@/hooks/payload/revalidate'

export const Units: CollectionConfig = {
  slug: 'units',
  admin: { useAsTitle: 'title', defaultColumns: ['number', 'title', 'paper'], group: 'Syllabus' },
  access: { read: () => true, create: isStaff, update: isStaff, delete: isAdmin },
  hooks: { afterChange: [revalidateAfterChange(() => ['/syllabus'])], afterDelete: [revalidateAfterDelete(() => ['/syllabus'])] },
  fields: [
    { name: 'paper', type: 'relationship', relationTo: 'papers', required: true },
    { name: 'number', type: 'number', required: true, min: 1 },
    { name: 'title', type: 'text', required: true },
    { name: 'order', type: 'number', required: true, defaultValue: 99, index: true },
    { name: 'section', type: 'text' },
    slugField({ isUnique: false }),
  ],
}
