import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzsr3-ET6lFpBQpJbxTKHGRjB-x_DGx3pjE8cYpY3X-gxunYPB-btNDGgv2R7C84Oiknw/exec'

const MIN_FILL_MS = 3000
const MIN_MESSAGE_LENGTH = 10

// ── Spam checks ───────────────────────────────────────────────────────────────

// Bot signals: honeypot filled, or the form came back faster than a person
// could fill it. A missing load time means the post skipped the page entirely.
// Returns the reason, or '' for a likely person. Flagged submissions are still
// logged and emailed (marked as likely bots) so false positives stay visible.
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

function clean(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// ── Google Sheets (via Apps Script) ──────────────────────────────────────────

async function logToSheet(data) {
  const {
    name, email, phone, businessName, businessWebsite,
    businessType, helpWith,
    howFound, referralName, otherSource, anythingElse,
  } = data

  const howDidYouFindUsDisplay = howFound === 'Referral' && referralName
    ? `Referral — thank: ${referralName}`
    : howFound === 'Other' && otherSource
      ? `Other — ${otherSource}`
      : howFound

  await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      name: name || '',
      email: email || '',
      phone: phone || '',
      businessName: businessName || '',
      businessWebsite: businessWebsite || '',
      businessType: businessType || '',
      lookingForHelp: helpWith || '',
      howDidYouFindUs: howDidYouFindUsDisplay || '',
      referralName: referralName || '',
      otherSource: otherSource || '',
      anythingElse: anythingElse || '',
    }),
  })
}

// ── Email ─────────────────────────────────────────────────────────────────────

function row(label, value) {
  const raw = Array.isArray(value) ? value.join(', ') : value
  const display = raw && String(raw).trim() ? escapeHtml(raw) : 'Not provided'
  return `
    <tr>
      <td style="padding:8px 16px 8px 0;vertical-align:top;width:200px;color:#9A7A62;font-size:13px;font-family:sans-serif;white-space:nowrap;">${label}</td>
      <td style="padding:8px 0;color:#3B1E08;font-size:14px;font-family:sans-serif;">${display}</td>
    </tr>`
}

function section(title, rows) {
  const content = rows.join('')
  return `
    <div style="margin-bottom:32px;">
      <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#CC4E00;font-family:sans-serif;">${title}</p>
      <table style="width:100%;border-collapse:collapse;border-top:1px solid #F5EBD8;">
        <tbody>${content}</tbody>
      </table>
    </div>`
}

function botBanner(reason) {
  if (!reason) return ''
  return `
        <div style="margin:0 0 32px;padding:16px;border-radius:6px;background:#FDECEC;border:1px solid #E5A3A3;">
          <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#9B1C1C;font-family:sans-serif;">Likely a bot</p>
          <p style="margin:0;font-size:13px;color:#3B1E08;font-family:sans-serif;">${escapeHtml(reason)}. If this looks like a real person, the spam check caught a false positive. They were shown the normal success page.</p>
        </div>`
}

function buildHtml(data, reason) {
  const {
    name, email, businessWebsite, businessName, phone,
    businessType, helpWith,
    howFound, referralName, otherSource, anythingElse,
  } = data

  const howFoundDisplay = howFound === 'Referral' && referralName
    ? `Referral — thank: ${referralName}`
    : howFound === 'Other' && otherSource
      ? `Other — ${otherSource}`
      : howFound

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /></head>
    <body style="margin:0;padding:32px;background:#FDF6EC;">
      <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;padding:40px;border:1px solid #F5EBD8;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#CC4E00;font-family:sans-serif;">Canopy Creative Co</p>
        <h1 style="margin:0 0 32px;font-size:22px;font-weight:700;color:#3B1E08;font-family:Georgia,serif;">New Contact Form Submission</h1>
        ${botBanner(reason)}

        ${section('About You', [
          row('Name', name),
          row('Email', email),
          row('Business Name', businessName),
          row('Website', businessWebsite),
          row('Phone', phone),
        ])}

        ${section('About Your Business', [
          row('Business Type', businessType),
          row('Looking for help with', helpWith),
        ])}

        ${section('A Little More', [
          row('How They Found Us', howFoundDisplay),
          row('Anything Else', anythingElse),
        ])}

        <p style="margin:32px 0 0;font-size:12px;color:#9A7A62;font-family:sans-serif;">
          Submitted via canopycreativeco.com
        </p>
      </div>
    </body>
    </html>`
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    const body = await request.json()
    const reason = botReason(body)

    const data = {
      name: clean(body.name),
      email: clean(body.email),
      phone: clean(body.phone),
      businessName: clean(body.businessName),
      businessWebsite: clean(body.businessWebsite),
      businessType: clean(body.businessType),
      helpWith: clean(body.helpWith),
      howFound: clean(body.howFound),
      referralName: clean(body.referralName),
      otherSource: clean(body.otherSource),
      anythingElse: clean(body.anythingElse),
    }

    // Likely bots skip validation and always get the normal success response
    if (!reason && data.helpWith.length < MIN_MESSAGE_LENGTH) {
      return Response.json(
        { success: false, field: 'helpWith', error: `Please tell us a little more (at least ${MIN_MESSAGE_LENGTH} characters).` },
        { status: 400 },
      )
    }

    // Fire Sheets logging — don't await, never blocks the response
    const sheetData = reason ? { ...data, name: `[Likely bot] ${data.name}` } : data
    logToSheet(sheetData).catch((err) => console.error('Sheets logging error:', err))

    const { error } = await resend.emails.send({
      from: 'Canopy Creative Co <notifications@canopycreativeco.com>',
      to: ['dave@canopycreativeco.com', 'hello@canopycreativeco.com'],
      subject: `${reason ? '[Likely bot] ' : ''}New Contact Form Submission — ${data.businessName || data.name || 'Website inquiry'}`,
      html: buildHtml(data, reason),
      replyTo: data.email || undefined,
    })

    if (error) console.error('Resend error:', error)

    return Response.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return Response.json({ success: false, error: err.message })
  }
}
