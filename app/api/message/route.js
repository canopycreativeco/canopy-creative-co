import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// ── Email ─────────────────────────────────────────────────────────────────────

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function row(label, value) {
  if (!value) return ''
  return `
    <tr>
      <td style="padding:8px 16px 8px 0;vertical-align:top;width:140px;color:#9A7A62;font-size:13px;font-family:sans-serif;white-space:nowrap;">${label}</td>
      <td style="padding:8px 0;color:#3B1E08;font-size:14px;font-family:sans-serif;">${value}</td>
    </tr>`
}

function buildNotificationHtml({ name, businessName, email, message }) {
  const messageHtml = escapeHtml(message).replace(/\n/g, '<br />')

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /></head>
    <body style="margin:0;padding:32px;background:#FDF6EC;">
      <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;padding:40px;border:1px solid #F5EBD8;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#CC4E00;font-family:sans-serif;">Canopy Creative Co</p>
        <h1 style="margin:0 0 32px;font-size:22px;font-weight:700;color:#3B1E08;font-family:Georgia,serif;">New Message</h1>

        <table style="width:100%;border-collapse:collapse;border-top:1px solid #F5EBD8;">
          <tbody>
            ${row('Name', escapeHtml(name))}
            ${row('Business name', escapeHtml(businessName))}
            ${row('Email', escapeHtml(email))}
            ${row('Message', messageHtml)}
          </tbody>
        </table>

        <p style="margin:32px 0 0;font-size:12px;color:#9A7A62;font-family:sans-serif;">
          Submitted via canopycreativeco.com
        </p>
      </div>
    </body>
    </html>`
}

function buildConfirmationText(name) {
  return [
    `Hi ${name},`,
    'Thanks for reaching out to Canopy Creative Co. Your message is in and a real person will get back to you, usually within one business day.',
    'If anything is time-sensitive, just reply to this email.',
    'Dave Altshul\nCanopy Creative Co',
  ].join('\n\n')
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    const data = await request.json()

    const name = typeof data.name === 'string' ? data.name.trim() : ''
    const businessName = typeof data.businessName === 'string' ? data.businessName.trim() : ''
    const email = typeof data.email === 'string' ? data.email.trim() : ''
    const message = typeof data.message === 'string' ? data.message.trim() : ''

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Notification to the inbox. If this fails, the message never arrived,
    // so the response is an error.
    const { error: notificationError } = await resend.emails.send({
      from: 'Canopy Creative Co <notifications@canopycreativeco.com>',
      to: ['hello@canopycreativeco.com'],
      subject: `New message from ${name}`,
      html: buildNotificationHtml({ name, businessName, email, message }),
      replyTo: email,
    })

    if (notificationError) {
      console.error('Resend error:', notificationError)
      return Response.json(
        { success: false, error: 'The message could not be sent.' },
        { status: 500 }
      )
    }

    // Confirmation to the sender. The message itself already went through,
    // so a failure here still returns success.
    try {
      const { error: confirmationError } = await resend.emails.send({
        from: 'Canopy Creative Co <notifications@canopycreativeco.com>',
        to: [email],
        subject: 'We received your message',
        text: buildConfirmationText(name),
        replyTo: 'hello@canopycreativeco.com',
      })

      if (confirmationError) console.error('Resend confirmation error:', confirmationError)
    } catch (err) {
      console.error('Resend confirmation error:', err)
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('Message route error:', err)
    return Response.json({ success: false, error: err.message }, { status: 500 })
  }
}
