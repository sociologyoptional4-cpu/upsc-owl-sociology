import type { CollectionConfig } from 'payload'

import { isAdmin, isStaff } from '@/access/roles'
import { validateHref } from '@/lib/href'

export const Sources: CollectionConfig = {
  slug: 'sources',
  admin: { useAsTitle: 'name', group: 'Automation' },
  access: { read: isStaff, create: isStaff, update: isStaff, delete: isAdmin },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'feedUrl', type: 'text', required: true, validate: validateHref },
    { name: 'kind', type: 'select', required: true, options: ['rss', 'official', 'manual'] },
    { name: 'trust', type: 'number', required: true, min: 1, max: 3, defaultValue: 2 },
    { name: 'active', type: 'checkbox', defaultValue: true, index: true },
    { name: 'lastFetchedAt', type: 'date' },
    { name: 'lastError', type: 'textarea' },
  ],
}
