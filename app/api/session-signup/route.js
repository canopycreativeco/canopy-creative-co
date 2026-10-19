// "Send me the session" signups. Each one becomes a row in the CCC Session Signups
// Google Sheet (via Apps Script, same as the contact and intake forms). Dave pulls the
// list from the Sheet to send the link on release day.
//
// The Apps Script source lives in the Drive folder next to this repo:
//   Website Copy & Content/Apps Script/CCC Session Signups/Code.gs

// Web app URL from the Apps Script deployment (Oct 19, 2026).
const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxi_IC5gLeazCdQvO-6EaRPtpYu7ytU6t9gxCHxn2gLjyS9JLoOSiVDn6uAGiMOcVQk-Q/exec'

const MIN_FILL_MS = 2000

// Same bot signals as the contact form: honeypot filled, or posted faster than a person
// could type an email. Flagged rows are still logged, marked, so nothing real is lost.
function botReason(data) {
  if (typeof data.website === 'string' && data.website.trim() !== '') {
    return `Hidden honeypot field was filled in ("${data.website.trim()}")`
  }
  const loadedAt = Number(data.loadedAt)
  if (!Number.isFinite(loadedAt) || loadedAt <= 0) {
    return 'No page-load time, so the form was posted without loading the page'
  }
  const elapsed = Date.now() - loadedAt
  if (elapsed < MIN_FILL_MS) {
    return `Submitted ${(elapsed / 1000).toFixed(1)} seconds after the page loaded`
  }
  return ''
}

export async function POST(request) {
  try {
    const body = await request.json()
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const page = typeof body.page === 'string' ? body.page.slice(0, 100) : ''
    const reason = botReason(body)

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ success: false, error: 'Invalid email.' }, { status: 400 })
    }

    // Until the Sheet is connected: local preview still shows the thank-you, anywhere
    // else returns an error so signups are never silently dropped.
    if (!APPS_SCRIPT_URL) {
      if (process.env.NODE_ENV === 'development') {
        console.log('[session-signup] Sheet not connected yet, dev preview only:', email)
        return Response.json({ success: true })
      }
      return Response.json({ success: false, error: 'Session signup is not connected yet.' }, { status: 503 })
    }

    // Awaited, unlike the contact form: the Sheet is the only record of a signup.
    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        email,
        page,
        spamCheck: reason ? 'Likely bot' : 'Passed',
        spamReason: reason || '',
      }),
    })

    if (!res.ok) {
      console.error('Session signup Sheets error:', res.status)
      return Response.json({ success: false, error: 'Could not save signup.' }, { status: 502 })
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('Session signup route error:', err)
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}
