import type { CollectionConfig } from 'payload'

import { isAdmin, isStaff } from '@/access/roles'
import { slugField } from '@/fields/slug'
import { revalidateAfterDelete, revalidateAlwaysAfterChange, unitPaths } from '@/hooks/payload/revalidate'

export const Units: CollectionConfig = {
  slug: 'units',
  admin: { useAsTitle: 'title', defaultColumns: ['number', 'title', 'paper'], group: 'Syllabus' },
  access: { read: () => true, create: isStaff, update: isStaff, delete: isAdmin },
  hooks: { afterChange: [revalidateAlwaysAfterChange(unitPaths)], afterDelete: [revalidateAfterDelete(unitPaths)] },
  fields: [
    { name: 'paper', type: 'relationship', relationTo: 'papers', required: true },
    { name: 'number', type: 'number', required: true, min: 1 },
    { name: 'title', type: 'text', required: true },
    { name: 'order', type: 'number', required: true, defaultValue: 99, index: true },
    { name: 'section', type: 'text' },
    slugField({ isUnique: false }),
    { name: 'overview', type: 'textarea', admin: { description: 'Unit overview & UPSC weightage (English default)' } },
    { name: 'overviewHinglish', type: 'textarea', admin: { description: 'Unit overview in Hinglish (toggle option)' } },
    {
      name: 'studySequence',
      type: 'array',
      maxRows: 8,
      fields: [
        { name: 'step', type: 'text', required: true },
        { name: 'detail', type: 'text' },
      ],
    },
    { name: 'studySequenceHinglish', type: 'json' },
    { name: 'mindMap', type: 'json' },
    { name: 'mindMapHinglish', type: 'json' },
    {
      name: 'infographics',
      type: 'array',
      maxRows: 8,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'titleHinglish', type: 'text' },
        { name: 'caption', type: 'textarea' },
        { name: 'captionHinglish', type: 'textarea' },
        { name: 'badge', type: 'text' },
        { name: 'badgeHinglish', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'staticSrc', type: 'text' },
      ],
    },
  ],
}
