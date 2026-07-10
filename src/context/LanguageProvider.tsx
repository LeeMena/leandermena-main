import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Lang = 'en' | 'es'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = 'lm-lang'

function getInitialLang(): Lang {
  // 1. stored preference wins
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'es') return stored
  } catch { /* localStorage unavailable */ }

  // 2. browser language as a fallback hint
  if (typeof navigator !== 'undefined' && navigator.language) {
    if (navigator.language.toLowerCase().startsWith('es')) return 'es'
  }

  // 3. default to English
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  // resolve real initial value on mount (avoids SSR/hydration mismatch)
  useEffect(() => {
    setLangState(getInitialLang())
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem(STORAGE_KEY, l) } catch { /* ignore */ }
    document.documentElement.lang = l
  }

  const toggleLang = () => setLang(lang === 'en' ? 'es' : 'en')

  useEffect(() => { document.documentElement.lang = lang }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
