'use client'

import { createContext, useContext, useState } from 'react'
import type { Lang } from '@/lib/i18n'
import { t } from '@/lib/i18n'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  tr: (typeof t)[Lang]
}

const LangContext = createContext<LangCtx>({
  lang: 'es',
  setLang: () => {},
  tr: t.es,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  return (
    <LangContext.Provider value={{ lang, setLang, tr: t[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LangContext)
}
