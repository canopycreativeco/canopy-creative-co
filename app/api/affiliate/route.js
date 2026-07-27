import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const HELLO = 'hello@canopycreativeco.com'
const FROM = 'Canopy Creative Co <notifications@canopycreativeco.com>'
const TERMS_URL = 'https://www.canopycreativeco.com/legal#affiliate'

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function card(inner) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /></head>
    <body style="margin:0;padding:32px;background:#FDF6EC;">
      <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;padding:40px;border:1px solid #F5EBD8;">
        ${inner}
      </div>
    </body>
    </html>`
}

// ── Applicant confirmation ────────────────────────────────────────────────────

const pStyle =
  'margin:0 0 20px;font-size:15px;line-height:1.7;color:#3B1E08;font-family:sans-serif;'

function buildApplicantHtml(firstName) {
  return card(`
    <p style="margin:0 0 28px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#CC4E00;font-family:sans-serif;">Canopy Creative Co</p>

    <p style="${pStyle}">Hi ${esc(firstName)},</p>

    <p style="${pStyle}">Your application to the Canopy Creative Co affiliate program just came through. We review each application, so you'll hear back within 2 business days.</p>

    <p style="${pStyle}">Thank you for offering to spread the word. A recommendation from someone who knows our work carries more weight than any ad we could buy.</p>

    <p style="${pStyle}">Once you're approved, we'll set up your affiliate account and send a short welcome note with your personal referral link and how to use it. From there, every student who signs up through your link earns you a 20% commission on The Roots and The Canopy. For The Canopy, the 20% comes from your referral's first annual payment. Payouts go out quarterly to the PayPal email you shared.</p>

    <p style="${pStyle}">Nothing else to do on your end for now. Talk soon.</p>

    <p style="margin:28px 0 0;font-size:15px;line-height:1.6;color:#3B1E08;font-family:sans-serif;">Dave &#129505;<br />Canopy Creative Co</p>`)
}

// ── Internal notification ─────────────────────────────────────────────────────

function row(label, value) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:8px 16px 8px 0;vertical-align:top;width:200px;color:#9A7A62;font-size:13px;font-family:sans-serif;white-space:nowrap;">${label}</td>
      <td style="padding:8px 0;color:#3B1E08;font-size:14px;font-family:sans-serif;">${esc(value)}</td>
    </tr>`
}

function section(title, content) {
  if (!content) return ''
  return `
    <div style="margin-bottom:32px;">
      <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#CC4E00;font-family:sans-serif;">${title}</p>
      ${content}
    </div>`
}

function buildWelcomeReply(firstName) {
  return `Hi ${firstName},

You're approved, and your affiliate link is ready:

[PASTE THEIR AFFILIATE LINK]

Share it anywhere you talk with others: a text to a colleague, your newsletter, a post, a DM. Your link never expires, so share it for as long as you like. Once someone clicks it, they have 30 days to sign up and still count as your referral. One thing to include when you share: say that you earn a commission. A simple "this is my referral link" keeps everything clear and keeps us inside FTC guidelines.

The money side is simple. You earn a 20% commission on The Roots and The Canopy. For The Canopy, your commission comes from the referral's first annual payment. Payouts go out quarterly to the PayPal email you gave us. If your earnings ever reach the level where federal tax reporting applies, we will send you a W-9 and hold that payout until the form comes back. We will always reach out first, so there is nothing for you to track on your own.

You can watch your referrals and commissions anytime. Log in to the course site, click your name in the top corner, and open the Affiliate menu. The links in that menu are the ones that track, so share those rather than copying page addresses from our website. If you have never logged in before, use Forgot Password with this email address to set yourself up.

Full program terms: ${TERMS_URL}

Thanks for spreading the word.

Dave \u{1F9E1}
Canopy Creative Co`
}

function buildInternalHtml(data) {
  const { name, email, paypalEmail, shareWhere } = data
  const firstName = (name || '').trim().split(/\s+/)[0] || 'there'

  const applicantRows = `
    <table style="width:100%;border-collapse:collapse;border-top:1px solid #F5EBD8;">
      <tbody>
        ${row('Name:', name)}
        ${row('Email:', email)}
        ${row('PayPal email:', paypalEmail)}
        ${row('Where they plan to share it:', shareWhere)}
      </tbody>
    </table>`

  const setupSteps = `
    <ol style="margin:0;padding-left:20px;color:#3B1E08;font-size:14px;line-height:1.8;font-family:sans-serif;">
      <li>In Thinkific, open Users and find or create <strong>${esc(email)}</strong>.</li>
      <li>Three dots next to their name, then Edit. Under User roles check <strong>Affiliate</strong>, set commission to <strong>20%</strong>, and Save.</li>
      <li>Copy their referral link (it appears in their Affiliate menu once the role is saved).</li>
      <li>Reply to this email with the welcome note below and paste their link in. Reply-to is set to the applicant, so your reply goes straight to them.</li>
    </ol>`

  const welcomeBlock = `
    <div style="background:#FDF6EC;border:1px solid #F5EBD8;border-radius:8px;padding:20px;color:#3B1E08;font-size:14px;line-height:1.7;font-family:sans-serif;white-space:pre-line;">${esc(buildWelcomeReply(firstName))}</div>`

  return card(`
    <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#CC4E00;font-family:sans-serif;">Canopy Creative Co</p>
    <h1 style="margin:0 0 32px;font-size:22px;font-weight:700;color:#3B1E08;font-family:Georgia,serif;">New Affiliate Application</h1>

    ${section('Applicant', applicantRows)}
    ${section('Set Up (About 2 Minutes)', setupSteps)}
    ${section('Welcome Reply (Copy, Add Their Link, Send)', welcomeBlock)}

    <p style="margin:32px 0 0;font-size:12px;color:#9A7A62;font-family:sans-serif;">
      Submitted via canopycreativeco.com
    </p>`)
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    const data = await request.json()
    const firstName = (data.name || '').trim().split(/\s+/)[0] || 'there'

    // Internal notification first: if this fails, the application would be lost
    const { error: internalError } = await resend.emails.send({
      from: FROM,
      to: [HELLO],
      subject: `New affiliate application: ${data.name}`,
      html: buildInternalHtml(data),
      replyTo: data.email,
    })

    if (internalError) {
      console.error('Resend error (internal):', internalError)
      return Response.json({ success: false })
    }

    // Applicant confirmation, cc hello@ so the thread lives in the shared inbox
    const { error: applicantError } = await resend.emails.send({
      from: FROM,
      to: [data.email],
      cc: [HELLO],
      subject: 'Your affiliate application is in',
      html: buildApplicantHtml(firstName),
      replyTo: HELLO,
    })

    if (applicantError) console.error('Resend error (applicant):', applicantError)

    return Response.json({ success: true })
  } catch (err) {
    console.error('Affiliate route error:', err)
    return Response.json({ success: false, error: err.message })
  }
}
