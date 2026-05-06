import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwEy4avfNnBxdUieLNZUF3AmXrCqWMDq10r73QJ5vhgzkXWGDoeGvedZGHQnPGG3S9p/exec'

// ── Email ─────────────────────────────────────────────────────────────────────

function row(label, value) {
  if (!value || (Array.isArray(value) && value.length === 0)) return ''
  const display = Array.isArray(value) ? value.join(', ') : value
  return `
    <tr>
      <td style="padding:8px 16px 8px 0;vertical-align:top;width:220px;color:#9A7A62;font-size:13px;font-family:sans-serif;white-space:nowrap;">${label}</td>
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
  const d = data
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="UTF-8" /></head>
    <body style="margin:0;padding:32px;background:#FDF6EC;">
      <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:8px;padding:40px;border:1px solid #F5EBD8;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#CC4E00;font-family:sans-serif;">Canopy Creative Co</p>
        <h1 style="margin:0 0 32px;font-size:22px;font-weight:700;color:#3B1E08;font-family:Georgia,serif;">New Client Intake Submission</h1>

        ${section('Business Info', [
          row('Legal Business Name', d.legalBusinessName),
          row('DBA', d.dba),
          row('Owner / Primary Contact', d.ownerName),
          row('Primary Email', d.primaryBusinessEmail),
          row('Primary Phone', d.primaryBusinessPhone),
        ])}

        ${section('Services', [
          row('Selected Services', d.selectedServices),
          row('Future Services', d.futureServices),
        ])}

        ${section('Additional Contacts', [
          row('Contacts', d.additionalContacts),
        ])}

        ${section('Legal & Tax', [
          row('Business Address', d.businessAddress),
          row('Entity Type', d.entityType),
          row('State of Formation', d.stateOfFormation),
          row('EIN', d.ein),
          row('Fiscal Year End', d.fiscalYearEnd),
          row('Tax Preparer', d.taxPreparer),
        ])}

        ${section('Accounting Software', [
          row('Software', d.accountingSoftware),
          row('QBO Details', d.qboDetails),
          row('Login Email', d.accountingSoftwareEmail),
          row('Notes', d.accountingSoftwareNotes),
        ])}

        ${section('Bank Accounts & Cards', [
          row('Checking Accounts', d.checkingAccounts),
          row('Savings Accounts', d.savingsAccounts),
          row('Credit Cards', d.creditCards),
          row('Notes', d.accountsNotes),
        ])}

        ${section('Sales Tax', [
          row('States & Details', d.salesTaxStates),
          row('Filing Software', d.salesTaxSoftware),
          row('Notes', d.salesTaxNotes),
        ])}

        ${section('Payroll', [
          row('Payroll Service', d.payrollService),
          row('Frequency', d.payrollFrequency),
          row('W-2 Employees', d.w2Employees),
          row('1099 Contractors', d.contractors1099),
          row('Notes', d.payrollNotes),
        ])}

        ${section('1099 Prep', [
          row('Contractor Count', d.contractorCount),
          row('W-9 on File', d.w9OnFile),
          row('Notes', d.notes1099),
        ])}

        ${section('Advisory / FP&A', [
          row('Accounts Accurate?', d.advisoryAccountsAccurate),
          row('Notes', d.advisoryNotes),
        ])}

        ${section('Project Tracking', [
          row('Tracking Location', d.projectTrackingLocation),
          row('Organization', d.projectOrganization),
          row('Op Software', d.projectOpSoftware),
          row('Profitability Notes', d.profitabilityNotes),
        ])}

        ${section('Coaching', [
          row('Uses Accounting Software', d.coachingUsesAccounting),
          row('Focus Areas', d.coachingFocus),
          row('Notes', d.coachingNotes),
        ])}

        ${section('Software Implementation', [
          row('Background', d.implementationBackground),
          row('Software', d.implementationSoftware),
        ])}

        ${section('Workflow Design', [
          row('Workflows', d.workflows),
          row('Notes', d.workflowNotes),
        ])}

        ${section('Business Launch', [
          row('Launch Items', d.launchItems),
          row('Notes', d.launchNotes),
          row('Logo File', d.logoFileName),
          row('Attachments', d.attachmentFileNames),
        ])}

        ${section('Personal & Other', [
          row('Birthday', d.birthday),
          row('Social Media', d.socialMedia),
          row('Final Notes', d.finalNotes),
        ])}

        <p style="margin:32px 0 0;font-size:12px;color:#9A7A62;font-family:sans-serif;">
          Submitted via canopycreativeco.com · ${d.timestamp || ''}
        </p>
      </div>
    </body>
    </html>`
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    const data = await request.json()

    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const emailOptions = {
      from: 'Canopy Creative Co <notifications@canopycreativeco.com>',
      to: ['dave@canopycreativeco.com', 'hello@canopycreativeco.com'],
      subject: `New Client Intake — ${data.legalBusinessName || data.businessName}`,
      html: buildHtml(data),
    }
    if (data.primaryBusinessEmail) emailOptions.replyTo = data.primaryBusinessEmail

    const { error } = await resend.emails.send(emailOptions)
    if (error) console.error('Resend error:', error)

    return Response.json({ success: true })
  } catch (err) {
    console.error('Intake route error:', err)
    return Response.json({ success: false, error: err.message })
  }
}
