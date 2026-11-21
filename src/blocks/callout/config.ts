import type { Block } from 'payload'

export const CALLOUT_TONES = ['tip', 'warning', 'pyq', 'ai'] as const

export const CalloutBlock: Block = {
  slug: 'callout',
  interfaceName: 'CalloutBlock',
  labels: { singular: 'Callout', plural: 'Callouts' },
  fields: [
    {
      name: 'tone',
      type: 'select',
      defaultValue: 'tip',
      required: true,
      options: [
        { label: 'Tip', value: 'tip' },
        { label: 'Warning', value: 'warning' },
        { label: 'PYQ alert', value: 'pyq' },
        { label: 'AI note', value: 'ai' },
      ],
    },
    { name: 'title', type: 'text' },
    { name: 'body', type: 'textarea', required: true },
  ],
}
