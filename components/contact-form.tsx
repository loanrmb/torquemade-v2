'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from './app-provider'
import { strings } from '@/lib/strings'

type FormState = 'idle' | 'loading' | 'success' | 'error'

// Maps a ?service= query value to the index of the matching service chip.
// Lets landing pages (e.g. /tanklogic) deep-link into the form with a tag
// pre-selected, mirroring the "Connexion stock" option wiring.
const SERVICE_PARAM_INDEX: Record<string, number> = {
  tanklogic: 4,
  stock: 3,
}

const CURRENCY_SYMBOLS: Record<string, string> = {
  CHF: 'CHF',
  EUR: '€',
  USD: '$',
  GBP: '£',
  CAD: 'CA$',
  PLN: 'zł',
}

const CURRENCY_FLAGS: Record<string, string> = {
  CHF: '🇨🇭',
  EUR: '🇪🇺',
  USD: '🇺🇸',
  GBP: '🇬🇧',
  CAD: '🇨🇦',
  PLN: '🇵🇱',
}

const TOTAL_STEPS = 3

export function ContactForm() {
  const lang = useLang()
  const t = strings[lang].contact
  const searchParams = useSearchParams()
  const [state, setState] = useState<FormState>('idle')
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [budget, setBudget] = useState<number | null>(null)
  const [currency, setCurrency] = useState<number>(0) // default CHF

  // Pre-select a service chip when a ?service= tag is present in the URL.
  useEffect(() => {
    const param = searchParams.get('service')
    if (!param) return
    const idx = SERVICE_PARAM_INDEX[param.toLowerCase()]
    if (idx === undefined) return
    setSelected((prev) => {
      if (prev.has(idx)) return prev
      const next = new Set(prev)
      next.add(idx)
      return next
    })
  }, [searchParams])

  const toggleService = (i: number) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const goNext = () => {
    setDirection(1)
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1))
  }

  const goBack = () => {
    setDirection(-1)
    setStep((s) => Math.max(s - 1, 0))
  }

  const canProceedStep1 = firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== ''

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('loading')

    const selectedServices = Array.from(selected).map((i) => t.services[i]).join(', ')
    const currencyCode = t.currencies[currency]
    const selectedBudget = budget !== null ? `${t.budgets[budget]} ${currencyCode}` : ''

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          company,
          service: selectedServices,
          budget: selectedBudget,
          message,
        }),
      })
      if (res.ok) {
        setState('success')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="rounded-2xl p-10 text-center"
        style={{
          background: 'hsl(var(--bg-secondary))',
          border: '1px solid hsl(var(--border-subtle))',
        }}
      >
        <p className="text-2xl mb-2" style={{ color: 'hsl(150 60% 40%)' }}>✓</p>
        <p className="text-lg font-medium mb-1" style={{ color: 'hsl(var(--text-primary))' }}>
          {t.success}
        </p>
        <p className="text-sm" style={{ color: 'hsl(var(--text-secondary))' }}>
          {t.successSub}
        </p>
      </motion.div>
    )
  }

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Progress bar — 3 segments */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-1.5">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className="h-1 flex-1 rounded-full overflow-hidden"
              style={{ background: 'hsl(var(--border-subtle))' }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'hsl(var(--bg-inverse))' }}
                initial={false}
                animate={{ width: i <= step ? '100%' : '0%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </div>
          ))}
        </div>
        <p className="text-caption" style={{ color: 'hsl(var(--text-tertiary))' }}>
          {t.stepLabel} {step + 1} {t.stepOf} {TOTAL_STEPS}
        </p>
      </div>

      {/* Back button */}
      {step > 0 && (
        <button
          type="button"
          onClick={goBack}
          className="self-start text-sm font-medium"
          style={{ color: 'hsl(var(--text-secondary))' }}
        >
          {t.back}
        </button>
      )}

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {step === 0 && (
              <div className="flex flex-col gap-4">
                <h2 className="text-body-lg font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
                  {t.step1Title}
                </h2>
                <div className="grid grid-cols-1 gap-4 min-720:grid-cols-2">
                  <InputField
                    name="firstName"
                    label={t.firstName}
                    required
                    value={firstName}
                    onChange={setFirstName}
                  />
                  <InputField
                    name="lastName"
                    label={t.lastName}
                    required
                    value={lastName}
                    onChange={setLastName}
                  />
                </div>
                <InputField
                  name="email"
                  label={t.email}
                  type="email"
                  required
                  value={email}
                  onChange={setEmail}
                />
                <InputField
                  name="company"
                  label={t.company}
                  value={company}
                  onChange={setCompany}
                />

                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canProceedStep1}
                  className="btn-primary self-start mt-2 disabled:opacity-50"
                >
                  {t.next}
                </button>
              </div>
            )}

            {step === 1 && (
              <div className="flex flex-col gap-4">
                <h2 className="text-body-lg font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
                  {t.step2Title}
                </h2>
                <p
                  className="text-caption -mt-2"
                  style={{ color: 'hsl(var(--text-tertiary))' }}
                >
                  {t.multipleChoice}
                </p>
                <div className="grid grid-cols-1 gap-3 min-720:grid-cols-2">
                  {t.services.map((service, i) => {
                    const isActive = selected.has(i)
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggleService(i)}
                        className="rounded-2xl px-4 py-4 text-left text-sm font-medium transition-colors duration-150"
                        style={{
                          background: isActive ? 'hsl(var(--bg-inverse))' : 'hsl(var(--bg-secondary))',
                          color: isActive ? 'hsl(var(--bg-primary))' : 'hsl(var(--text-secondary))',
                          border: '1px solid hsl(var(--border-subtle))',
                        }}
                      >
                        {isActive && <span className="mr-1.5 text-xs">✓</span>}
                        {service}
                      </button>
                    )
                  })}
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={selected.size === 0}
                  className="btn-primary self-start mt-2 disabled:opacity-50"
                >
                  {t.next}
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-4">
                <h2 className="text-body-lg font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
                  {t.step3Title}
                </h2>

                {/* Currency pills */}
                <fieldset className="p-0 m-0 border-0">
                  <legend
                    className="text-caption font-medium mb-2 block"
                    style={{ color: 'hsl(var(--text-secondary))' }}
                  >
                    {t.currencyLabel}
                  </legend>
                  <div
                    className="flex flex-nowrap overflow-x-auto gap-1.5 pb-1 scrollbar-hide"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                  >
                    {t.currencies.map((code, i) => {
                      const isActive = currency === i
                      return (
                        <button
                          key={code}
                          type="button"
                          onClick={() => setCurrency(i)}
                          className="flex-shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-150"
                          style={{
                            background: isActive ? 'hsl(var(--bg-inverse))' : 'hsl(var(--bg-secondary))',
                            color: isActive ? 'hsl(var(--bg-primary))' : 'hsl(var(--text-secondary))',
                            border: '1px solid hsl(var(--border-subtle))',
                          }}
                        >
                          <span className="mr-1">{CURRENCY_FLAGS[code]}</span>
                          {code}
                        </button>
                      )
                    })}
                  </div>
                </fieldset>

                {/* Budget cards */}
                <fieldset className="p-0 m-0 border-0">
                  <legend
                    className="text-caption font-medium mb-2 block"
                    style={{ color: 'hsl(var(--text-secondary))' }}
                  >
                    {t.budgetLabel}
                    <span className="ml-1.5 text-caption" style={{ color: 'hsl(var(--text-tertiary))' }}>
                      {t.budgetOptional}
                    </span>
                  </legend>
                  <div className="grid grid-cols-1 gap-3 min-720:grid-cols-2">
                    {t.budgets.map((range, i) => {
                      const isActive = budget === i
                      const symbol = CURRENCY_SYMBOLS[t.currencies[currency]]
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setBudget(isActive ? null : i)}
                          className="rounded-2xl px-4 py-4 text-left text-sm font-medium transition-colors duration-150"
                          style={{
                            background: isActive ? 'hsl(var(--bg-inverse))' : 'hsl(var(--bg-secondary))',
                            color: isActive ? 'hsl(var(--bg-primary))' : 'hsl(var(--text-secondary))',
                            border: '1px solid hsl(var(--border-subtle))',
                          }}
                        >
                          {isActive && <span className="mr-1.5 text-xs">✓</span>}
                          {range} {symbol}
                        </button>
                      )
                    })}
                  </div>
                </fieldset>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-caption font-medium"
                    style={{ color: 'hsl(var(--text-secondary))' }}
                  >
                    {t.message}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl px-4 py-3 text-sm resize-none outline-none transition-colors duration-150"
                    style={{
                      background: 'hsl(var(--bg-secondary))',
                      border: '1px solid hsl(var(--border-subtle))',
                      color: 'hsl(var(--text-primary))',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border-hover))')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border-subtle))')}
                  />
                </div>

                {state === 'error' && (
                  <p className="text-sm" style={{ color: 'hsl(18 100% 44%)' }}>
                    {t.error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="btn-primary self-start mt-2 disabled:opacity-50"
                >
                  {state === 'loading' ? t.sending : t.submit}
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </form>
  )
}

function InputField({
  name, label, type = 'text', required = false, value, onChange,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-caption font-medium"
        style={{ color: 'hsl(var(--text-secondary))' }}
      >
        {label}
        {required && <span style={{ color: 'hsl(var(--text-tertiary))' }}> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-150"
        style={{
          background: 'hsl(var(--bg-secondary))',
          border: '1px solid hsl(var(--border-subtle))',
          color: 'hsl(var(--text-primary))',
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border-hover))')}
        onBlur={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border-subtle))')}
      />
    </div>
  )
}
