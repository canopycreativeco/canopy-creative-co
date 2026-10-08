'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import MessageForm from './MessageForm'

/* A persistent launcher in the bottom right corner. Expands into a panel in the
   same corner rather than a centred modal, and deliberately does not lock page
   scroll, so the page stays usable while the form is open. */

// Pages that already put a message form in front of the visitor
const HIDE_ON = ['/contact', '/client-intake-form']

const BASE_OFFSET = 24 // px from the viewport bottom while scrolling
const MOBILE_OFFSET = 16

export default function MessageWidget() {
  const [open, setOpen] = useState(false)
  const [bottom, setBottom] = useState(BASE_OFFSET)
  const panelRef = useRef(null)
  const buttonRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    if (!open) return

    function handleKey(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        if (buttonRef.current) buttonRef.current.focus()
      }
    }
    function handleClickAway(e) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleClickAway)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [open])

  /* Keep the launcher out of the footer. On desktop it rides up with the page until
     its bottom edge meets the wordmark row ([data-pill-anchor] in Footer), so it never
     covers the footer links. On mobile it stops just above the footer. */
  useEffect(() => {
    let raf = 0

    function update() {
      raf = 0
      const vh = window.innerHeight
      const mobile = window.innerWidth < 768
      const base = mobile ? MOBILE_OFFSET : BASE_OFFSET
      let next = base

      if (!mobile) {
        const anchor = document.querySelector('[data-pill-anchor]')
        if (anchor) next = Math.max(base, vh - anchor.getBoundingClientRect().bottom)
      } else {
        const footer = document.querySelector('footer')
        if (footer) next = Math.max(base, vh - footer.getBoundingClientRect().top + base)
      }
      setBottom(Math.round(next))
    }

    function schedule() {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [pathname])

  if (HIDE_ON.includes(pathname)) return null

  return (
    <div
      className="fixed right-6 z-[210] flex flex-col items-end gap-3 max-md:right-4 print:hidden"
      style={{ bottom }}
    >
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Send us a message"
          className="w-[370px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-9rem)] overflow-y-auto bg-cream border border-brown/15 rounded-[14px] shadow-[0_18px_50px_rgba(59,30,8,0.28)] px-6 py-6 origin-bottom-right"
        >
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-orange mb-1">
                Send us a message
              </p>
              <p className="text-[13px] text-brown/65 leading-[1.55]">
                A real person replies, usually same day.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close the message form"
              className="shrink-0 -mt-1 -mr-1 w-8 h-8 rounded-full flex items-center justify-center text-[20px] leading-none text-brown/50 transition-colors duration-150 hover:bg-brown/5 hover:text-brown"
            >
              &times;
            </button>
          </div>

          <MessageForm compact onClose={() => setOpen(false)} />
        </div>
      )}

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? 'Close the message form' : 'Send us a message'}
        className="inline-flex items-center gap-2.5 bg-orange text-cream text-[14px] font-semibold tracking-[0.03em] pl-5 pr-6 py-[13px] rounded-full shadow-[0_8px_26px_rgba(59,30,8,0.30)] transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px cursor-pointer"
      >
        {open ? (
          <>
            <span className="text-[17px] leading-none" aria-hidden="true">
              &times;
            </span>
            Close
          </>
        ) : (
          <>
            {/* envelope */}
            <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="1.6" y="3.6" width="16.8" height="12.8" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M2.6 5.4 L10 11 L17.4 5.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Send us a message
          </>
        )}
      </button>
    </div>
  )
}
