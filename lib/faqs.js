// The Canopy FAQs. The Canopy page shows all of them, the homepage shows the price-free ones
// (pricing appears only on /the-canopy and the Start here door card).
export const CANOPY_FAQS = [
  {
    q: 'What if I miss the free week?',
    a: 'Missed it? The replay lives in The Canopy, with the starter prompt, the use cases and the session’s tools. Every past session stays in the Session Library, including the ones released before you joined.',
  },
  {
    q: 'If the sessions are free, why pay?',
    a: 'Because each session is free for a few days, and the session is one piece. The membership is The Roots, the replay of every session, the use cases that take each prompt further, the tools from each session, questions answered by our team, and The Tool Shed with every finished skill and prompt.',
  },
  {
    q: 'How do I ask a question?',
    a: 'Post it in The Canopy, anytime, and our team answers in writing.',
  },
  {
    q: 'Annual or monthly?',
    a: 'Both include everything. Annual is $497 a year, monthly is $65 a month, and annual saves $283 a year compared to monthly. You pick at checkout.',
  },
  {
    q: 'Do I need to be technical?',
    a: 'No. If you can paste text into Claude or ChatGPT, you can run every starter. The sessions show the full build so you understand what you are running, and the starter is written to work on day one.',
  },
  {
    q: 'What do I need?',
    a: 'One AI tool. Claude is what you will see on screen, and ChatGPT works too. We recommend a paid plan, but feel free to start on a free plan and decide when it makes sense to upgrade as you use AI more often in your work.',
  },
  {
    q: 'What happens at renewal?',
    a: 'Your membership renews automatically at the end of each period, yearly or monthly, until you cancel. The full terms are in our Terms of Use, and they are the same at checkout.',
  },
  {
    q: 'How do I cancel?',
    a: 'From your account, any time. Cancelling stops future charges, and your access runs to the end of the period you already paid for.',
  },
]

const HOME_QUESTIONS = [
  'Do I need to be technical?',
  'What do I need?',
  'What if I miss the free week?',
  'How do I ask a question?',
  'How do I cancel?',
]

export const HOME_FAQS = HOME_QUESTIONS.map((q) => CANOPY_FAQS.find((f) => f.q === q)).filter(Boolean)
