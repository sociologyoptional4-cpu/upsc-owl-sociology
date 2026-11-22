import fs from 'node:fs'
import path from 'node:path'

import { unit01Notebook } from '@/data/notes/unit-01'

import { P1_POSTER_SPECS } from './poster-specs-p1'
import { P2A_POSTER_SPECS } from './poster-specs-p2a'
import { P2B_POSTER_SPECS } from './poster-specs-p2b'

const ASSETS_MD = path.resolve(process.cwd(), 'ASSETS.md')
const existing = fs.readFileSync(ASSETS_MD, 'utf8')
const rowsToAdd: string[] = []

const wave1Posters: [string, string][] = [
  ['Unit 2 infographic: Sociology as a Science Spectrum', 'p1-u02-01-science-spectrum.webp'],
  ['Unit 2 infographic: Fact, Value & Objectivity', 'p1-u02-02-objectivity-methods.webp'],
  ['Unit 3 infographic: Research Methods & Sampling', 'p1-u03-01-quant-qual-sampling.webp'],
  ['Unit 3 infographic: Variables, Hypothesis & Validity Bullseye', 'p1-u03-02-variables-validity-bullseye.webp'],
  ['Unit 4 infographic: Three Classical Pioneers (Marx, Durkheim, Weber)', 'p1-u04-01-marx-durkheim-weber.webp'],
  ['Unit 4 infographic: Parsons, Merton & G.H. Mead', 'p1-u04-02-parsons-merton-mead.webp'],
  ['Unit 5 infographic: Theories of Social Stratification', 'p1-u05-01-stratification-theories.webp'],
  ['Unit 5 infographic: Mobility, Dimensions & Social Exclusion', 'p1-u05-02-mobility-dimensions-exclusion.webp'],
]

for (const [label, file] of wave1Posters) {
  if (!existing.includes(file)) {
    rowsToAdd.push(`| ${label} | /assets/infographics/${file} | — | Own | UPSC OWL Sociology | Generated & converted to WebP |`)
  }
}

for (const spec of [...P1_POSTER_SPECS, ...P2A_POSTER_SPECS, ...P2B_POSTER_SPECS]) {
  if (!existing.includes(spec.file)) {
    const unitNum = spec.footer.split('•')[1]?.trim() ?? spec.paper
    rowsToAdd.push(
      `| ${spec.paper} ${unitNum} infographic: ${spec.title} | /assets/infographics/${spec.file} | — | Own | UPSC OWL Sociology | SVG rendered to WebP |`,
    )
  }
}

if (rowsToAdd.length > 0 && unit01Notebook) {
  const next = existing.trimEnd() + '\n' + rowsToAdd.join('\n') + '\n'
  fs.writeFileSync(ASSETS_MD, next)
  console.log(`Added ${rowsToAdd.length} poster rows to ASSETS.md.`)
} else {
  console.log('ASSETS.md already up to date.')
}