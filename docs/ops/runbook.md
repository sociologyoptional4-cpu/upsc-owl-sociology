# Production runbook

## Deploy

- Merge or push the reviewed commit to `main`; Vercel builds with `npm run build:production`, which applies Payload migrations before `next build`.
- Check the Vercel deployment log for migration and build errors, then smoke-check `/`, `/current-affairs`, `/admin`, and `/api/health` (when available).
- Use Vercel's deployment menu to promote a verified preview, or let a verified `main` deployment become production.
- First admin: open `/admin` and use **Create first user** with a unique, strong password. Do not run the seed script in production.
- Create the `ai-bot` user from the admin UI, generate a new API key, and store it only as the GitHub Actions `AI_BOT_API_KEY` secret. Keep the bot's draft-only role.

## Roll back

- In Vercel → Deployments, promote the last known-good deployment. This is an instant application rollback.
- Do not roll back a database migration automatically. Review the migration and restore the Supabase database from its daily backup if a schema/data restore is needed.

## Pipeline

- Pause automation by turning off `pipelineEnabled` in Payload `/admin` → Site Settings; also disable the `daily-ca` GitHub Actions workflow if needed.
- Run `daily-ca` manually with `dry_run=true` for a no-publish check. Review workflow logs for fetch, scoring, writing, and validation results.
- GitHub Actions needs `OPENAI_API_KEY`, `DEEPSEEK_API_KEY`, `DEEPSEEK_BASE_URL`, `SCORER_MODEL`, `WRITER_MODEL`, `EMBEDDING_MODEL`, all `PRICE_*` variables, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHANNEL_ID`, `SITE_URL`, and the production `AI_BOT_API_KEY`.
- Rotate provider, Telegram, database, S3, and Payload credentials at their source, then update Vercel and GitHub secrets. Never place values in commits, issues, or logs.

## Database and media

- Supabase project: Mumbai (`ap-south-1`); production uses its transaction pooler on port 6543.
- Supabase daily backups are enabled by the project plan. Check backup availability before risky migrations.
- The public `media` bucket serves public site media. Keep S3 credentials server-side and rotate them if exposed.

## Domain

- Add the chosen domain in Vercel → Project → Settings → Domains.
- At the DNS provider, create the records Vercel lists for that domain (typically an apex A record and `www` CNAME). Wait for Vercel to verify DNS and issue TLS, then update `SITE_URL` and `NEXT_PUBLIC_SERVER_URL` in Vercel and redeploy.

## Security follow-up

- Basic security response headers are enabled. A nonce-based Content Security Policy is intentionally deferred under D14 and should be considered during the final launch review.
