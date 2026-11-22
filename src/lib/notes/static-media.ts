import thinkerAssets from '@/data/thinker-assets.json'

const THINKER_PORTRAIT_FILES = new Set(
  thinkerAssets
    .filter((entry) => entry.status === 'ok' && typeof entry.file === 'string')
    .map((entry) => entry.file!.split('/').pop()!)
    .filter(Boolean),
)

const INFOGRAPHIC_FILES = new Set<string>([
  'p1-u02-01-science-spectrum.webp',
  'p1-u02-02-objectivity-methods.webp',
  'p1-u03-01-quant-qual-sampling.webp',
  'p1-u03-02-variables-validity-bullseye.webp',
  'p1-u04-01-marx-durkheim-weber.webp',
  'p1-u04-02-parsons-merton-mead.webp',
  'p1-u05-01-stratification-theories.webp',
  'p1-u05-02-mobility-dimensions-exclusion.webp',
  'p1-u06-01-work-organization.webp',
  'p1-u06-02-formal-informal-labour.webp',
  'p1-u07-01-power-theories-elites.webp',
  'p1-u07-02-state-citizenship-movements.webp',
  'p1-u08-01-religion-theories-types.webp',
  'p1-u08-02-religion-modern-science.webp',
  'p1-u09-01-family-lineage-patriarchy.webp',
  'p1-u09-02-contemporary-kinship-trends.webp',
  'p1-u1-01-sociological-imagination.webp',
  'p1-u1-02-emergence.webp',
  'p1-u1-03-social-sciences.webp',
  'p1-u1-04-pyq-trends.webp',
  'p1-u10-01-social-change-theories.webp',
  'p1-u10-02-agents-education-tech.webp',
  'p2-u01-01-indian-perspectives-grid.webp',
  'p2-u01-02-book-field-synthesis.webp',
  'p2-u02-01-colonial-modernization-chain.webp',
  'p2-u02-02-reform-protest-timeline.webp',
  'p2-u03-01-village-studies-debate.webp',
  'p2-u03-02-land-tenure-reforms.webp',
  'p2-u04-01-caste-thinkers-matrix.webp',
  'p2-u04-02-untouchability-annihilation.webp',
  'p2-u05-01-tribes-spread-policies.webp',
  'p2-u05-02-tribal-integration-panchsheel.webp',
  'p2-u06-01-indian-class-pyramid.webp',
  'p2-u06-02-caste-class-nexus-labour.webp',
  'p2-u07-01-kinship-zones-karve.webp',
  'p2-u07-02-indian-family-patriarchy.webp',
  'p2-u08-01-religious-communities-web.webp',
  'p2-u08-02-religious-minorities-matrix.webp',
  'p2-u09-01-planning-constitution-law.webp',
  'p2-u09-02-education-equality-india.webp',
  'p2-u10-01-rural-schemes-green-rev.webp',
  'p2-u10-02-agrarian-modes-bondage.webp',
  'p2-u11-01-urbanization-industry-flow.webp',
  'p2-u11-02-slums-informal-child-labour.webp',
  'p2-u12-01-politics-caste-federalism.webp',
  'p2-u12-02-secularism-communalism-india.webp',
  'p2-u13-01-indian-social-movements.webp',
  'p2-u13-02-ecology-identity-movements.webp',
  'p2-u14-01-demographic-transition-policy.webp',
  'p2-u14-02-emerging-population-issues.webp',
  'p2-u15-01-development-displacement-sustainability.webp',
  'p2-u15-02-social-transformation-challenges.webp',
])

const BLOG_ASSET_FILES = new Set<string>([
  'luwai-2590-1795191087442.png',
  'luwai-7198-1795191064.png',
  'image.png',
  'new-mindmap-mwra494w.png',
  'new-infographic-mwra49sh.png',
])

/** Maps repo-shipped infographics, thinker portraits, and synced blog assets to static Vercel CDN `/assets/...` paths. */
export function resolveStaticMediaUrl(filename?: string | null): string | null {
  if (!filename) return null
  if (INFOGRAPHIC_FILES.has(filename)) return `/assets/infographics/${filename}`
  if (THINKER_PORTRAIT_FILES.has(filename)) return `/assets/thinkers/${filename}`
  if (BLOG_ASSET_FILES.has(filename)) return `/assets/blog/${filename}`
  return null
}
