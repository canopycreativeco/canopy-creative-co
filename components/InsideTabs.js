'use client'

import { useState } from 'react'
import { CANOPY_CHECKOUT_URL } from '@/lib/site'
import { IconSprout, IconCalendar, IconLearning, IconQuestion, IconChecklist } from '@/components/Icons'

/* What's inside The Canopy, one card per part. Same order as everywhere else on the site,
   with the session split into its three member-facing pieces. */
const PARTS = [
  {
    key: 'roots',
    tab: 'The Roots',
    Icon: IconSprout,
    title: 'The Roots',
    lead: 'The foundations track, where you start.',
    items: ['The video course', 'The prompt cheat sheet', 'The starter workspaces'],
  },
  {
    key: 'session',
    tab: 'The monthly session',
    Icon: IconCalendar,
    title: 'A new session every month',
    lead: 'Pre-recorded and released the third Wednesday.',
    items: [
      'One real workflow, built start to finish',
      'The replay, the starter prompt and the use cases',
      'The session’s two tools, added to The Tool Shed',
    ],
  },
  {
    key: 'library',
    tab: 'The Session Library',
    Icon: IconLearning,
    title: 'The Session Library',
    lead: 'Every past session, including the ones released before you joined.',
    items: ['5 past sessions so far', 'Every replay, starter prompt and use case', 'Yours from day one'],
  },
  {
    key: 'questions',
    tab: 'Questions anytime',
    Icon: IconQuestion,
    title: 'Questions anytime',
    lead: 'Post a question in The Canopy and get answers from our team.',
    items: [
      'Ask about a session, a prompt, or your own workflow',
      'Written answers from our team',
      'No session to wait for',
    ],
  },
  {
    key: 'toolshed',
    tab: 'The Tool Shed',
    Icon: IconChecklist,
    title: 'The Tool Shed',
    lead: 'The full library of finished skills and prompts.',
    items: ['25+ tools so far', 'New skills and prompts added regularly', 'Everything from day one'],
  },
]

export default function InsideTabs() {
  const [active, setActive] = useState(PARTS[0].key)
  const part = PARTS.find((p) => p.key === active)
  const { Icon } = part

  return (
    <div>
      <div role="tablist" aria-label="What's inside The Canopy" className="grid grid-cols-5 gap-3 mb-6 max-md:grid-cols-2">
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
                'text-[13.5px] font-semibold tracking-[0.02em] px-4 py-[14px] rounded-[8px] border-[1.5px] transition-colors duration-200',
                selected
                  ? 'bg-orange border-orange text-cream'
                  : 'bg-[#FFFCF6] border-brown/20 text-brown hover:border-orange',
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
        className="bg-[#FFFCF6] rounded-[8px] border-2 border-orange px-10 py-10 shadow-[0_6px_26px_rgba(59,30,8,0.10)] max-md:px-6 max-md:py-8"
      >
        <div className="flex items-start gap-5 mb-6">
          <span className="shrink-0 w-14 h-14 rounded-full bg-orange text-cream flex items-center justify-center">
            <Icon size={28} />
          </span>
          <div>
            <h3 className="font-serif text-[26px] font-bold text-brown leading-[1.2]">{part.title}</h3>
            <p className="text-[16px] text-brown/80 leading-[1.7] mt-1">{part.lead}</p>
          </div>
        </div>
        <ul className="list-none m-0 p-0 mb-8 max-w-[560px]">
          {part.items.map((item) => (
            <li
              key={item}
              className="text-[15px] font-medium text-brown/85 py-[9px] border-b border-brown/10 flex items-start gap-[11px] first:border-t first:border-brown/10"
            >
              <span className="w-[6px] h-[6px] rounded-full bg-orange shrink-0 mt-[8px]" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
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
  )
}
