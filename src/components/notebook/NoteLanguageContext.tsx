'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import type { NoteLang } from '@/lib/notes/notebook-types'

const STORAGE_KEY = 'owl-note-lang'

type NoteLanguageContextValue = {
  lang: NoteLang
  setLang: (lang: NoteLang) => void
  hasHinglish: boolean
}

const NoteLanguageContext = createContext<NoteLanguageContextValue | null>(null)

function parseLangParam(raw: string | null): NoteLang | null {
  if (!raw) return null
  const normalized = raw.trim().toLowerCase()
  if (normalized === 'hi' || normalized === 'hinglish') return 'hi'
  if (normalized === 'en' || normalized === 'english') return 'en'
  return null
}

function readStoredLang(): NoteLang | null {
  try {
    return parseLangParam(window.localStorage.getItem(STORAGE_KEY))
  } catch {
    return null
  }
}

function syncLangUrl(target: NoteLang): void {
  try {
    const url = new URL(window.location.href)
    if (target === 'en') {
      url.searchParams.delete('lang')
    } else {
      url.searchParams.set('lang', target)
    }
    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`)
  } catch {
    // Ignore invalid URL environments.
  }
}

/** Provides English-first bilingual note medium state persisted via URL and localStorage. */
export function NoteLanguageProvider({
  hasHinglish,
  children,
}: {
  hasHinglish: boolean
  children: React.ReactNode
}) {
  // Always initialize as 'en' so SSR/SSG outputs English Notes first by default.
  const [rawLang, setRawLang] = useState<NoteLang>('en')

  useEffect(() => {
    if (!hasHinglish) return
    const applyPreferred = () => {
      const urlLang = parseLangParam(new URLSearchParams(window.location.search).get('lang'))
      if (urlLang) {
        if (urlLang === 'hi') setRawLang('hi')
        return
      }
      if (readStoredLang() === 'hi') setRawLang('hi')
    }
    applyPreferred()
  }, [hasHinglish])

  const lang: NoteLang = hasHinglish ? rawLang : 'en'

  const setLang = useCallback(
    (next: NoteLang) => {
      const target: NoteLang = next === 'hi' && !hasHinglish ? 'en' : next
      setRawLang(target)
      if (typeof window === 'undefined') return
      try {
        window.localStorage.setItem(STORAGE_KEY, target)
      } catch {
        // Storage blocked (private mode): state and URL still update.
      }
      syncLangUrl(target)
    },
    [hasHinglish],
  )

  const value = useMemo(() => ({ lang, setLang, hasHinglish }), [lang, setLang, hasHinglish])

  return <NoteLanguageContext.Provider value={value}>{children}</NoteLanguageContext.Provider>
}

export function useNoteLanguage(): NoteLanguageContextValue {
  const ctx = useContext(NoteLanguageContext)
  if (!ctx) {
    throw new Error('useNoteLanguage must be used inside NoteLanguageProvider')
  }
  return ctx
}
