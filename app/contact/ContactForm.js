'use client'

import { useState } from 'react'
import { DISCOVERY_CALL_URL } from '@/lib/site'

// ── Data ──────────────────────────────────────────────────────────────────────

const REFERRAL_OPTIONS = [
  'Instagram',
  'Facebook',
  'Google search',
  'Referral',
  'Other',
]

// ── Helpers ───────────────────────────────────────────────────────────────────

const inputBase =
  'w-full bg-white border border-[#9A7A62] rounded-lg px-4 py-3 text-[15px] text-brown font-sans outline-none transition-colors duration-150 focus:border-orange placeholder:text-[#C4A98A]'

function formatPhone(digits) {
  const d = (digits || '').replace(/\D/g, '').slice(0, 10)
  if (d.length <= 3) return d
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
}

function Label({ children, required }) {
  return (
    <label className="block text-[14px] font-medium text-brown mb-1">
      {children}
      {required && <span className="text-orange ml-1">*</span>}
    </label>
  )
}

function HelperText({ children }) {
  return <p className="text-[13px] text-muted italic mt-1 mb-2">{children}</p>
}

function SectionHeader({ children }) {
  return (
    <p className="font-serif text-sm font-bold tracking-widest uppercase text-orange mb-6 pb-3 border-b-2 border-orange">
      {children}
    </p>
  )
}

function FieldError({ msg }) {
  if (!msg) return null
  return <p className="text-[12px] text-red-600 mt-1">{msg}</p>
}

// ── Single-select toggle pills ────────────────────────────────────────────────

function SingleTogglePills({ options, selected, onChange, error }) {
  return (
    <div className={`flex flex-wrap gap-2 ${error ? 'p-2 rounded-lg border border-red-500' : ''}`}>
      {options.map((opt) => {
        const active = selected === opt
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(active ? '' : opt)}
            className={`px-4 py-2 rounded-full border text-[14px] font-sans transition-colors duration-150 ${
              active
                ? 'bg-orange border-orange text-cream'
                : 'bg-white border-[#9A7A62] text-brown hover:border-orange/60'
            }`}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

// ── Main form ─────────────────────────────────────────────────────────────────

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    website: '',
    businessType: '',
    helpWith: '',
    howFound: '',
    referralName: '',
    otherSource: '',
    anythingElse: '',
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function set(key, value) {
    setFields((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: '' }))
  }

  function validate() {
    const e = {}

    if (!fields.name.trim()) e.name = 'Name is required.'
    if (!fields.email.trim()) {
      e.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = 'Please enter a valid email address.'
    }
    if (!fields.businessName.trim()) e.businessName = 'Business name is required.'
    if (!fields.businessType.trim()) e.businessType = 'Business type is required.'
    if (!fields.howFound) e.howFound = 'Please select an option.'
    if (fields.howFound === 'Referral' && !fields.referralName.trim())
      e.referralName = 'Please tell us who to thank.'
    if (fields.howFound === 'Other' && !fields.otherSource.trim())
      e.otherSource = 'Please describe how you found us.'

    return e
  }

  async function handleSubmit() {
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      setTimeout(() => {
        const el = document.querySelector('[data-error="true"]')
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
      return
    }

    setLoading(true)
    setSubmitError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const data = await res.json()

      if (data.success) {
        window.location.href = DISCOVERY_CALL_URL
      } else {
        setSubmitError('Something went wrong. Please email us at hello@canopycreativeco.com')
      }
    } catch {
      setSubmitError('Something went wrong. Please email us at hello@canopycreativeco.com')
    } finally {
      setLoading(false)
    }
  }

  const showReferral = fields.howFound === 'Referral'
  const showOther = fields.howFound === 'Other'

  return (
    <div className="flex flex-col gap-14">

      {/* ── SECTION: ABOUT YOU ── */}
      <div className="flex flex-col gap-6">
        <SectionHeader>About You</SectionHeader>

        {/* Name */}
        <div data-error={!!errors.name || undefined}>
          <Label required>Your name</Label>
          <input
            type="text"
            value={fields.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="Jane Smith"
            className={`${inputBase} ${errors.name ? 'border-red-500' : ''}`}
          />
          <FieldError msg={errors.name} />
        </div>

        {/* Email */}
        <div data-error={!!errors.email || undefined}>
          <Label required>Email address</Label>
          <input
            type="email"
            value={fields.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="jane@yourbusiness.com"
            className={`${inputBase} ${errors.email ? 'border-red-500' : ''}`}
          />
          <FieldError msg={errors.email} />
        </div>

        {/* Phone */}
        <div>
          <Label>Phone number</Label>
          <input
            type="tel"
            value={formatPhone(fields.phone)}
            onChange={(e) => set('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
            placeholder="(555) 000-0000"
            className={inputBase}
          />
        </div>
      </div>

      {/* ── SECTION: ABOUT YOUR BUSINESS ── */}
      <div className="flex flex-col gap-6">
        <SectionHeader>About Your Business</SectionHeader>

        {/* Business name */}
        <div data-error={!!errors.businessName || undefined}>
          <Label required>Business name</Label>
          <input
            type="text"
            value={fields.businessName}
            onChange={(e) => set('businessName', e.target.value)}
            placeholder="Your Studio Name"
            className={`${inputBase} ${errors.businessName ? 'border-red-500' : ''}`}
          />
          <FieldError msg={errors.businessName} />
        </div>

        {/* Business website */}
        <div>
          <Label>Business website</Label>
          <input
            type="text"
            value={fields.website}
            onChange={(e) => set('website', e.target.value)}
            placeholder="yourbusiness.com"
            className={inputBase}
          />
        </div>

        {/* Business type */}
        <div data-error={!!errors.businessType || undefined}>
          <Label required>What type of business do you have?</Label>
          <HelperText>
            For example, interior design, e-commerce, service-based, product-based, etc.
          </HelperText>
          <input
            type="text"
            value={fields.businessType}
            onChange={(e) => set('businessType', e.target.value)}
            placeholder="Interior design studio"
            className={`${inputBase} ${errors.businessType ? 'border-red-500' : ''}`}
          />
          <FieldError msg={errors.businessType} />
        </div>

        {/* Help with */}
        <div>
          <Label>In one or two sentences, what are you looking for help with?</Label>
          <HelperText>
            No need to go into detail yet. We'll dig into everything on our call.
          </HelperText>
          <textarea
            value={fields.helpWith}
            onChange={(e) => set('helpWith', e.target.value)}
            rows={3}
            placeholder="We run an interior design firm and want help getting AI wired into our day-to-day systems. Also curious about the monthly demo."
            className={`${inputBase} resize-none`}
          />
        </div>
      </div>

      {/* ── SECTION: A LITTLE MORE ── */}
      <div className="flex flex-col gap-6">
        <SectionHeader>A Little More</SectionHeader>

        {/* How did you find us, single-select */}
        <div data-error={!!errors.howFound || undefined}>
          <Label required>How did you find us?</Label>
          <div className="mt-3">
            <SingleTogglePills
              options={REFERRAL_OPTIONS}
              selected={fields.howFound}
              onChange={(v) => {
                set('howFound', v)
                if (v !== 'Referral') set('referralName', '')
                if (v !== 'Other') set('otherSource', '')
              }}
              error={errors.howFound}
            />
          </div>
          <FieldError msg={errors.howFound} />

          {/* Conditional: Referral */}
          <div
            className={`overflow-hidden transition-all duration-200 ${
              showReferral ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div data-error={!!errors.referralName || undefined}>
              <Label required={showReferral}>Tell us who to thank</Label>
              <input
                type="text"
                value={fields.referralName}
                onChange={(e) => set('referralName', e.target.value)}
                placeholder="Their name or business"
                className={`${inputBase} ${errors.referralName ? 'border-red-500' : ''}`}
                tabIndex={showReferral ? 0 : -1}
              />
              <FieldError msg={errors.referralName} />
            </div>
          </div>

          {/* Conditional: Other */}
          <div
            className={`overflow-hidden transition-all duration-200 ${
              showOther ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div data-error={!!errors.otherSource || undefined}>
              <Label required={showOther}>Please describe</Label>
              <input
                type="text"
                value={fields.otherSource}
                onChange={(e) => set('otherSource', e.target.value)}
                placeholder="How did you hear about us?"
                className={`${inputBase} ${errors.otherSource ? 'border-red-500' : ''}`}
                tabIndex={showOther ? 0 : -1}
              />
              <FieldError msg={errors.otherSource} />
            </div>
          </div>
        </div>

        {/* Anything else */}
        <div>
          <Label>Is there anything else you'd like us to know before our call?</Label>
          <HelperText>
            Completely optional. Share anything you think would be helpful.
          </HelperText>
          <textarea
            value={fields.anythingElse}
            onChange={(e) => set('anythingElse', e.target.value)}
            rows={4}
            className={`${inputBase} resize-none`}
          />
        </div>
      </div>

      {/* ── SUBMIT ── */}
      <div>
        {loading ? (
          <div className="flex justify-center py-2">
            <svg className="animate-spin" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="15" stroke="rgba(204,78,0,0.2)" strokeWidth="3" />
              <path d="M18 3a15 15 0 0 1 15 15" stroke="#CC4E00" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-orange text-cream font-sans font-semibold text-[16px] py-4 rounded-lg transition-colors duration-150 hover:bg-[#B34400]"
          >
            Schedule Call
          </button>
        )}

        {submitError && (
          <p className="mt-4 text-[14px] text-red-600 leading-[1.6]">{submitError}</p>
        )}
      </div>
    </div>
  )
}
