// The monthly session. Each month, change these four values and deploy. Nothing else.
//
// Times are Eastern wall-clock time ('YYYY-MM-DD HH:MM'). Daylight saving is handled
// for you, so never add an offset.
//
//   videoId          the YouTube video ID from the unlisted upload (the part after v=)
//   showAt           when /session starts showing the video (Wednesday, 6:00 AM)
//   hideAt           when /session stops showing it (Friday, 11:59 PM)
//   nextSessionDate  the release date shown on the site between sessions
export const SESSION = {
  videoId: 'VIDEO_ID_TO_SET', // [TO SET] after the Nov 16 edit
  showAt: '2026-11-18 06:00',
  hideAt: '2026-11-20 23:59',
  nextSessionDate: '2026-11-18',
}

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

// 'watch' while the video is up, 'between' the rest of the month.
export function sessionState(now = new Date()) {
  const show = easternTime(SESSION.showAt)
  const hide = easternTime(SESSION.hideAt)
  // hideAt is 11:59 PM, so the window runs to the end of that minute.
  return now >= show && now < new Date(hide.getTime() + 60 * 1000) ? 'watch' : 'between'
}

// "Wednesday, November 18", or null once that date has passed and nobody has set
// the next one yet, so the site never shows a date in the past.
export function nextSessionLabel(now = new Date()) {
  const release = easternTime(`${SESSION.nextSessionDate} 00:00`)
  const endOfReleaseWeek = new Date(release.getTime() + 3 * 24 * 60 * 60 * 1000)
  if (now >= endOfReleaseWeek) return null
  return new Intl.DateTimeFormat('en-US', {
    timeZone: TZ,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(easternTime(`${SESSION.nextSessionDate} 12:00`))
}

// The one sentence used everywhere a next-session line appears.
export function nextSessionLine(now = new Date()) {
  const label = nextSessionLabel(now)
  return label
    ? `New session ${label}. Free to watch through the end of the week.`
    : 'A new session lands every month. Free to watch through the end of its release week.'
}
