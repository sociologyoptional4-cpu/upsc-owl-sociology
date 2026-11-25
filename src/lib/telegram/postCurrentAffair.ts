import type { CollectionAfterChangeHook } from 'payload'

import { formatDateIST } from '@/lib/data/issue'

export const escapeTelegramHTML = (value: string): string => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
type TelegramResult = { ok: boolean; result?: { message_id: number }; description?: string }

export const postCurrentAffair: CollectionAfterChangeHook = async ({ doc, previousDoc, req, context }) => {
  if (context.skipTelegram || doc._status !== 'published' || previousDoc?._status === 'published' || doc.telegramMessageId) return doc
  const token = process.env.TELEGRAM_BOT_TOKEN
  const channel = process.env.TELEGRAM_CHANNEL_ID
  if (!token || !channel) return doc
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL ?? process.env.SITE_URL ?? ''
    const date = formatDateIST(String(doc.date))
    const articleUrl = `${siteUrl}/current-affairs/${date}/${doc.slug}`
    const summaries: string[] = typeof doc.summary === 'string' ? doc.summary.split(/\n|•/).map((line: string) => line.trim()).filter(Boolean).slice(0, 3) : []
    const topicNames: string[] = Array.isArray(doc.topics) ? doc.topics.flatMap((topic: unknown) => typeof topic === 'object' && topic !== null && 'title' in topic && typeof topic.title === 'string' ? [`#${topic.title.replace(/[^\p{L}\p{N}_]/gu, '')}`] : []) : []
    const text = [`<b>${escapeTelegramHTML(String(doc.headline ?? ''))}</b>`, ...summaries.map((line) => `• ${escapeTelegramHTML(line)}`), topicNames.join(' '), `<a href="${escapeTelegramHTML(articleUrl)}">Read note</a>`].filter(Boolean).join('\n')
    const result = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ chat_id: channel, text, parse_mode: 'HTML', disable_web_page_preview: true }),
      signal: AbortSignal.timeout(8000),
    })
    const body = await result.json() as TelegramResult
    if (!result.ok || !body.ok || !body.result) throw new Error(body.description ?? `Telegram HTTP ${result.status}`)
    await req.payload.update({ collection: 'current-affairs', id: doc.id, data: { telegramMessageId: String(body.result.message_id) }, overrideAccess: true, req, context: { skipTelegram: true, disableRevalidate: true } })
  } catch (error) {
    req.payload.logger.error(`Telegram post failed for current-affairs ${String(doc.id)}: ${error instanceof Error ? error.message : 'unknown error'}`)
  }
  return doc
}
