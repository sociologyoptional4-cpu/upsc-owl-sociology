import type { CollectionConfig } from 'payload'

import { isAdmin } from '@/access/roles'

export const Members: CollectionConfig = {
  slug: 'members',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'phone', 'status', 'lastLoginAt'],
    group: 'Admin',
  },
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true, unique: true, index: true },
    { name: 'phone', type: 'text', index: true },
    {
      name: 'passwordHash',
      type: 'text',
      required: true,
      admin: { hidden: true },
      access: { read: () => false },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'active',
      index: true,
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Suspended', value: 'suspended' },
      ],
    },
    { name: 'lastLoginAt', type: 'date' },
  ],
}
