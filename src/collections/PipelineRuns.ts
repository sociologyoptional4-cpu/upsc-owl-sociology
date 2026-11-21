import type { CollectionConfig } from 'payload'

import { hasRole } from '@/access/roles'

export const PipelineRuns: CollectionConfig = {
  slug: 'pipeline-runs',
  admin: { useAsTitle: 'startedAt', defaultColumns: ['startedAt', 'status', 'costUsd'], group: 'Automation' },
  access: {
    read: ({ req }) => hasRole(req.user as { role?: 'admin' | 'editor' | 'ai-bot' } | null, 'admin', 'editor'),
    create: ({ req }) => hasRole(req.user as { role?: 'admin' | 'editor' | 'ai-bot' } | null, 'ai-bot', 'admin'),
    update: ({ req }) => hasRole(req.user as { role?: 'admin' | 'editor' | 'ai-bot' } | null, 'ai-bot', 'admin'),
    delete: ({ req }) => hasRole(req.user as { role?: 'admin' | 'editor' | 'ai-bot' } | null, 'admin'),
  },
  fields: [
    { name: 'startedAt', type: 'date', required: true, index: true },
    { name: 'finishedAt', type: 'date' },
    { name: 'status', type: 'select', required: true, options: ['running', 'ok', 'partial', 'failed'] },
    { name: 'counts', type: 'group', fields: ['fetched', 'deduped', 'scored', 'kept', 'written', 'failedValidation', 'published'].map((name) => ({ name, type: 'number' as const, defaultValue: 0 })) },
    { name: 'costUsd', type: 'number', min: 0, defaultValue: 0 },
    { name: 'tokens', type: 'group', fields: ['input', 'output', 'cached'].map((name) => ({ name, type: 'number' as const, defaultValue: 0 })) },
    { name: 'errors', type: 'array', fields: [{ name: 'stage', type: 'text', required: true }, { name: 'message', type: 'textarea', required: true }] },
    { name: 'promptVersion', type: 'text' },
    { name: 'kind', type: 'select', options: ['daily-ca', 'notes', 'digest', 'quiz', 'blog'], admin: { description: 'Which job wrote this ledger row (blog = organizer / beautifier).' } },
  ],
}
