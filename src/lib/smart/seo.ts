import { z } from 'zod'

import type { SmartConfig } from './config'
import { deepseekJson, type Usage } from './llm'
import { loadSeoPrompt } from './prompts'

const seoSchema = z.object({ title: z.string().trim().min(5), description: z.string().trim().min(30) })
export type SeoMeta = { title: string; description: string }

export function truncateAtWord(value: string, max: number): string {
  const text = value.replace(/[•·▪●]/g, ' ').replace(/\s+/g, ' ').trim()
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), Math.floor(max / 2))).trim()}…`
}

/** Deterministic fallback so a failed AI call never blocks a draft. */
export const fallbackSeo = (headline: string, summary: string): SeoMeta => ({ title: truncateAtWord(headline, 60), description: truncateAtWord(summary || headline, 160) })

/** DeepSeek writes title (≤60) + description (≤160); output is clamped and falls back on any failure. */
export async function buildSeo(config: SmartConfig, headline: string, summary: string): Promise<{ seo: SeoMeta; usage: Usage; fromAi: boolean }> {
  try {
    const call = await deepseekJson(config, loadSeoPrompt(), { headline, summary: summary.slice(0, 1500) })
    const parsed = seoSchema.parse(call.json)
    return { seo: { title: truncateAtWord(parsed.title, 60), description: truncateAtWord(parsed.description, 160) }, usage: call.usage, fromAi: true }
  } catch {
    return { seo: fallbackSeo(headline, summary), usage: { input: 0, output: 0 }, fromAi: false }
  }
}
