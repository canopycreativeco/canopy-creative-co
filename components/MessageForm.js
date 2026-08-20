'use client'

import { useState, useRef, useEffect } from 'react'

/* The message form itself, with no opinion about the container it sits in.
   Used by the inline modal (SendMessageButton) and by the floating widget. */

const inputBase =
  'w-full bg-white border border-[#9A7A62] rounded-lg px-4 py-3 text-[15px] text-brown font-sans outline-none transition-colors duration-150 focus:border-orange placeholder:text-[#C4A98A]'

const submitButton =
  'w-full bg-orange text-cream font-sans font-semibold text-[14px] tracking-[0.04em] py-[15px] rounded-full transition-colors duration-200 hover:bg-[#b04400]'

function Label({ children, required }) {
  return (
    <label className="block text-[14px] font-medium text-brown mb-1">
      {children}
      {required && <span className="text-orange ml-1">*</span>}
    </label>
  )
}

function FieldError({ msg }) {
  if (!msg) return null
  return <p className="text-[12px] text-red-600 mt-1">{msg}</p>
}

export default function MessageForm({ compact = false, autoFocus = true, onClose }) {
  const [fields, setFields] = useState({
    name: '',
    businessName: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const nameInputRef = useRef(null)

  useEffect(() => {
    if (autoFocus && nameInputRef.current) nameInputRef.current.focus()
  }, [autoFocus])

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
    if (!fields.message.trim()) e.message = 'Please enter a message.'
    return e
  }

  async function handleSubmit() {
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return
    }

    setSending(true)
    setSubmitError(false)

    try {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div>
        <p className="text-[15px] text-brown leading-[1.7] mb-6">
          Message sent. A confirmation is on its way to your inbox, and a real person will reply
          soon.
        </p>
        <button type="button" onClick={onClose} className={submitButton}>
          Close
        </button>
      </div>
    )
  }

  return (
    <div className={`flex flex-col ${compact ? 'gap-3.5' : 'gap-5'}`}>
      <div>
        <Label required>Your name</Label>
        <input
          ref={nameInputRef}
          type="text"
          value={fields.name}
          onChange={(e) => set('name', e.target.value)}
          placeholder="Jane Smith"
          className={`${inputBase} ${errors.name ? 'border-red-500' : ''}`}
        />
        <FieldError msg={errors.name} />
      </div>

      <div>
        <Label>Business name</Label>
        <input
          type="text"
          value={fields.businessName}
          onChange={(e) => set('businessName', e.target.value)}
          placeholder="Your Studio Name"
          className={inputBase}
        />
      </div>

      <div>
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

      <div>
        <Label required>Message</Label>
        <textarea
          value={fields.message}
          onChange={(e) => set('message', e.target.value)}
          rows={compact ? 3 : 4}
          className={`${inputBase} resize-none ${errors.message ? 'border-red-500' : ''}`}
        />
        <FieldError msg={errors.message} />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={sending}
        className={`${submitButton} disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {sending ? 'Sending...' : 'Send message'}
      </button>

      {submitError && (
        <p className="text-[14px] text-red-600 leading-[1.6]">
          Something went wrong on our end. Email us directly at{' '}
          <a
            href="mailto:hello@canopycreativeco.com"
            className="text-orange no-underline hover:underline"
          >
            hello@canopycreativeco.com
          </a>
        </p>
      )}
    </div>
  )
}
