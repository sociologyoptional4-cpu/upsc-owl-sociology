import type { Payload } from 'payload'

import { escapeTelegramHTML } from './postCurrentAffair'

type TelegramResult = { ok: boolean; description?: string }

/** Sends a published blog post to the channel. Reuses the same env + escaping as current affairs. */
export async function postBlog(payload: Payload, post: { title: string; excerpt?: string | null; url: string; telegramText?: string | null }): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const channel = process.env.TELEGRAM_CHANNEL_ID
  if (!token || !channel) return false
  const body = (post.telegramText?.trim() || post.excerpt?.trim() || '').slice(0, 900)
  const text = [`<b>${escapeTelegramHTML(post.title)}</b>`, body ? escapeTelegramHTML(body) : '', `<a href="${escapeTelegramHTML(post.url)}">Blog padho →</a>`].filter(Boolean).join('\n\n')
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: channel, text, parse_mode: 'HTML', disable_web_page_preview: false }),
  })
  const result = (await response.json()) as TelegramResult
  if (!response.ok || !result.ok) {
    payload.logger.error(`Telegram blog post failed: ${result.description ?? response.status}`)
    return false
  }
  return true
}
