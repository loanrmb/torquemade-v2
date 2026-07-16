'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from './app-provider'
import { strings } from '@/lib/strings'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const SESSION_LOCK_KEY = 'tanklogic-trial-submitted'

export function TankLogicTrialCta({ intentKey }: { intentKey: 'serial' | 'sync' | 'doa' }) {
  const lang = useLang()
  const t = strings[lang].tanklogic
  const copy = t.trialCtas[intentKey]
  const form = t.trialForm

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [state, setState] = useState<FormState>(() =>
    typeof window !== 'undefined' && sessionStorage.getItem(SESSION_LOCK_KEY) === 'true'
      ? 'success'
      : 'idle'
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (state === 'success' || state === 'loading') return
    setState('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: name,
          lastName: '',
          email,
          company: '',
          service: `TankLogic — essai (${intentKey})`,
          budget: '',
          message: `Demande d'essai TankLogic — section ${intentKey}.`,
          website,
        }),
      })
      if (res.ok) {
        sessionStorage.setItem(SESSION_LOCK_KEY, 'true')
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <div
      className="fade-up tanklogic-trial-cta mx-auto max-w-xl rounded-2xl px-6 py-8 min-720:px-10 min-720:py-10"
      style={{
        background: 'hsl(var(--bg-secondary))',
        border: '1px solid hsl(var(--border-subtle))',
      }}
    >
      <AnimatePresence mode="wait">
        {state === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="text-center"
          >
            <p className="text-body font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
              ✓ {form.success}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h3
              className="mb-2 text-center text-headline font-semibold tracking-tight"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              {copy.title}
            </h3>
            <p
              className="mb-6 text-center text-body leading-relaxed"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {copy.question}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 min-720:flex-row">
              <input
                type="text"
                required
                maxLength={500}
                autoComplete="name"
                placeholder={form.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-150"
                style={{
                  background: 'hsl(var(--bg-primary))',
                  border: '1px solid hsl(var(--border-subtle))',
                  color: 'hsl(var(--text-primary))',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border-hover))')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border-subtle))')}
              />
              <input
                type="email"
                required
                maxLength={500}
                autoComplete="email"
                placeholder={form.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-150"
                style={{
                  background: 'hsl(var(--bg-primary))',
                  border: '1px solid hsl(var(--border-subtle))',
                  color: 'hsl(var(--text-primary))',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border-hover))')}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border-subtle))')}
              />
              {/* Honeypot — hidden from real users, bots tend to fill every field */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
                aria-hidden="true"
              />
              <button
                type="submit"
                disabled={state === 'loading'}
                className="btn-primary justify-center whitespace-nowrap disabled:opacity-50"
              >
                {state === 'loading' ? form.sending : copy.cta}
              </button>
            </form>

            {state === 'error' && (
              <p className="mt-3 text-center text-caption" style={{ color: 'hsl(var(--text-tertiary))' }}>
                {form.error}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
