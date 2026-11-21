import { z } from 'zod'

const envSchema = z.object({
  SITE_URL: z.string().url(), AI_BOT_API_KEY: z.string().min(1), OPENAI_API_KEY: z.string().min(1), DEEPSEEK_API_KEY: z.string().min(1),
  DEEPSEEK_BASE_URL: z.string().url().default('https://api.deepseek.com'), WRITER_MODEL: z.string().default('gpt-4.1-mini'), SCORER_MODEL: z.string().default('deepseek-flash'), EMBEDDING_MODEL: z.string().default('text-embedding-3-small'),
  PRICE_OPENAI_INPUT: z.coerce.number().gt(0), PRICE_OPENAI_OUTPUT: z.coerce.number().gt(0), PRICE_OPENAI_EMBEDDING: z.coerce.number().gt(0), PRICE_DEEPSEEK_INPUT: z.coerce.number().gt(0), PRICE_DEEPSEEK_OUTPUT: z.coerce.number().gt(0),
  MAX_ITEMS_PER_DAY: z.coerce.number().int().min(1).max(20).default(8), DRY_RUN: z.preprocess((value) => value === true || value === '1' || value === 'true', z.boolean()).default(false),
})
export type PipelineConfig = z.infer<typeof envSchema>
export const loadConfig = (env: NodeJS.ProcessEnv = process.env): PipelineConfig => envSchema.parse(env)
