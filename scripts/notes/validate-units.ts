import fs from 'node:fs'
import path from 'node:path'

import { SYLLABUS } from '../../scripts/notes/syllabus'
import { ALL_UNIT_NOTEBOOKS } from '@/data/notes'
import { applyNotebookMarkup } from '@/lib/notes/notebook-builder'
import { mindMapDataSchema, type NotebookSection, unitNotebookSpecSchema } from '@/lib/notes/notebook-types'
function buildSourceGramSet(source: string, minRun = 12): Set<string> {
  const src = source
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
  const grams = new Set<string>()
  for (let i = 0; i + minRun <= src.length; i += 1) {
    grams.add(src.slice(i, i + minRun).join(' '))
  }
  return grams
}

function findSharedRun(output: string, grams: Set<string>, minRun = 12): string | null {
  if (grams.size === 0) return null
  const out = output
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
  for (let i = 0; i + minRun <= out.length; i += 1) {
    const candidate = out.slice(i, i + minRun).join(' ')
    if (grams.has(candidate)) return candidate
  }
  return null
}

const VALID_THINKER_SLUGS = new Set([
  'br-ambedkar',
  'emile-durkheim',
  'karl-marx',
  'max-weber',
  'mn-srinivas',
  'robert-k-merton',
  'vilfredo-pareto',
  'yogendra-singh',
])

const PRANAY_JSONL = '/Volumes/ssd t7/drives/sociology/Pranay_Sir_Sociology_Class_Notes.jsonl'
const NISHANT_JSONL = '/Volumes/ssd t7/drives/sociology/_Handouts_Sociology2024byNishantSir_LevelupIAS_KING_R_QUEEN_P.jsonl'

function loadCombinedSourceText(): string {
  const parts: string[] = []
  for (const file of [PRANAY_JSONL, NISHANT_JSONL]) {
    if (!fs.existsSync(file)) continue
    for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
      if (!line.trim()) continue
      const row = JSON.parse(line) as { page?: number; text?: string }
      if (file === PRANAY_JSONL && (row.page ?? 0) < 75) continue
      if (row.text) parts.push(row.text)
    }
  }
  return parts.join(' ')
}

function collectSectionText(sections: NotebookSection[]): string {
  const chunks: string[] = []
  for (const s of sections) {
    if (s.kind === 'md') chunks.push(s.body)
    else if (s.kind === 'callout') chunks.push(s.title ?? '', s.body)
    else if (s.kind === 'thinkerQuote') chunks.push(s.quote, s.context ?? '')
    else if (s.kind === 'compare') chunks.push(...s.rows.flatMap((r) => [r.aspect, r.left, r.right]))
    else if (s.kind === 'timeline') chunks.push(...s.items.flatMap((i) => [i.title, i.text ?? '']))
    else if (s.kind === 'flow') chunks.push(...s.steps.flatMap((st) => [st.label, st.text ?? '']))
    else if (s.kind === 'keyTerm') chunks.push(s.term, s.meaning)
    else if (s.kind === 'answerBox') chunks.push(s.intro, ...s.points, s.conclusion)
  }
  return chunks.join(' ')
}

function checkSections(topicSlug: string, label: string, sections: NotebookSection[], errors: string[]): void {
  for (const s of sections) {
    if (s.kind === 'thinkerQuote') {
      if (!VALID_THINKER_SLUGS.has(s.thinkerSlug)) errors.push(`${topicSlug} (${label}): invalid quote thinkerSlug "${s.thinkerSlug}"`)
      const words = s.quote.trim().split(/\s+/).filter(Boolean).length
      if (words > 25) errors.push(`${topicSlug} (${label}): thinkerQuote has ${words} words (> 25)`)
    }
    if (s.kind === 'keyTerm' && s.thinkerSlug && !VALID_THINKER_SLUGS.has(s.thinkerSlug)) {
      errors.push(`${topicSlug} (${label}): invalid keyTerm thinkerSlug "${s.thinkerSlug}"`)
    }
    if (s.kind === 'figure') {
      const p = path.resolve(process.cwd(), 'public/assets/infographics', s.assetFile)
      if (!fs.existsSync(p)) errors.push(`${topicSlug} (${label}): missing figure asset "${s.assetFile}"`)
    }
    if (s.kind === 'md') {
      const marked = applyNotebookMarkup([{ type: 'text', text: s.body }])
      for (const n of marked) {
        if ((n.text ?? '').includes('[[') || (n.text ?? '').includes('==')) {
          errors.push(`${topicSlug} (${label}): unconverted markup in "${(n.text ?? '').slice(0, 80)}"`)
        }
      }
    }
  }
}

function checkFileLineCounts(unitDirName: string, errors: string[]): void {
  const dir = path.resolve(process.cwd(), 'src/data/notes', unitDirName)
  if (!fs.existsSync(dir)) return
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith('.ts')) continue
    const lines = fs.readFileSync(path.join(dir, name), 'utf8').split('\n').length
    if (lines >= 400) errors.push(`${unitDirName}/${name}: ${lines} lines (must be < 400)`)
  }
}

function main(): void {
  const errors: string[] = []
  const seenAlts = new Set<string>()
  const skipCopyGuard = process.argv.includes('--skip-copy-guard')
  const sourceGrams = skipCopyGuard ? new Set<string>() : buildSourceGramSet(loadCombinedSourceText())
  const unitLookup = new Map(SYLLABUS.flatMap((p) => p.units.map((u) => [`${p.code}:${u.slug}`, u])))

  for (const spec of ALL_UNIT_NOTEBOOKS) {
    const parsed = unitNotebookSpecSchema.safeParse(spec)
    if (!parsed.success) errors.push(`${spec.unitSlug}: schema failed (${parsed.error.issues[0]?.message})`)

    const syllabusUnit = unitLookup.get(`${spec.paperCode}:${spec.unitSlug}`)
    if (!syllabusUnit) {
      errors.push(`${spec.unitSlug}: not found in SYLLABUS`)
    } else {
      const expected = syllabusUnit.topics.map((t) => t.slug)
      const actual = spec.topics.map((t) => t.topicSlug)
      if (JSON.stringify(expected) !== JSON.stringify(actual)) {
        errors.push(`${spec.unitSlug}: topic slugs mismatch. expected=${expected.join(',')} actual=${actual.join(',')}`)
      }
    }

    if (!mindMapDataSchema.safeParse(spec.mindMap).success) errors.push(`${spec.unitSlug}: invalid mindMap`)
    if (!mindMapDataSchema.safeParse(spec.mindMapHinglish).success) errors.push(`${spec.unitSlug}: invalid mindMapHinglish`)
    if (spec.studySequence.length !== spec.studySequenceHinglish.length) errors.push(`${spec.unitSlug}: studySequence length mismatch`)
    if (spec.infographics.length < 2) errors.push(`${spec.unitSlug}: fewer than 2 infographics`)

    for (const info of spec.infographics) {
      const assetPath = path.resolve(process.cwd(), 'public/assets/infographics', info.assetFile)
      if (!fs.existsSync(assetPath)) errors.push(`${spec.unitSlug}: missing infographic ${info.assetFile}`)
      if (seenAlts.has(info.alt)) errors.push(`${spec.unitSlug}: duplicate infographic alt "${info.alt}"`)
      seenAlts.add(info.alt)
    }

    for (const topic of spec.topics) {
      for (const s of topic.thinkerSlugs) {
        if (!VALID_THINKER_SLUGS.has(s)) errors.push(`${topic.topicSlug}: invalid thinkerSlug "${s}"`)
      }
      if (!mindMapDataSchema.safeParse(topic.mindMap).success) errors.push(`${topic.topicSlug}: invalid EN mindMap`)
      if (!mindMapDataSchema.safeParse(topic.mindMapHinglish).success) errors.push(`${topic.topicSlug}: invalid HI mindMap`)
      checkSections(topic.topicSlug, 'en', topic.sections, errors)
      checkSections(topic.topicSlug, 'hi', topic.sectionsHinglish, errors)
      if (topic.pyqAnswers.length !== topic.pyqAnswersHinglish.length) {
        errors.push(`${topic.topicSlug}: PYQ count mismatch EN=${topic.pyqAnswers.length} vs HI=${topic.pyqAnswersHinglish.length}`)
      }
      if (sourceGrams.size > 0) {
        // Exclude thinkerQuote (short canonical public-domain quotes <= 25 words) from prose copy-guard
        const proseSections = topic.sections.filter((s) => s.kind !== 'thinkerQuote')
        const enText = [topic.summary, collectSectionText(proseSections)].join(' ')
        const hit = findSharedRun(enText, sourceGrams)
        if (hit) errors.push(`${topic.topicSlug} (en): copy-guard >=12 shared words ("${hit}")`)
      }
    }
  }

  const notesDir = path.resolve(process.cwd(), 'src/data/notes')
  for (const entry of fs.readdirSync(notesDir)) {
    if (entry.startsWith('unit-')) checkFileLineCounts(entry, errors)
  }

  if (errors.length > 0) {
    console.error(`Validation failed (${errors.length} errors):\n` + errors.map((e) => ` - ${e}`).join('\n'))
    process.exit(1)
  }
  console.log(`Validated ${ALL_UNIT_NOTEBOOKS.length} units / ${ALL_UNIT_NOTEBOOKS.reduce((s, u) => s + u.topics.length, 0)} topics cleanly (0 errors).`)
}

main()