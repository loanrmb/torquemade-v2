'use client'

import { useState } from 'react'
import { useLang } from './app-provider'
import { strings } from '@/lib/strings'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const CURRENCY_SYMBOLS: Record<string, string> = {
  CHF: 'CHF',
  EUR: '€',
  USD: '$',
  GBP: '£',
  CAD: 'CA$',
  PLN: 'zł',
}

export function ContactForm() {
  const lang = useLang()
  const t = strings[lang].contact
  const [state, setState] = useState<FormState>('idle')
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [budget, setBudget] = useState<number | null>(null)
  const [currency, setCurrency] = useState<number>(0) // default CHF

  const toggleService = (i: number) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('loading')
    const form = e.currentTarget

    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value
    const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const company = (form.elements.namedItem('company') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
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
        form.reset()
        setSelected(new Set())
        setBudget(null)
        setCurrency(0)
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div
        className="rounded-2xl p-10 text-center"
        style={{
          background: 'hsl(var(--bg-secondary))',
          border: '1px solid hsl(var(--border-subtle))',
        }}
      >
        <p className="text-lg font-medium" style={{ color: 'hsl(var(--text-primary))' }}>
          {t.success}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Name row */}
      <div className="grid grid-cols-1 gap-4 min-720:grid-cols-2">
        <InputField name="firstName" label={t.firstName} required />
        <InputField name="lastName" label={t.lastName} required />
      </div>

      <InputField name="email" label={t.email} type="email" required />
      <InputField name="company" label={t.company} />

      {/* Multi-select service selector */}
      <fieldset className="p-0 m-0 border-0">
        <legend
          className="text-caption font-medium mb-2 block"
          style={{ color: 'hsl(var(--text-secondary))' }}
        >
          {t.serviceLabel}
          <span className="ml-1.5 text-caption" style={{ color: 'hsl(var(--text-tertiary))' }}>
            ({t.multipleChoice})
          </span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {t.services.map((service, i) => {
            const isActive = selected.has(i)
            return (
              <button
                key={i}
                type="button"
                onClick={() => toggleService(i)}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150"
                style={{
                  background: isActive ? 'hsl(var(--bg-inverse))' : 'hsl(var(--bg-secondary))',
                  color: isActive ? 'hsl(var(--bg-primary))' : 'hsl(var(--text-secondary))',
                  border: '1px solid hsl(var(--border-subtle))',
                }}
              >
                {isActive && (
                  <span className="mr-1.5 text-xs">✓</span>
                )}
                {service}
              </button>
            )
          })}
        </div>
      </fieldset>

      {/* Budget selector (optional) — currency first, then ranges */}
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

        {/* Currency row — single line, horizontal scroll on mobile */}
        <div
          className="flex flex-nowrap overflow-x-auto gap-1.5 pb-1 mb-3 scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <span
            className="self-center text-caption mr-1 flex-shrink-0 whitespace-nowrap"
            style={{ color: 'hsl(var(--text-tertiary))' }}
          >
            {t.currencyLabel}
          </span>
          {t.currencies.map((code, i) => {
            const isActive = currency === i
            return (
              <button
                key={code}
                type="button"
                onClick={() => setCurrency(i)}
                className="flex-shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition-colors duration-150"
                style={{
                  background: isActive ? 'hsl(var(--bg-inverse))' : 'hsl(var(--bg-secondary))',
                  color: isActive ? 'hsl(var(--bg-primary))' : 'hsl(var(--text-secondary))',
                  border: '1px solid hsl(var(--border-subtle))',
                }}
              >
                {code}
              </button>
            )
          })}
        </div>

        {/* Budget range row */}
        <div className="flex flex-wrap gap-2">
          {t.budgets.map((range, i) => {
            const isActive = budget === i
            const symbol = CURRENCY_SYMBOLS[t.currencies[currency]]
            return (
              <button
                key={i}
                type="button"
                onClick={() => setBudget(isActive ? null : i)}
                className="rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150"
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
        {state === 'loading'
          ? t.sending
          : t.submit}
      </button>
    </form>
  )
}

function InputField({
  name, label, type = 'text', required = false,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
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
