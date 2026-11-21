import type { Block } from 'payload'

import { validateHref } from '@/lib/href'

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    { name: 'kicker', type: 'text', admin: { description: 'Chhoti line heading ke upar, e.g. "Paper 2 · Unit 4"' } },
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'textarea' },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'plain',
      options: [
        { label: 'Plain (inner pages)', value: 'plain' },
        { label: 'Masthead (big, floating cards)', value: 'masthead' },
      ],
    },
    {
      name: 'actions',
      type: 'array',
      maxRows: 2,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true, validate: validateHref },
      ],
    },
  ],
}
