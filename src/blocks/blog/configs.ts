import type { Block } from 'payload'

/** Blog-only Lexical blocks. Kept separate from LAYOUT_BLOCKS (page builder) on purpose. */

export const BLOG_COLOR_STATE = {
  color: {
    red: { label: 'Laal', css: { color: 'var(--saffron-deep)' } },
    blue: { label: 'Neela', css: { color: 'var(--paper-1)' } },
    green: { label: 'Hara', css: { color: 'var(--paper-2)' } },
    plum: { label: 'Jamuni', css: { color: 'var(--thinker)' } },
  },
  highlight: {
    yellow: { label: 'Peela marker', css: { 'background-color': 'var(--pastel-yellow)' } },
    pink: { label: 'Gulabi marker', css: { 'background-color': 'var(--pastel-pink)' } },
    mint: { label: 'Mint marker', css: { 'background-color': 'var(--pastel-mint)' } },
    sky: { label: 'Aasmani marker', css: { 'background-color': 'var(--pastel-lavender)' } },
  },
} as const

const wordCount = (text: string): number => text.trim().split(/\s+/).filter(Boolean).length

export const blogCallout: Block = {
  slug: 'blogCallout',
  labels: { singular: 'Callout', plural: 'Callouts' },
  fields: [
    {
      name: 'variant', type: 'select', required: true, defaultValue: 'tip',
      options: [
        { label: 'Tip', value: 'tip' },
        { label: 'Yaad rakho', value: 'yaadRakho' },
        { label: 'Galti mat karo', value: 'galtiMat' },
        { label: 'UPSC angle', value: 'upscAngle' },
      ],
    },
    { name: 'title', type: 'text' },
    { name: 'body', type: 'textarea', required: true, maxLength: 800 },
  ],
}

export const thinkerQuote: Block = {
  slug: 'thinkerQuote',
  labels: { singular: 'Thinker quote', plural: 'Thinker quotes' },
  fields: [
    { name: 'thinker', type: 'relationship', relationTo: 'thinkers', required: true },
    {
      name: 'quote', type: 'textarea', required: true,
      validate: (value: string | null | undefined) => (value && wordCount(value) > 25 ? 'Quote 25 words se chhota rakho (copyright + punch).' : true),
    },
    { name: 'context', type: 'text' },
  ],
}

export const compare: Block = {
  slug: 'compare',
  labels: { singular: 'Compare table', plural: 'Compare tables' },
  fields: [
    { name: 'leftTitle', type: 'text', required: true },
    { name: 'rightTitle', type: 'text', required: true },
    {
      name: 'rows', type: 'array', required: true, minRows: 1, maxRows: 10,
      fields: [
        { name: 'aspect', type: 'text', required: true },
        { name: 'left', type: 'textarea', required: true },
        { name: 'right', type: 'textarea', required: true },
      ],
    },
  ],
}

export const timeline: Block = {
  slug: 'timeline',
  labels: { singular: 'Timeline', plural: 'Timelines' },
  fields: [
    {
      name: 'items', type: 'array', required: true, minRows: 1, maxRows: 12,
      fields: [
        { name: 'year', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea' },
      ],
    },
  ],
}

export const flow: Block = {
  slug: 'flow',
  labels: { singular: 'Flow / concept map', plural: 'Flows' },
  fields: [
    { name: 'direction', type: 'select', defaultValue: 'horizontal', options: ['horizontal', 'vertical'] },
    {
      name: 'steps', type: 'array', required: true, minRows: 2, maxRows: 8,
      fields: [{ name: 'label', type: 'text', required: true }, { name: 'text', type: 'text' }],
    },
  ],
}

export const keyTerm: Block = {
  slug: 'keyTerm',
  labels: { singular: 'Key term', plural: 'Key terms' },
  fields: [
    { name: 'term', type: 'text', required: true },
    { name: 'meaning', type: 'textarea', required: true, maxLength: 500 },
    { name: 'thinker', type: 'relationship', relationTo: 'thinkers' },
  ],
}

export const pyqEmbed: Block = {
  slug: 'pyqEmbed',
  labels: { singular: 'PYQ embed', plural: 'PYQ embeds' },
  fields: [{ name: 'pyqs', type: 'relationship', relationTo: 'pyqs', hasMany: true, required: true, maxRows: 10 }],
}

export const answerBox: Block = {
  slug: 'answerBox',
  labels: { singular: 'Answer box', plural: 'Answer boxes' },
  fields: [
    { name: 'intro', type: 'textarea', required: true },
    { name: 'points', type: 'array', required: true, minRows: 1, maxRows: 8, fields: [{ name: 'text', type: 'textarea', required: true }] },
    { name: 'conclusion', type: 'textarea', required: true },
  ],
}

export const figure: Block = {
  slug: 'figure',
  labels: { singular: 'Figure', plural: 'Figures' },
  fields: [
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'caption', type: 'text' },
    { name: 'credit', type: 'text' },
  ],
}

export const youtube: Block = {
  slug: 'youtube',
  labels: { singular: 'YouTube', plural: 'YouTube videos' },
  fields: [
    {
      name: 'videoId', type: 'text', required: true,
      validate: (value: string | null | undefined) => (value && /^[\w-]{11}$/.test(value) ? true : 'YouTube video ID 11 characters ka hota hai (URL nahi).'),
    },
    { name: 'title', type: 'text', required: true },
  ],
}

export const infographic: Block = {
  slug: 'infographic',
  labels: { singular: 'Infographic', plural: 'Infographics' },
  fields: [
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'title', type: 'text', required: true, maxLength: 120 },
    { name: 'caption', type: 'text' },
    { name: 'credit', type: 'text' },
    { name: 'downloadable', type: 'checkbox', defaultValue: true, label: 'Reader download kar sake' },
  ],
}

export const gallery: Block = {
  slug: 'gallery',
  labels: { singular: 'Gallery', plural: 'Galleries' },
  fields: [
    {
      name: 'images', type: 'array', required: true, minRows: 2, maxRows: 12,
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'caption', type: 'text' },
      ],
    },
    { name: 'columns', type: 'select', defaultValue: '2', options: [{ label: '2 columns', value: '2' }, { label: '3 columns (desktop)', value: '3' }] },
  ],
}

export const termChip: Block = {
  slug: 'termChip',
  labels: { singular: 'Term chip', plural: 'Term chips' },
  fields: [
    { name: 'term', type: 'text', required: true },
    { name: 'topic', type: 'relationship', relationTo: 'topics' },
  ],
}

export const BLOG_BLOCKS: Block[] = [blogCallout, thinkerQuote, compare, timeline, flow, keyTerm, pyqEmbed, answerBox, figure, youtube, infographic, gallery]
export const BLOG_INLINE_BLOCKS: Block[] = [termChip]
