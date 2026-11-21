import type { Block } from 'payload'

export const KeyTermsTableBlock: Block = {
  slug: 'keyTerms',
  interfaceName: 'KeyTermsBlock',
  labels: { singular: 'Key terms table', plural: 'Key terms tables' },
  fields: [
    { name: 'caption', type: 'text', defaultValue: 'Key terms' },
    {
      name: 'rows',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        { name: 'term', type: 'text', required: true },
        { name: 'meaning', type: 'textarea', required: true },
        { name: 'thinker', type: 'text', admin: { description: 'Optional: kis thinker ka concept' } },
      ],
    },
  ],
}
