import { readFileSync } from 'node:fs'
import path from 'node:path'

/** Literal paths so Next's file tracing bundles the prompts on Vercel (also listed in next.config.ts). */
const read = (name: string): string => readFileSync(path.join(process.cwd(), 'src/pipeline/llm/prompts', name), 'utf8')

export function loadCaPrompts(): { scorer: string; writer: string; style: string; examples: string } {
  return { scorer: read('scorer.v1.md'), writer: read('writer.v1.md'), style: read('style-guide.md'), examples: read('gold-examples.md') }
}
export const loadQuizPrompt = (): string => read('smart-quiz.v1.md')
export const loadMatchPrompt = (): string => read('smart-quiz-match.v1.md')
export const loadSeoPrompt = (): string => read('smart-seo.v1.md')
export const loadPostQuizPrompt = (): string => read('smart-post-quiz.v1.md')
