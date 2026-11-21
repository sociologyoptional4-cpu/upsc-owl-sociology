export type ProductionImportEnvironment = Readonly<Record<string, string | undefined>>

export function shouldRunProductionImport(env: ProductionImportEnvironment): boolean {
  return env.VERCEL === '1'
    && env.VERCEL_ENV === 'production'
    && env.N1_IMPORT_ON_BUILD === '1'
    && typeof env.N1_IMPORT_COMMIT_SHA === 'string'
    && env.N1_IMPORT_COMMIT_SHA.length > 0
    && env.VERCEL_GIT_COMMIT_SHA === env.N1_IMPORT_COMMIT_SHA
}
