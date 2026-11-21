import fs from 'node:fs/promises'
import path from 'node:path'

import OpenAI from 'openai'

import { NOTES } from '@/seed/notes/unit1-2'

import type { PipelineConfig } from '../config'
import { stripNulls } from '../llm/openai'
import { sharesLongRun } from './copy-guard'
import { type NoteOutput, noteOutputSchema, tablesWithinLimits } from './schema'

export const NOTES_PROMPT_VERSION = 'notes-writer.v1'

export type NoteInput = {
  topicTitle: string
  unitTitle: string
  paper: 'P1' | 'P2'
  pyqs: { year: number; question: string }[]
  allowedThinkerSlugs: string[]
  /** PRIVATE handout background (D15); may be empty. */
  background: string
}

export type WrittenNote = { note: NoteOutput; inputTokens: number; outputTokens: number }

const readPrompt = (name: string) => fs.readFile(path.resolve(process.cwd(), 'src/pipeline/llm/prompts', name), 'utf8')

/** Two batch-1 notes rendered in the output format, used as gold examples. */
function goldExamples(): string {
  const picks = NOTES.filter((n) => ['sociology-and-common-sense', 'positivism-and-its-critique'].includes(n.slug))
  return picks
    .map((n) => {
      const out: NoteOutput = { summary: n.summary, points: n.points, bodyMarkdown: n.body, keyTerms: n.keyTerms, answerTip: n.answerTip, thinkerSlugs: n.thinkerSlugs }
      return `EXAMPLE for "${n.title}":\n${JSON.stringify(out)}`
    })
    .join('\n\n')
}

/** Throws a readable error the caller can feed back as a repair hint. */
export function checkNote(raw: unknown, background: string): NoteOutput {
  const parsed = noteOutputSchema.safeParse(stripNulls(raw))
  if (!parsed.success) throw new Error(`Schema: ${parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ').slice(0, 600)}`)
  const note = parsed.data
  if (!tablesWithinLimits(note.bodyMarkdown)) throw new Error('Tables: max 4 columns and 8 data rows each')
  const allText = [note.summary, ...note.points, note.bodyMarkdown, note.answerTip, ...note.keyTerms.map((k) => k.meaning)].join(' ')
  if (background && sharesLongRun(allText, background)) throw new Error('Originality: you reused 12+ consecutive words from BACKGROUND. Rewrite fully in your own words.')
  return note
}

export async function writeNote(config: PipelineConfig, input: NoteInput, repairHint = ''): Promise<WrittenNote> {
  const [style, prompt] = await Promise.all([readPrompt('style-guide.md'), readPrompt('notes-writer.v1.md')])
  const user = {
    TOPIC: input.topicTitle,
    UNIT: input.unitTitle,
    PAPER: input.paper,
    PYQS: input.pyqs.slice(0, 20),
    ALLOWED_THINKER_SLUGS: input.allowedThinkerSlugs,
    BACKGROUND_PRIVATE_DO_NOT_COPY: input.background || '(none: use standard Sociology knowledge)',
  }
  const result = await new OpenAI({ apiKey: config.OPENAI_API_KEY }).responses.create({
    model: config.WRITER_MODEL,
    instructions: `${style}\n\n${prompt}\n\n${goldExamples()}${repairHint ? `\n\nYour previous answer was rejected. Fix this and answer again: ${repairHint}` : ''}`,
    // json_object mode requires the word "json" in the input itself.
    input: `Write the topic note as one json object for:\n${JSON.stringify(user)}`,
    text: { format: { type: 'json_object' } },
  })
  const note = checkNote(JSON.parse(result.output_text), input.background)
  return { note, inputTokens: result.usage?.input_tokens ?? 0, outputTokens: result.usage?.output_tokens ?? 0 }
}
