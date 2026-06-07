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
