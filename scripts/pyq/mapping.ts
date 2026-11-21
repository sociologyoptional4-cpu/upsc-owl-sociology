/**
 * Map a PYQ (unit number + question text) to a syllabus topic slug of Paper 1.
 * Rules are ordered most-specific first; the last rule of each unit is its fallback.
 * Unit 4: the source file mislabels every subtopic as "G H Mead", so we map by thinker name.
 */
type Rule = { slug: string; keywords: string[] }

const RULES: Record<number, Rule[]> = {
  1: [
    { slug: 'sociology-and-common-sense', keywords: ['common sense', 'commonsense', 'common knowledge', 'everyday'] },
    { slug: 'modernity-and-emergence-of-sociology', keywords: ['modern', 'enlightenment', 'revolution', 'emergence', 'industrial', 'renaissance', 'europe', 'comte', 'origin'] },
    { slug: 'scope-and-other-social-sciences', keywords: [] },
  ],
  2: [
    { slug: 'positivism-and-its-critique', keywords: ['positiv', 'social fact', 'comte'] },
    { slug: 'fact-value-and-objectivity', keywords: ['value', 'objectiv', 'neutral', 'bias', 'subjectiv'] },
    { slug: 'non-positivist-methodologies', keywords: ['interpret', 'phenomenolog', 'ethnomethod', 'verstehen', 'interaction', 'meaning'] },
    { slug: 'theoretical-strands-of-methodology', keywords: ['methodolog', 'strand', 'triangulation', 'mixed'] },
    { slug: 'science-and-scientific-method', keywords: [] },
  ],
  3: [
    { slug: 'variables-sampling-hypothesis-reliability-validity', keywords: ['variable', 'sampl', 'hypothes', 'reliab', 'valid'] },
    { slug: 'techniques-of-data-collection', keywords: ['interview', 'questionnaire', 'observation', 'survey', 'case study', 'data collection', 'schedule', 'focus group', 'ethnograph'] },
    { slug: 'qualitative-and-quantitative-methods', keywords: [] },
  ],
  4: [
    { slug: 'robert-merton-functions-deviance', keywords: ['merton', 'latent', 'manifest', 'reference group', 'anomie and deviance', 'deviance'] },
    { slug: 'talcott-parsons-social-system', keywords: ['parsons', 'pattern variable', 'social system', 'agil'] },
    { slug: 'mead-self-and-identity', keywords: ['mead', ' self', 'identity', ' i and me', "'i' and 'me'"] },
    { slug: 'max-weber-social-action-bureaucracy', keywords: ['weber', 'ideal type', 'bureaucra', 'protestant', 'authority', 'social action', 'verstehen'] },
    { slug: 'karl-marx-historical-materialism', keywords: ['marx', 'alienation', 'class struggle', 'mode of production', 'historical materialism', 'surplus'] },
    { slug: 'emile-durkheim-social-fact-suicide', keywords: ['durkheim', 'suicide', 'division of labour', 'solidarity', 'social fact', 'sacred', 'anomie'] },
  ],
  5: [
    { slug: 'social-mobility', keywords: ['mobility', 'open and closed', 'open system', 'closed system'] },
    { slug: 'theories-of-stratification', keywords: ['theor', 'functionalist', 'davis', 'moore', 'tumin', 'marxist', 'weberian'] },
    { slug: 'dimensions-of-stratification', keywords: ['gender', 'race', 'ethnic', 'status group', 'class'] },
    { slug: 'equality-inequality-hierarchy-exclusion', keywords: [] },
  ],
  6: [
    { slug: 'formal-and-informal-organisation-of-work', keywords: ['formal', 'informal', 'organisation of work', 'organization of work'] },
    { slug: 'labour-and-society', keywords: ['labour', 'labor', 'gig', 'trade union', 'worker'] },
    { slug: 'social-organisation-of-work', keywords: [] },
  ],
  7: [
    { slug: 'protest-social-movements-revolution', keywords: ['movement', 'protest', 'revolution', 'collective action', 'agitation'] },
    { slug: 'power-elite-bureaucracy-pressure-groups', keywords: ['elite', 'pressure group', 'political part', 'bureaucra'] },
    { slug: 'nation-state-citizenship-democracy', keywords: ['nation', 'state', 'citizen', 'democra', 'civil society', 'ideolog'] },
    { slug: 'sociological-theories-of-power', keywords: [] },
  ],
  8: [
    { slug: 'religion-in-modern-society', keywords: ['secular', 'fundamental', 'reviv', 'science', 'modern'] },
    { slug: 'types-of-religious-practices', keywords: ['animism', 'monism', 'pluralism', 'sect', 'cult'] },
    { slug: 'sociological-theories-of-religion', keywords: [] },
  ],
  9: [
    { slug: 'patriarchy-and-sexual-division-of-labour', keywords: ['patriarch', 'sexual division', 'gender'] },
    { slug: 'lineage-and-descent', keywords: ['lineage', 'descent', 'clan'] },
    { slug: 'contemporary-trends-in-kinship', keywords: ['contemporary', 'trend', 'live-in', 'same-sex', 'single'] },
    { slug: 'types-and-forms-of-family', keywords: ['type', 'form', 'nuclear', 'joint', 'extended'] },
    { slug: 'family-household-marriage', keywords: [] },
  ],
  10: [
    { slug: 'development-and-dependency', keywords: ['dependency', 'development', 'world system', 'underdevelop'] },
    { slug: 'education-and-social-change', keywords: ['education', 'school'] },
    { slug: 'science-technology-and-social-change', keywords: ['technolog', 'science', 'digital', 'internet', 'artificial intelligence'] },
    { slug: 'agents-of-social-change', keywords: ['agent', 'agency'] },
    { slug: 'theories-of-social-change', keywords: [] },
  ],
}

/** Returns the topic slug for a Paper 1 PYQ, or null for an unknown unit. */
export function mapPyqToTopic(unit: number, question: string): string | null {
  const rules = RULES[unit]
  if (!rules) return null
  const text = ` ${question.toLowerCase()} `
  const hit = rules.find((rule) => rule.keywords.some((k) => text.includes(k)))
  return (hit ?? rules[rules.length - 1]).slug
}

/** Batch-1 keyword map stays authoritative for units 1-2 (same rules as notes-batch-1). */
export const UNITS_WITH_RULES = Object.keys(RULES).map(Number)
