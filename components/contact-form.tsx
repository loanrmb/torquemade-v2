'use client'

import { useState } from 'react'
import { useLang } from './app-provider'
import { strings } from '@/lib/strings'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const lang = useLang()
  const t = strings[lang].contact
  const [state, setState] = useState<FormState>('idle')
  const [selected, setSelected] = useState<Set<number>>(new Set())

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
    const data = new FormData(form)

    // Add selected services as a comma-separated string
    const selectedServices = Array.from(selected)
      .map((i) => t.services[i])
      .join(', ')
    data.set('service', selectedServices)

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setState('success')
        form.reset()
        setSelected(new Set())
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
            ({lang === 'fr' ? 'choix multiple' : 'multiple choice'})
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
                className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-150"
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
          ? lang === 'fr' ? 'Envoi...' : 'Sending...'
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
