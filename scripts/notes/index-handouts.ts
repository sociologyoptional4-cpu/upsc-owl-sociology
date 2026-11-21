/**
 * Write data/handouts-index.json = [{ topicSlug, pages }] (page NUMBERS only; D15).
 * The handouts cover Paper 1 only and are not in syllabus order, so ranges are mapped by hand
 * from a survey of page headings. Topics not listed get no background (the writer uses its own knowledge + PYQs).
 * Run: npx tsx scripts/notes/index-handouts.ts
 */
import fs from 'node:fs'
import path from 'node:path'

const OUT = path.resolve(process.cwd(), 'data/handouts-index.json')

const RANGES: Record<string, [number, number]> = {
  'modernity-and-emergence-of-sociology': [6, 21],
  'scope-and-other-social-sciences': [22, 29],
  'sociology-and-common-sense': [30, 31],
  'science-and-scientific-method': [32, 37],
  'theoretical-strands-of-methodology': [38, 41],
  'positivism-and-its-critique': [40, 44],
  'fact-value-and-objectivity': [44, 47],
  'non-positivist-methodologies': [48, 53],
  'karl-marx-historical-materialism': [54, 83],
  'emile-durkheim-social-fact-suicide': [84, 109],
  'max-weber-social-action-bureaucracy': [110, 137],
  'talcott-parsons-social-system': [138, 152],
  'mead-self-and-identity': [153, 161],
  'robert-merton-functions-deviance': [162, 176],
  'sociological-theories-of-religion': [177, 187],
  'types-of-religious-practices': [186, 191],
  'religion-in-modern-society': [192, 203],
  'equality-inequality-hierarchy-exclusion': [204, 208],
  'theories-of-stratification': [205, 213],
  'dimensions-of-stratification': [214, 239],
  'social-mobility': [240, 245],
  'sociological-theories-of-power': [246, 256],
  'power-elite-bureaucracy-pressure-groups': [256, 262],
  'nation-state-citizenship-democracy': [262, 275],
  'protest-social-movements-revolution': [274, 281],
  'qualitative-and-quantitative-methods': [282, 299],
  'techniques-of-data-collection': [286, 300],
  'variables-sampling-hypothesis-reliability-validity': [300, 314],
}

const index = Object.entries(RANGES).map(([topicSlug, [from, to]]) => ({
  topicSlug,
  pages: Array.from({ length: to - from + 1 }, (_, i) => from + i),
}))
fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify(index, null, 2) + '\n')
console.log(`indexed ${index.length} topics → ${OUT}`)
