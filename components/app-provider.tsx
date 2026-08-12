'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { type Lang } from '@/lib/strings'

type AppContextType = {
  lang: Lang
  toggleLang: () => void
}

const AppContext = createContext<AppContextType>({
  lang: 'fr',
  toggleLang: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')

  // Restore language preference from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('tm-lang') as Lang | null
    if (savedLang === 'fr' || savedLang === 'en') setLang(savedLang)
  }, [])

  /**
   * Keep `<html lang>` in step with the language actually being rendered.
   *
   * The root layout hard-codes `lang="fr"`, so toggling to English used to
   * leave the document declaring French while serving English — a page whose
   * declared language contradicts its content, for screen readers and for any
   * engine that trusts the attribute.
   *
   * Deliberately an effect rather than a render-time value: the server has no
   * access to localStorage, so `fr` (the default) is the only thing it can
   * honestly emit. Writing the attribute after hydration means React never
   * diffs it and no hydration warning is possible — the DOM mutation happens
   * strictly after the tree has been matched against the server HTML.
   */
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'fr' ? 'en' : 'fr'
      localStorage.setItem('tm-lang', next)
      return next
    })
  }

  return (
    <AppContext.Provider value={{ lang, toggleLang }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}

export function useLang() {
  const { lang } = useApp()
  return lang
}
