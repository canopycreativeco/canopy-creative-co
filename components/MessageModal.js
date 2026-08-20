'use client'

import { useState, useEffect } from 'react'
import MessageForm from './MessageForm'

/* An inline button that opens the message form in a centred modal.
   The persistent corner launcher lives in MessageWidget. */

export default function SendMessageButton({ className, children }) {
  const [open, setOpen] = useState(false)
  // remount the form on each open so a previous submission is cleared
  const [formKey, setFormKey] = useState(0)

  useEffect(() => {
    if (!open) return

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
    setFormKey((k) => k + 1)
    setOpen(true)
  }

  return (
    <>
      <button type="button" onClick={openModal} className={className}>
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[220] flex items-center justify-center bg-[rgba(59,30,8,0.55)] px-4 py-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Send us a message"
            className="relative w-full max-w-[480px] max-h-[90vh] overflow-y-auto bg-cream rounded-[14px] p-8 sm:p-10 shadow-2xl"
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

            <MessageForm key={formKey} onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
