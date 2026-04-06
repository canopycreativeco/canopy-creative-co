'use client'

import { useState, useRef, useEffect } from 'react'

// ── Data ──────────────────────────────────────────────────────────────────────

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
]

const ACCOUNTING_OPTIONS = [
  'QuickBooks Online',
  'Design Manager',
  'Studio Designer',
  "I don't have accounting software yet",
  'Other',
]

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

// ── State multi-select ────────────────────────────────────────────────────────

function StateSelector({ selected, onChange, error }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  const filtered = US_STATES.filter(
    (s) => s.toLowerCase().includes(query.toLowerCase()) && !selected.includes(s)
  )

  useEffect(() => {
    function handleClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function add(state) {
    onChange([...selected, state])
    setQuery('')
  }

  function remove(state) {
    onChange(selected.filter((s) => s !== state))
  }

  return (
    <div ref={containerRef} className="relative">
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {selected.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1 bg-orange text-cream text-[13px] font-medium px-3 py-1 rounded-full"
            >
              {s}
              <button
                type="button"
                onClick={() => remove(s)}
                className="ml-1 leading-none text-cream/70 hover:text-cream transition-colors"
                aria-label={`Remove ${s}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
      <input
        type="text"
        value={query}
        onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
        onFocus={() => setOpen(true)}
        placeholder="Search states…"
        className={`${inputBase} ${error ? 'border-red-500' : ''}`}
      />
      {open && filtered.length > 0 && (
        <ul className="absolute z-50 mt-1 w-full bg-white border border-[#9A7A62]/40 rounded-lg shadow-lg max-h-52 overflow-y-auto">
          {filtered.map((s) => (
            <li key={s}>
              <button
                type="button"
                onClick={() => { add(s); setOpen(false) }}
                className="w-full text-left px-4 py-2 text-[14px] text-brown hover:bg-cream transition-colors"
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
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
    instagram: '',
    states: [],
    businessType: '',
    helpWith: '',
    accountingSoftware: '',
    accountingOther: '',
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
    if (fields.states.length === 0) e.states = 'Please select at least one state.'
    if (!fields.businessType.trim()) e.businessType = 'Business type is required.'
    if (!fields.accountingSoftware) e.accountingSoftware = 'Please select an option.'
    if (fields.accountingSoftware === 'Other' && !fields.accountingOther.trim())
      e.accountingOther = 'Please describe your accounting software.'
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

    const payload = {
      ...fields,
      instagram: fields.instagram ? `@${fields.instagram}` : '',
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (data.success) {
        window.location.href = 'https://calendly.com/dave-canopycreativeco/discovery-call'
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
  const showAccountingOther = fields.accountingSoftware === 'Other'

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
            value={fields.phone}
            onChange={(e) => set('phone', e.target.value)}
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

        {/* Business Instagram */}
        <div>
          <Label>Business Instagram handle</Label>
          <div className="flex items-center border border-[#9A7A62] rounded-lg bg-white overflow-hidden transition-colors duration-150 focus-within:border-orange">
            <span className="pl-4 pr-1 text-[15px] text-muted select-none">@</span>
            <input
              type="text"
              value={fields.instagram}
              onChange={(e) => set('instagram', e.target.value.replace(/^@/, ''))}
              placeholder="yourstudio"
              className="flex-1 bg-transparent py-3 pr-4 text-[15px] text-brown outline-none placeholder:text-[#C4A98A]"
            />
          </div>
        </div>

        {/* States */}
        <div data-error={!!errors.states || undefined}>
          <Label required>In which state(s) does your business operate?</Label>
          <StateSelector
            selected={fields.states}
            onChange={(v) => { set('states', v); setErrors((e) => ({ ...e, states: '' })) }}
            error={errors.states}
          />
          <FieldError msg={errors.states} />
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
            No need to go into detail yet — we'll dig into everything on our call.
          </HelperText>
          <textarea
            value={fields.helpWith}
            onChange={(e) => set('helpWith', e.target.value)}
            rows={3}
            placeholder="We're looking for help setting up our bookkeeping and getting a better handle on cash flow."
            className={`${inputBase} resize-none`}
          />
        </div>
      </div>

      {/* ── SECTION: A LITTLE MORE ── */}
      <div className="flex flex-col gap-6">
        <SectionHeader>A Little More</SectionHeader>

        {/* Accounting software — single-select */}
        <div data-error={!!errors.accountingSoftware || undefined}>
          <Label required>What accounting software does your business use?</Label>
          <div className="mt-3">
            <SingleTogglePills
              options={ACCOUNTING_OPTIONS}
              selected={fields.accountingSoftware}
              onChange={(v) => {
                set('accountingSoftware', v)
                if (v !== 'Other') set('accountingOther', '')
              }}
              error={errors.accountingSoftware}
            />
          </div>
          <FieldError msg={errors.accountingSoftware} />

          {/* Conditional: Other accounting */}
          <div
            className={`overflow-hidden transition-all duration-200 ${
              showAccountingOther ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div data-error={!!errors.accountingOther || undefined}>
              <Label required={showAccountingOther}>Please describe your accounting software</Label>
              <input
                type="text"
                value={fields.accountingOther}
                onChange={(e) => set('accountingOther', e.target.value)}
                placeholder="e.g. FreshBooks, Wave, spreadsheets…"
                className={`${inputBase} ${errors.accountingOther ? 'border-red-500' : ''}`}
                tabIndex={showAccountingOther ? 0 : -1}
              />
              <FieldError msg={errors.accountingOther} />
            </div>
          </div>
        </div>

        {/* How did you find us — single-select */}
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
            Completely optional — feel free to share anything that feels relevant.
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
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-orange text-cream font-sans font-semibold text-[16px] py-4 rounded-lg transition-colors duration-150 hover:bg-[#B34400] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending…' : 'Schedule Call'}
        </button>

        {submitError && (
          <p className="mt-4 text-[14px] text-red-600 leading-[1.6]">{submitError}</p>
        )}
      </div>
    </div>
  )
}
