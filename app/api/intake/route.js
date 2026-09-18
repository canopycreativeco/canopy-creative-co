import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwEy4avfNnBxdUieLNZUF3AmXrCqWMDq10r73QJ5vhgzkXWGDoeGvedZGHQnPGG3S9p/exec'

// Slug to label, so the fallback email never shows a raw id.
// Mirrors the three service arrays in app/client-intake-form/IntakeForm.js.
const SERVICE_LABELS = {
  'txn-categorization': 'Transaction categorization & account reconciliation',
  'sales-tax-filing': 'Sales tax filing',
  'payroll-support': 'Payroll support',
  '1099-prep': '1099 prep and filing',
  'fpa': 'Financial planning & analysis',
  'cash-flow': 'Cash flow analysis',
  'budgeting': 'Budgeting & forecasting',
  'project-profitability': 'Project & product profitability',
  'coaching': 'Finance & accounting coaching',
  'software-implementation': 'Software discovery, selection & implementation',
  'workflow-design': 'Workflow & process design',
  'business-launch': 'Business launch support',
}

// Used only when the Apps Script does not return a rendered email. Its one job
// is to make sure a submission never passes silently.
function fallbackHtml(data) {
  const f = data.fields || {}
  const services = (f.selectedServices || []).map((s) => SERVICE_LABELS[s] || s).join(', ')
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /></head>
    <body style="margin:0;padding:32px;background:#FDF6EC;font-family:sans-serif;color:#3B1E08;">
      <h1 style="margin:0 0 16px;font-size:20px;font-family:Georgia,serif;">New Client Intake Submission</h1>
      <p style="margin:0 0 8px;font-size:14px;"><strong>Business:</strong> ${f.legalBusinessName || 'Unknown'}</p>
      <p style="margin:0 0 8px;font-size:14px;"><strong>Submitted:</strong> ${data.submittedAt || ''}</p>
      <p style="margin:0 0 8px;font-size:14px;"><strong>Submission ID:</strong> ${data.submissionId || ''}</p>
      <p style="margin:0 0 16px;font-size:14px;"><strong>Services:</strong> ${services || 'None recorded'}</p>
      <p style="margin:0;padding:12px;background:#FFF8F3;border:1px solid #CC4E00;font-size:13px;">
        The full intake render did not come back from the Apps Script, so this is a short fallback.
        Open the intake Sheet for the complete submission.
      </p>
    </body></html>`
}

export async function POST(request) {
  try {
    const data = await request.json()

    let script = {}
    try {
      const r = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      script = await r.json()
    } catch (e) {
      console.error('Apps Script call failed:', e)
    }

    const emailOptions = {
      from: 'Canopy Creative Co <notifications@canopycreativeco.com>',
      to: ['dave@canopycreativeco.com'],
      subject: script.emailSubject
        || `New Client Intake, ${data.fields?.legalBusinessName || 'Unknown'}`,
      html: script.emailHtml || fallbackHtml(data),
    }

    if (script.pdfBase64) {
      emailOptions.attachments = [{
        filename: script.pdfName || 'client-intake.pdf',
        content: script.pdfBase64,
      }]
    }

    if (data.fields?.primaryBusinessEmail) {
      emailOptions.replyTo = data.fields.primaryBusinessEmail
    }

    const { error } = await resend.emails.send(emailOptions)
    if (error) console.error('Resend error:', error)

    return Response.json({ success: true })
  } catch (err) {
    console.error('Intake route error:', err)
    return Response.json({ success: false, error: err.message })
  }
}
