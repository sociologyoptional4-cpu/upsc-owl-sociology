import type { Block } from 'payload'

export const PyqListBlock: Block = {
  slug: 'pyqList',
  interfaceName: 'PyqListBlock',
  labels: { singular: 'PYQ list', plural: 'PYQ lists' },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'Previous Year Questions' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        { name: 'year', type: 'number', required: true, min: 1990, max: 2100 },
        { name: 'marks', type: 'number', min: 0, max: 60 },
        { name: 'question', type: 'textarea', required: true },
      ],
    },
  ],
}
