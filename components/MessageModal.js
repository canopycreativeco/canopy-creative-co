'use client'

import { useState, useRef, useEffect } from 'react'

// ── Helpers ───────────────────────────────────────────────────────────────────

const inputBase =
  'w-full bg-white border border-[#9A7A62] rounded-lg px-4 py-3 text-[15px] text-brown font-sans outline-none transition-colors duration-150 focus:border-orange placeholder:text-[#C4A98A]'

const submitButton =
  'w-full bg-orange text-cream font-sans font-semibold text-[14px] tracking-[0.04em] py-[15px] rounded-[3px] transition-colors duration-200 hover:bg-[#b04400]'

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

// ── Send message button + modal ───────────────────────────────────────────────

export default function SendMessageButton({ className, children }) {
  const [open, setOpen] = useState(false)
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
    if (!open) return

    if (nameInputRef.current) nameInputRef.current.focus()

    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  function openModal() {
    if (sent) {
      setFields({ name: '', businessName: '', email: '', message: '' })
      setErrors({})
      setSent(false)
    }
    setSubmitError(false)
    setOpen(true)
  }

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

  return (
    <>
      <button type="button" onClick={openModal} className={className}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(59,30,8,0.55)] px-4 py-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Send us a message"
            className="relative w-full max-w-[480px] max-h-[90vh] overflow-y-auto bg-cream rounded-[4px] p-8 sm:p-10 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-[22px] leading-none text-brown/50 transition-colors duration-150 hover:text-brown"
            >
              &times;
            </button>

            <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-6">
              Send us a message
            </p>

            {sent ? (
              <div>
                <p className="text-[15px] text-brown leading-[1.7] mb-8">
                  Message sent. A confirmation is on its way to your inbox, and
                  a real person will reply soon.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className={submitButton}
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {/* Name */}
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

                {/* Business name */}
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

                {/* Email */}
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

                {/* Message */}
                <div>
                  <Label required>Message</Label>
                  <textarea
                    value={fields.message}
                    onChange={(e) => set('message', e.target.value)}
                    rows={4}
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
            )}
          </div>
        </div>
      )}
    </>
  )
}
