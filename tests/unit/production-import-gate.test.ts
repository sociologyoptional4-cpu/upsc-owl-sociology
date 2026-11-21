import { describe, expect, it } from 'vitest'
import { shouldRunProductionImport, type ProductionImportEnvironment } from '../../scripts/notes/production-import-gate'

const validEnvironment: ProductionImportEnvironment = {
  VERCEL: '1',
  VERCEL_ENV: 'production',
  VERCEL_GIT_COMMIT_SHA: 'commit-123',
  N1_IMPORT_COMMIT_SHA: 'commit-123',
  N1_IMPORT_ON_BUILD: '1',
}

describe('production content import gate', () => {
  it('runs only for an explicitly enabled production build at the exact configured commit', () => {
    expect(shouldRunProductionImport(validEnvironment)).toBe(true)
  })

  it.each([
    ['not running on Vercel', { VERCEL: undefined }],
    ['Vercel marker is not exact', { VERCEL: 'true' }],
    ['not a production deployment', { VERCEL_ENV: 'preview' }],
    ['explicit flag is absent', { N1_IMPORT_ON_BUILD: undefined }],
    ['explicit flag is not exact', { N1_IMPORT_ON_BUILD: 'true' }],
    ['configured commit is absent', { N1_IMPORT_COMMIT_SHA: undefined }],
    ['build commit is absent', { VERCEL_GIT_COMMIT_SHA: undefined }],
    ['build commit does not exactly match', { VERCEL_GIT_COMMIT_SHA: 'commit-124' }],
  ])('skips when %s', (_reason, override) => {
    expect(shouldRunProductionImport({ ...validEnvironment, ...override })).toBe(false)
  })
})
