import { z } from 'zod'

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  VERCEL: z.string().optional(),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
  DATABASE_SSL_CA: z.string().optional(),
  PAYLOAD_SECRET: z.string().min(32, 'PAYLOAD_SECRET must be at least 32 characters'),
  NEXT_PUBLIC_SERVER_URL: z.string().url().optional(),
  S3_BUCKET: z.string().optional(),
  S3_ENDPOINT: z.string().url().optional(),
  S3_REGION: z.string().optional(),
  S3_ACCESS_KEY_ID: z.string().optional(),
  S3_SECRET_ACCESS_KEY: z.string().optional(),
  S3_PUBLIC_URL: z.string().url().optional(),
  SITE_URL: z.string().url().optional(),
  AI_BOT_API_KEY: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
  DEEPSEEK_API_KEY: z.string().optional(),
  DEEPSEEK_BASE_URL: z.string().url().optional(),
  SCORER_MODEL: z.string().optional(),
  WRITER_MODEL: z.string().optional(),
  EMBEDDING_MODEL: z.string().optional(),
  PRICE_OPENAI_INPUT: z.coerce.number().nonnegative().optional(),
  PRICE_OPENAI_OUTPUT: z.coerce.number().nonnegative().optional(),
  PRICE_OPENAI_EMBEDDING: z.coerce.number().nonnegative().optional(),
  PRICE_DEEPSEEK_INPUT: z.coerce.number().nonnegative().optional(),
  PRICE_DEEPSEEK_OUTPUT: z.coerce.number().nonnegative().optional(),
  TELEGRAM_BOT_TOKEN: z.string().optional(),
  TELEGRAM_CHANNEL_ID: z.string().optional(),
  PREVIEW_SECRET: z.string().optional(),
}).superRefine((env, ctx) => {
  const storage = [env.S3_BUCKET, env.S3_ENDPOINT, env.S3_REGION, env.S3_ACCESS_KEY_ID, env.S3_SECRET_ACCESS_KEY, env.S3_PUBLIC_URL]
  if (storage.some(Boolean) && storage.some((value) => !value)) {
    ctx.addIssue({ code: 'custom', message: 'S3_BUCKET, S3_ENDPOINT, S3_REGION, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, and S3_PUBLIC_URL must be configured together' })
  }
  if (env.VERCEL === '1' && !env.DATABASE_SSL_CA) {
    ctx.addIssue({ code: 'custom', message: 'DATABASE_SSL_CA (Supabase root certificate) is required on Vercel' })
  }
  if (env.VERCEL === '1' && storage.some((value) => !value)) {
    ctx.addIssue({ code: 'custom', message: 'Supabase S3 storage environment variables are required in production' })
  }
})

const parsed = schema.safeParse(process.env)
if (!parsed.success) {
  const errors = parsed.error.issues.map(({ path, message }) => `${path.join('.') || 'environment'}: ${message}`).join('\n')
  throw new Error(`Invalid server environment:\n${errors}`)
}

export const env = parsed.data
