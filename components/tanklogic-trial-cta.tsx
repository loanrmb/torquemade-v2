'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from './app-provider'
import { strings } from '@/lib/strings'
import { PHONE_COUNTRIES } from '@/lib/phone-codes'
import { pressable, useReducedMotionSafe } from '@/lib/motion'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const SESSION_LOCK_KEY = 'tanklogic-trial-submitted'

export function TankLogicTrialCta({ intentKey }: { intentKey: 'serial' | 'sync' | 'doa' }) {
  const lang = useLang()
  const t = strings[lang].tanklogic
  const copy = t.trialCtas[intentKey]
  const form = t.trialForm

  const [open, setOpen] = useState(false)

  return (
    <div className="fade-up flex justify-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn-liquid-glass inline-flex flex-col items-center gap-1 rounded-3xl px-8 py-5 text-center"
      >
        <span className="text-body font-semibold">{copy.cta}</span>
        <span className="text-caption font-normal opacity-85">{copy.question}</span>
      </button>

      <TrialModal open={open} onClose={() => setOpen(false)} intentKey={intentKey} title={copy.title} />
    </div>
  )
}

function TrialModal({
  open,
  onClose,
  intentKey,
  title,
}: {
  open: boolean
  onClose: () => void
  intentKey: 'serial' | 'sync' | 'doa'
  title: string
}) {
  const lang = useLang()
  const form = strings[lang].tanklogic.trialForm
  const reducedMotion = useReducedMotionSafe()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneIso, setPhoneIso] = useState(PHONE_COUNTRIES[0].iso)
  const [phone, setPhone] = useState('')
  const [storeName, setStoreName] = useState('')
  const [storeUrl, setStoreUrl] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [state, setState] = useState<FormState>(() =>
    typeof window !== 'undefined' && sessionStorage.getItem(SESSION_LOCK_KEY) === 'true'
      ? 'success'
      : 'idle'
  )
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const phoneCountry = PHONE_COUNTRIES.find((c) => c.iso === phoneIso) ?? PHONE_COUNTRIES[0]

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
          phone: phone ? `${phoneCountry.dial} ${phone}` : '',
          company: storeName,
          storeUrl,
          service: `TankLogic: essai (${intentKey})`,
          budget: '',
          message: message.slice(0, 500),
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

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <div
            className="absolute inset-0"
            style={{ background: 'hsla(0, 0%, 0%, 0.45)' }}
            onClick={onClose}
          />

          <motion.div
            className="tanklogic-glass-modal relative mx-auto w-[calc(100vw-2rem)] max-w-lg"
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.96, y: reducedMotion ? 0 : 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.96, y: reducedMotion ? 0 : 12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="tanklogic-glass-modal-inner max-h-[85vh] overflow-y-auto px-6 py-8 min-720:px-9 min-720:py-9">
              <motion.button
                type="button"
                onClick={onClose}
                aria-label={form.close}
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-lg font-light transition-opacity duration-150 hover:opacity-60"
                style={{ color: 'hsl(var(--text-tertiary))' }}
                {...pressable}
              >
                ×
              </motion.button>

              <AnimatePresence mode="wait">
                {state === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="py-8 text-center"
                  >
                    <p className="text-body-lg font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
                      ✓ {form.success}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <h3
                      className="mb-6 max-w-sm text-title-3 font-semibold tracking-tight"
                      style={{ color: 'hsl(var(--text-primary))' }}
                    >
                      {title}
                    </h3>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <div className="grid grid-cols-1 gap-3 min-720:grid-cols-2">
                        <FormInput
                          type="text"
                          required
                          placeholder={form.namePlaceholder}
                          value={name}
                          onChange={setName}
                        />
                        <FormInput
                          type="email"
                          required
                          placeholder={form.emailPlaceholder}
                          value={email}
                          onChange={setEmail}
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-2 min-720:grid-cols-[7.5rem_1fr]">
                        <select
                          value={phoneIso}
                          onChange={(e) => setPhoneIso(e.target.value)}
                          aria-label={form.phonePlaceholder}
                          className="w-full min-w-0 rounded-xl px-2 text-sm outline-none"
                          style={{
                            background: 'hsl(var(--bg-secondary))',
                            border: '1px solid hsl(var(--border-subtle))',
                            color: 'hsl(var(--text-primary))',
                          }}
                        >
                          {PHONE_COUNTRIES.map((c) => (
                            <option key={c.iso} value={c.iso}>
                              {c.flag} {lang === 'fr' ? c.fr : c.en} ({c.dial})
                            </option>
                          ))}
                        </select>
                        <FormInput
                          type="tel"
                          placeholder={form.phonePlaceholder}
                          value={phone}
                          onChange={setPhone}
                          wrapperClassName="w-full min-w-0"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-3 min-720:grid-cols-2">
                        <FormInput
                          type="text"
                          required
                          placeholder={form.storeNamePlaceholder}
                          value={storeName}
                          onChange={setStoreName}
                        />
                        <FormInput
                          type="url"
                          placeholder={form.storeUrlPlaceholder}
                          value={storeUrl}
                          onChange={setStoreUrl}
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <textarea
                          required
                          maxLength={500}
                          rows={4}
                          placeholder={form.messagePlaceholder}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-150"
                          style={{
                            background: 'hsl(var(--bg-secondary))',
                            border: '1px solid hsl(var(--border-subtle))',
                            color: 'hsl(var(--text-primary))',
                            transition: 'border-color 150ms var(--ease-out)',
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border-hover))')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border-subtle))')}
                        />
                        <span
                          className="self-end text-caption"
                          style={{ color: 'hsl(var(--text-tertiary))' }}
                        >
                          {message.length}/500
                        </span>
                      </div>

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
                        className="btn-primary mt-2 justify-center disabled:opacity-50"
                      >
                        {state === 'loading' ? form.sending : form.submit}
                      </button>

                      {state === 'error' && (
                        <p className="text-center text-caption" style={{ color: 'hsl(var(--text-tertiary))' }}>
                          {form.error}
                        </p>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

function FormInput({
  type, required = false, placeholder, value, onChange, wrapperClassName = '',
}: {
  type: string
  required?: boolean
  placeholder: string
  value: string
  onChange: (value: string) => void
  wrapperClassName?: string
}) {
  return (
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-150 ${wrapperClassName}`}
      style={{
        background: 'hsl(var(--bg-secondary))',
        border: '1px solid hsl(var(--border-subtle))',
        color: 'hsl(var(--text-primary))',
        transition: 'border-color 150ms var(--ease-out)',
      }}
      onFocus={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border-hover))')}
      onBlur={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border-subtle))')}
    />
  )
}
