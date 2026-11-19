// The monthly session.
//
// HOW IT WORKS
// SESSIONS below is a list, oldest first. The site plays the newest session whose showAt
// has passed and whose videoId is filled in. It stays up every day, all month, until the
// next session's showAt arrives. At that moment the next video takes over on its own.
// Nothing to deploy on release day.
//
// If the next session's showAt arrives and its videoId is still the placeholder, the
// current video simply keeps playing. The site never shows a broken player.
//
// THE MONTHLY ROUTINE (any day before release day)
//   1. Find the entry for the next session (the last one in the list). Fill in its
//      videoId, title and inside items. Leave the current session alone.
//   2. Add one new entry under it for the month after, with only its showAt filled in
//      (videoId: 'TO SET', title: null, inside: null). That gives the site the next
//      date to show, as in "Wednesday, January 20".
//   3. Deploy. Older entries can stay. Only the current one and the next one matter.
//
// FIELDS
//   showAt   when this session starts playing, in Eastern wall-clock time
//            ('YYYY-MM-DD HH:MM', usually the Wednesday at 06:00). Daylight saving is
//            handled for you, so never add an offset.
//   videoId  the YouTube video ID from the unlisted upload (the part after v=).
//            'TO SET' until the video is uploaded.
//   title    the session title, shown on the watch card on /the-canopy.
//   inside   what this session added to The Canopy, shown under the video on /session
//            and on the watch card. null hides the block.
//              intro  the line under the label
//              items  the cards, each with an emoji, a name and one line
//              more   the line under the cards (optional)
export const SESSIONS = [
  {
    showAt: '2026-11-18 06:00',
    videoId: 'O3-x4schpIA',
    title: 'Projects: Your business, built in',
    inside: {
      intro:
        'Members receive these today, along with access to every past session and the full Tool Shed.',
      items: [
        {
          emoji: '🏢',
          name: 'The team brain',
          line: 'The starter. One run builds a Project that answers how your business works, who decides what, and how you sound.',
        },
        {
          emoji: '🧱',
          name: 'The Project builder',
          line: 'Set up a Project for any other job, from proposals to client onboarding.',
        },
        {
          emoji: '🎙️',
          name: 'Say it, file it',
          line: 'Turn a voice memo into ready-to-paste updates for your files.',
        },
      ],
      more: 'Plus five ways to take it further, from a new-hire Project to a monthly refresh as your business changes.',
    },
  },
  {
    showAt: '2026-12-16 06:00',
    videoId: 'TO SET', // December video ID goes here
    title: 'How you work, on one page',
    inside: {
      intro:
        'Members receive these today, along with access to every past session and the full Tool Shed.',
      items: [
        {
          emoji: '📖',
          name: 'Your owner\'s manual',
          line: 'The starter. One run turns how you decide, hand off and get stuck into one page for your Project.',
        },
        {
          emoji: '🤝',
          name: 'Working with me',
          line: 'A short note for your team on how you like updates, when to pull you in and what you decide.',
        },
        {
          emoji: '⚖️',
          name: 'The second opinion',
          line: 'Bring a decision you\'ve been sitting on. It reads it against your manual and pushes back the way you asked.',
        },
      ],
      more: 'Plus more ways to take it further, from a version for your next hire to a quick refresh each quarter.',
    },
  },
]

const TZ = 'America/New_York'

// Offset of Eastern time from UTC, in minutes, at a given instant (-300 or -240).
function easternOffsetMinutes(date) {
  const name = new Intl.DateTimeFormat('en-US', { timeZone: TZ, timeZoneName: 'shortOffset' })
    .formatToParts(date)
    .find((p) => p.type === 'timeZoneName').value // e.g. "GMT-5"
  const m = name.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/)
  if (!m) return 0
  const minutes = Number(m[2]) * 60 + Number(m[3] || 0)
  return m[1] === '-' ? -minutes : minutes
}

// 'YYYY-MM-DD HH:MM' in Eastern time, to a real Date.
export function easternTime(value) {
  const [d, t = '00:00'] = value.trim().split(/\s+/)
  const [y, mo, da] = d.split('-').map(Number)
  const [h, mi] = t.split(':').map(Number)
  const asUtc = Date.UTC(y, mo - 1, da, h, mi)
  const offset = easternOffsetMinutes(new Date(asUtc))
  return new Date(asUtc - offset * 60 * 1000)
}

// A real YouTube ID is 11 characters. Anything else ('TO SET', empty) counts as not ready.
function hasVideo(session) {
  return typeof session.videoId === 'string' && /^[A-Za-z0-9_-]{11}$/.test(session.videoId)
}

// The session playing right now: the newest one that has started and has a video.
// null only if none has started yet, which is when the between-sessions view shows.
export function currentSession(now = new Date()) {
  let current = null
  for (const s of SESSIONS) {
    if (hasVideo(s) && now >= easternTime(s.showAt)) current = s
  }
  return current
}

// The next session on the calendar: the first one whose showAt is still ahead.
export function nextSession(now = new Date()) {
  return SESSIONS.find((s) => easternTime(s.showAt) > now) || null
}

// 'watch' whenever a session is up, which is the normal state. 'between' is a safety net.
export function sessionState(now = new Date()) {
  return currentSession(now) ? 'watch' : 'between'
}

// "Wednesday, December 16", or null when no future date is set, so the site never shows
// a date in the past.
export function nextSessionLabel(now = new Date()) {
  const next = nextSession(now)
  if (!next) return null
  return new Intl.DateTimeFormat('en-US', {
    timeZone: TZ,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(easternTime(next.showAt))
}

// The promise, for short lists and cards.
export const SESSION_PROMISE = 'A new session every month, free to watch until the next one drops.'

// The one sentence used where a next-session line appears.
export function nextSessionLine(now = new Date()) {
  const label = nextSessionLabel(now)
  return label
    ? `Next session ${label}. Each one is free to watch until the next one drops.`
    : SESSION_PROMISE
}
