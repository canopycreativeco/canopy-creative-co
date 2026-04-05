import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzsr3-ET6lFpBQpJbxTKHGRjB-x_DGx3pjE8cYpY3X-gxunYPB-btNDGgv2R7C84Oiknw/exec'

// ── Google Sheets (via Apps Script) ──────────────────────────────────────────

async function logToSheet(data) {
  const {
    name, email, phone, businessName, website, instagram,
    states, businessType, helpWith,
    accountingSoftware, accountingOther, howFound, referralName, otherSource, anythingElse,
  } = data

  const accountingSoftwareDisplay = accountingSoftware === 'Other' && accountingOther
    ? `Other — ${accountingOther}`
    : accountingSoftware

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
      name,
      email,
      phone,
      businessName,
      businessWebsite: website,
      businessInstagram: instagram,
      states: Array.isArray(states) ? states.join(', ') : states,
      businessType,
      lookingForHelp: helpWith,
      accountingSoftware: accountingSoftwareDisplay,
      howDidYouFindUs: howDidYouFindUsDisplay,
      referralName,
      otherSource,
      anythingElse,
    }),
  })
}

// ── Email ─────────────────────────────────────────────────────────────────────

function row(label, value) {
  if (!value || (Array.isArray(value) && value.length === 0)) return ''
  const display = Array.isArray(value) ? value.join(', ') : value
  return `
    <tr>
      <td style="padding:8px 16px 8px 0;vertical-align:top;width:200px;color:#9A7A62;font-size:13px;font-family:sans-serif;white-space:nowrap;">${label}</td>
      <td style="padding:8px 0;color:#3B1E08;font-size:14px;font-family:sans-serif;">${display}</td>
    </tr>`
}

function section(title, rows) {
  const content = rows.filter(Boolean).join('')
  if (!content) return ''
  return `
    <div style="margin-bottom:32px;">
      <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#CC4E00;font-family:sans-serif;">${title}</p>
      <table style="width:100%;border-collapse:collapse;border-top:1px solid #F5EBD8;">
        <tbody>${content}</tbody>
      </table>
    </div>`
}

function buildHtml(data) {
  const {
    name, email, website, businessName, phone, instagram,
    states, businessType, helpWith,
    accountingSoftware, accountingOther, howFound, referralName, otherSource, anythingElse,
  } = data

  const accountingDisplay = accountingSoftware === 'Other' && accountingOther
    ? `Other — ${accountingOther}`
    : accountingSoftware

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
        <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#CC4E00;font-family:sans-serif;">Canopy Creative Co.</p>
        <h1 style="margin:0 0 32px;font-size:22px;font-weight:700;color:#3B1E08;font-family:Georgia,serif;">New Contact Form Submission</h1>

        ${section('About You', [
          row('Name', name),
          row('Email', email),
          row('Business Name', businessName),
          row('Website', website),
          row('Phone', phone),
          row('Instagram', instagram),
        ])}

        ${section('About Your Business', [
          row('State(s)', states),
          row('Business Type', businessType),
          row('Looking for help with', helpWith),
        ])}

        ${section('A Little More', [
          row('Accounting Software', accountingDisplay),
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
    const data = await request.json()

    // Fire Sheets logging — don't await, never blocks the response
    logToSheet(data).catch((err) => console.error('Sheets logging error:', err))

    const { error } = await resend.emails.send({
      from: 'Canopy Creative Co. <onboarding@resend.dev>',
      to: ['dave@canopycreativeco.com', 'hello@canopycreativeco.com'],
      subject: `New Contact Form Submission — ${data.businessName}`,
      html: buildHtml(data),
      replyTo: data.email,
    })

    if (error) console.error('Resend error:', error)

    return Response.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return Response.json({ success: false, error: err.message })
  }
}
