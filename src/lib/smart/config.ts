import { z } from 'zod'

import { SmartError } from './errors'

const schema = z.object({
  OPENAI_API_KEY: z.string().min(1), DEEPSEEK_API_KEY: z.string().min(1),
  DEEPSEEK_BASE_URL: z.string().url().default('https://api.deepseek.com'),
  WRITER_MODEL: z.string().default('gpt-4.1-mini'), SCORER_MODEL: z.string().default('deepseek-flash'), EMBEDDING_MODEL: z.string().default('text-embedding-3-small'),
  PRICE_OPENAI_INPUT: z.coerce.number().gt(0), PRICE_OPENAI_OUTPUT: z.coerce.number().gt(0), PRICE_OPENAI_EMBEDDING: z.coerce.number().gt(0),
  PRICE_DEEPSEEK_INPUT: z.coerce.number().gt(0), PRICE_DEEPSEEK_OUTPUT: z.coerce.number().gt(0),
})
export type SmartConfig = z.infer<typeof schema>

/** AI keys + prices from the server env (same names as the GitHub pipeline). Missing → clear Hinglish error. */
export function loadSmartConfig(env: NodeJS.ProcessEnv = process.env): SmartConfig {
  const parsed = schema.safeParse(env)
  if (!parsed.success) throw new SmartError('AI keys server pe set nahi hain (OPENAI_API_KEY, DEEPSEEK_API_KEY, PRICE_*). Vercel env check karo.', 503)
  return parsed.data
}
