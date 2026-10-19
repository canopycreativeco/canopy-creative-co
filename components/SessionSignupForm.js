'use client'

import { useEffect, useRef, useState } from 'react'

/* The "Send me the session" form. One field. Used on /session/signup and on /session
   between sessions, so the two never drift apart. `dark` is for ink sections, `stacked`
   puts the button under the field for narrow cards. */

// Off-screen rather than display:none, so bots that skip hidden fields still see it
const honeypotStyle = {
  position: 'absolute',
  left: '-10000px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
}

const inputBase =
  'flex-1 min-w-0 bg-white border border-[#9A7A62] rounded-full px-5 py-[14px] text-[15px] text-brown font-sans outline-none transition-colors duration-150 focus:border-orange placeholder:text-[#C4A98A]'

const submitButton =
  'shrink-0 bg-orange text-cream font-sans font-semibold text-[14px] tracking-[0.04em] px-8 py-[15px] rounded-full transition-colors duration-200 hover:bg-[#b04400] disabled:opacity-60 disabled:cursor-not-allowed'

export default function SessionSignupForm({ dark = false, stacked = false }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const honeypotRef = useRef(null)
  const loadedAtRef = useRef(0)

  useEffect(() => {
    loadedAtRef.current = Date.now()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    setSending(true)
    setSubmitError(false)

    try {
      const res = await fetch('/api/session-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          page: window.location.pathname,
          website: honeypotRef.current?.value || '',
          loadedAt: loadedAtRef.current,
        }),
      })
      const data = await res.json()
      if (data.success) setSent(true)
      else setSubmitError(true)
    } catch {
      setSubmitError(true)
    } finally {
      setSending(false)
    }
  }

  const text = dark ? 'text-cream/85' : 'text-brown/85'

  if (sent) {
    return (
      <div role="status" className={`text-[16px] leading-[1.7] ${text}`}>
        <p className={`font-serif text-[20px] font-bold mb-1 ${dark ? 'text-cream' : 'text-brown'}`}>
          You&rsquo;re on the list.
        </p>
        <p>The link arrives by email on release day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="session-signup-email" className="sr-only">
        Email address
      </label>
      <div className={`flex gap-3 ${stacked ? 'flex-col' : 'max-md:flex-col'}`}>
        <input
          id="session-signup-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setError('')
          }}
          placeholder="you@yourbusiness.com"
          className={`${inputBase} ${error ? 'border-red-500' : ''}`}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? 'session-signup-error' : undefined}
        />
        <button type="submit" disabled={sending} className={submitButton}>
          {sending ? 'Sending...' : 'Send me the session.'}
        </button>
      </div>
      {/* Honeypot, same as the contact form: people never see it, bots fill it in. */}
      <div style={honeypotStyle} aria-hidden="true">
        <label htmlFor="session-hpt">Leave this field empty</label>
        <input ref={honeypotRef} id="session-hpt" type="text" name="hpt_field" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      {error && (
        <p id="session-signup-error" className="text-[13px] text-red-600 mt-2">
          {error}
        </p>
      )}
      {submitError && (
        <p className={`text-[14px] leading-[1.6] mt-3 ${dark ? 'text-[#FFEB99]' : 'text-red-600'}`}>
          Something went wrong on our end. Email us at{' '}
          <a href="mailto:hello@canopycreativeco.com" className="underline underline-offset-[2px]">
            hello@canopycreativeco.com
          </a>{' '}
          and we will send it to you.
        </p>
      )}
    </form>
  )
}
