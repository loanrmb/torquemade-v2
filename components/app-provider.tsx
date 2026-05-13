'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { type Lang } from '@/lib/strings'

type Theme = 'light' | 'dark'

type AppContextType = {
  lang: Lang
  toggleLang: () => void
  theme: Theme
  toggleTheme: () => void
}

const AppContext = createContext<AppContextType>({
  lang: 'fr',
  toggleLang: () => {},
  theme: 'light',
  toggleTheme: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')
  const [theme, setTheme] = useState<Theme>('light')

  // Restore preferences from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('tm-lang') as Lang | null
    const savedTheme = localStorage.getItem('tm-theme') as Theme | null
    if (savedLang === 'fr' || savedLang === 'en') setLang(savedLang)
    if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme)
  }, [])

  // Apply theme class to <html>
  useEffect(() => {
    const html = document.documentElement
    if (theme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [theme])

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'fr' ? 'en' : 'fr'
      localStorage.setItem('tm-lang', next)
      return next
    })
  }

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('tm-theme', next)
      return next
    })
  }

  return (
    <AppContext.Provider value={{ lang, toggleLang, theme, toggleTheme }}>
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
