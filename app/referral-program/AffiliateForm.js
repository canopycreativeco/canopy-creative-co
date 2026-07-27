'use client'

import { useState } from 'react'
import Link from 'next/link'

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

function FieldError({ msg }) {
  if (!msg) return null
  return <p className="text-[12px] text-red-600 mt-1">{msg}</p>
}

// ── Main form ─────────────────────────────────────────────────────────────────

export default function AffiliateForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    paypalEmail: '',
    shareWhere: '',
    agree: false,
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function set(key, value) {
    setFields((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: '' }))
  }

  function validate() {
    const e = {}
    const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

    if (!fields.name.trim()) e.name = 'Name is required.'
    if (!fields.email.trim()) {
      e.email = 'Email is required.'
    } else if (!emailOk(fields.email)) {
      e.email = 'Please enter a valid email address.'
    }
    if (!fields.paypalEmail.trim()) {
      e.paypalEmail = 'PayPal email is required.'
    } else if (!emailOk(fields.paypalEmail)) {
      e.paypalEmail = 'Please enter a valid email address.'
    }
    if (!fields.agree) e.agree = 'Please review and agree to the Affiliate Program Terms.'

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
      const res = await fetch('/api/affiliate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        setSubmitError('There was an issue submitting the form. Please email hello@canopycreativeco.com with your name, email, PayPal email, and where you plan to share your link, and we will get you set up from there.')
      }
    } catch {
      setSubmitError('There was an issue submitting the form. Please email hello@canopycreativeco.com with your name, email, PayPal email, and where you plan to share your link, and we will get you set up from there.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white border border-[#9A7A62]/40 rounded-lg p-8">
        <p className="font-serif font-bold text-brown text-[20px] mb-3">Application received.</p>
        <p className="text-[15px] text-brown/75 leading-[1.7]">
          A confirmation is on its way to your inbox, and you'll hear back from us within 2
          business days.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
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
        <HelperText>
          If you're a current student, use the email on your course account.
        </HelperText>
        <input
          type="email"
          value={fields.email}
          onChange={(e) => set('email', e.target.value)}
          placeholder="jane@yourbusiness.com"
          className={`${inputBase} ${errors.email ? 'border-red-500' : ''}`}
        />
        <FieldError msg={errors.email} />
      </div>

      {/* PayPal email */}
      <div data-error={!!errors.paypalEmail || undefined}>
        <Label required>PayPal email</Label>
        <HelperText>
          Where your quarterly payouts will go. It can be the same as your email above.
        </HelperText>
        <input
          type="email"
          value={fields.paypalEmail}
          onChange={(e) => set('paypalEmail', e.target.value)}
          placeholder="jane@yourbusiness.com"
          className={`${inputBase} ${errors.paypalEmail ? 'border-red-500' : ''}`}
        />
        <FieldError msg={errors.paypalEmail} />
      </div>

      {/* Where they plan to share */}
      <div>
        <Label>Where do you plan to share your link?</Label>
        <HelperText>
          Optional. Your newsletter, Instagram, friends, wherever feels natural.
        </HelperText>
        <textarea
          value={fields.shareWhere}
          onChange={(e) => set('shareWhere', e.target.value)}
          rows={3}
          className={`${inputBase} resize-none`}
        />
      </div>

      {/* Terms agreement */}
      <div data-error={!!errors.agree || undefined}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={fields.agree}
            onChange={(e) => set('agree', e.target.checked)}
            className="mt-1 h-4 w-4 accent-orange cursor-pointer"
          />
          <span className="text-[14px] text-brown leading-[1.6]">
            I have read and agree to the{' '}
            <Link
              href="/legal#affiliate"
              target="_blank"
              className="text-orange no-underline hover:underline"
            >
              Affiliate Program Terms
            </Link>
            <span className="text-orange ml-1">*</span>
          </span>
        </label>
        <FieldError msg={errors.agree} />
      </div>

      {/* Submit */}
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
            Apply
          </button>
        )}

        {submitError && (
          <p className="mt-4 text-[14px] text-red-600 leading-[1.6]">{submitError}</p>
        )}
      </div>
    </div>
  )
}
