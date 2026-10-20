'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CANOPY_CHECKOUT_URL } from '@/lib/site'
import { IconSparkle } from '@/components/Icons'

/* What's inside The Canopy, one tab per part. Copy approved Oct 20, 2026, use as written.
   Screenshots are member views from Circle, in public/images/canopy. A part with no image
   (image: null) still renders a complete panel, the text column just spans the width. */
const PARTS = [
  {
    key: 'roots',
    tab: 'The Roots',
    title: 'Start with the foundations.',
    body: 'A short video course that sets up your AI to know your business.',
    items: ['The video course', 'The prompt cheat sheet', 'The starter workspaces'],
    image: {
      src: '/images/canopy/roots.png',
      width: 3414,
      height: 1998,
      alt: 'The Roots course in The Canopy, showing the first lessons.',
    },
  },
  {
    key: 'session',
    tab: 'The monthly session',
    title: 'One real workflow, built start to finish.',
    body: 'A new session every third Wednesday. We take one job off your plate and wire it in, step by step.',
    items: ['Watch on your schedule', 'The starter prompt and use cases', 'Two new tools in The Tool Shed'],
    image: {
      src: '/images/canopy/monthly-session.png',
      width: 3417,
      height: 2008,
      alt: 'The Canopy calendar, showing the next monthly sessions.',
    },
  },
  {
    key: 'library',
    tab: 'The Session Library',
    title: 'Missed one? It’s all here.',
    body: 'Every past session, including the ones released before you joined.',
    items: ['Sorted by department', 'Each replay comes with its tools', 'New sessions added monthly'],
    image: {
      src: '/images/canopy/session-library.png',
      width: 3438,
      height: 2001,
      alt: 'The Session Library in The Canopy, showing past session replays sorted by department.',
    },
  },
  {
    key: 'questions',
    tab: 'Questions anytime',
    title: 'Ask it in writing.',
    body: 'Post a question in The Canopy and get a written answer from our team.',
    items: ['Ask about your own workflow', 'Answers from our team', 'Learn from everyone’s questions'],
    image: {
      src: '/images/canopy/questions.png',
      width: 1960,
      height: 700,
      alt: 'The Questions space cover in The Canopy, a hand-drawn question mark in a box.',
    },
  },
  {
    key: 'toolshed',
    tab: 'The Tool Shed',
    title: 'Finished tools, ready to use.',
    body: 'The full library of skills and prompts, organized by department.',
    items: ['25+ tools', 'Operations to leadership', 'New skills and prompts added regularly'],
    image: {
      src: '/images/canopy/tool-shed.png',
      width: 3427,
      height: 1702,
      alt: 'The Tool Shed in The Canopy, showing skills and prompts filtered by department.',
    },
  },
]

export default function InsideTabs() {
  const [active, setActive] = useState(PARTS[0].key)
  const part = PARTS.find((p) => p.key === active)

  return (
    <div>
      {/* Desktop: five across. Phone: one row that scrolls sideways inside itself, never the page. */}
      <div
        role="tablist"
        aria-label="What's inside The Canopy"
        className="grid grid-cols-5 gap-3 mb-5 max-md:flex max-md:overflow-x-auto max-md:-mx-6 max-md:px-6 max-md:pb-2"
      >
        {PARTS.map(({ key, tab }) => {
          const selected = key === active
          return (
            <button
              key={key}
              type="button"
              role="tab"
              id={`inside-tab-${key}`}
              aria-selected={selected}
              aria-controls="inside-panel"
              onClick={() => setActive(key)}
              className={[
                'text-[14px] font-semibold tracking-[0.02em] text-brown px-5 py-[18px] rounded-[18px] border-2 border-brown transition-colors duration-200 max-md:shrink-0 max-md:whitespace-nowrap',
                selected ? 'bg-cream-dark' : 'bg-[#FFFCF6] hover:bg-cream-mid',
              ].join(' ')}
            >
              {tab}
            </button>
          )
        })}
      </div>

      <div
        id="inside-panel"
        role="tabpanel"
        aria-labelledby={`inside-tab-${active}`}
        className={[
          'bg-cream-dark rounded-[24px] border-2 border-brown px-12 py-12 max-md:px-6 max-md:py-8',
          part.image
            ? 'md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-x-12 md:items-center'
            : '',
        ].join(' ')}
      >
        <div className="md:col-start-1 md:row-start-1 md:self-end">
          <h3 className="font-serif font-bold italic text-orange text-[30px] leading-[1.2] mb-4 max-md:text-[26px]">
            {part.title}
          </h3>
          <p className="text-[16.5px] text-brown/85 leading-[1.75] mb-6 max-w-[460px]">{part.body}</p>
          <ul className="list-none m-0 p-0 mb-8 space-y-3">
            {part.items.map((item) => (
              <li key={item} className="text-[15.5px] font-medium text-brown flex items-start gap-3">
                <IconSparkle size={28} className="shrink-0 -mt-[4px]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {part.image && (
          <div className="md:col-start-2 md:row-start-1 md:row-span-2 max-md:mb-8">
            <div className="rounded-[16px] border-2 border-brown overflow-hidden bg-cream shadow-[0_14px_32px_rgba(59,30,8,0.18)]">
              <Image
                key={part.key}
                src={part.image.src}
                width={part.image.width}
                height={part.image.height}
                alt={part.image.alt}
                sizes="(max-width: 768px) 92vw, 560px"
                className="block w-full h-auto"
              />
            </div>
          </div>
        )}

        <div className="md:col-start-1 md:row-start-2 md:self-start">
          <a
            href={CANOPY_CHECKOUT_URL}
            target="_blank"
            rel="noopener"
            className="inline-block bg-orange text-cream text-[14px] font-semibold tracking-[0.04em] px-8 py-[15px] rounded-full no-underline transition-all duration-200 hover:bg-[#b04400] hover:-translate-y-px"
          >
            Join The Canopy
          </a>
        </div>
      </div>
    </div>
  )
}
