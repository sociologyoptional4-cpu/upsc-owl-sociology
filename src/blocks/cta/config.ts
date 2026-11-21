import type { Block } from 'payload'

import { validateHref } from '@/lib/href'

export const CtaBlock: Block = {
  slug: 'cta',
  interfaceName: 'CtaBlock',
  labels: { singular: 'Call to action', plural: 'Calls to action' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'body', type: 'textarea' },
    { name: 'label', type: 'text', required: true },
    { name: 'href', type: 'text', required: true, validate: validateHref },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'ink',
      options: [
        { label: 'Ink (dark band)', value: 'ink' },
        { label: 'Telegram', value: 'telegram' },
      ],
    },
  ],
}
