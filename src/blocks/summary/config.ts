import type { Block } from 'payload'

export const SummaryBlock: Block = {
  slug: 'summary',
  interfaceName: 'SummaryBlock',
  labels: { singular: 'Summary (bullets)', plural: 'Summaries' },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'Khabar kya hai' },
    {
      name: 'points',
      type: 'array',
      minRows: 1,
      maxRows: 8,
      required: true,
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
  ],
}
