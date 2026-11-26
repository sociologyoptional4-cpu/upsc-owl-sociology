'use client'

import { useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'
const STORAGE_KEY = 'aum-theme'

/** Inline script for <head>: applies the saved theme before paint (defaults to light). */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${STORAGE_KEY}');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}})()`

// The <html data-theme> attribute is the single source of truth.
function subscribe(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}
const getTheme = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
const getServerTheme = (): Theme => 'light'

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme)

  const handleToggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage blocked (private mode): theme still applies for this visit.
    }
  }

  const label = theme === 'dark' ? 'Light mode on karo' : 'Dark mode on karo'

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-chip border border-rule text-ink-soft transition-[transform,background-color] duration-300 ease-out-expo hover:bg-paper-sunk active:scale-95"
    >
      <span aria-hidden className="text-lg leading-none">
        {theme === 'dark' ? '☀' : '◐'}
      </span>
    </button>
  )
}
