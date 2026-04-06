'use client'

import { useState, useRef } from 'react'

// ── Constants ─────────────────────────────────────────────────────────────────

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado',
  'Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho',
  'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana',
  'Maine','Maryland','Massachusetts','Michigan','Minnesota',
  'Mississippi','Missouri','Montana','Nebraska','Nevada',
  'New Hampshire','New Jersey','New Mexico','New York',
  'North Carolina','North Dakota','Ohio','Oklahoma','Oregon',
  'Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington',
  'West Virginia','Wisconsin','Wyoming',
]

const ROOTS_SERVICES = [
  { id: 'txn-categorization', label: 'Transaction categorization & account reconciliation' },
  { id: 'sales-tax-filing',   label: 'Sales tax filing' },
  { id: 'payroll-support',    label: 'Payroll support' },
  { id: '1099-prep',          label: '1099 prep and filing' },
  { id: 'ongoing-software',   label: 'Ongoing software & systems operation' },
]

const CANOPY_SERVICES = [
  { id: 'fpa',                 label: 'Financial planning & analysis' },
  { id: 'cash-flow',           label: 'Cash flow analysis' },
  { id: 'budgeting',           label: 'Budgeting & forecasting' },
  { id: 'project-profitability', label: 'Project & product profitability' },
  { id: 'coaching',            label: 'Finance & accounting coaching' },
]

const BUILD_SERVICES = [
  { id: 'software-implementation', label: 'Software discovery, selection & implementation' },
  { id: 'workflow-design',         label: 'Workflow & process design' },
  { id: 'business-launch',         label: 'Business launch support' },
]

const LAUNCH_ITEMS = [
  'Getting an EIN',
  'Filing LLC paperwork',
  'Sales tax resale certificate',
  'Business bank account setup',
  'Creating a client contract',
  'Invoice & PO templates',
  'Estimate & proposal templates',
  'Accounting software setup',
  'Payroll setup',
  'Business insurance guidance',
]

const SOCIAL_PLATFORMS = ['Instagram','Facebook','LinkedIn','TikTok','Pinterest','X (Twitter)','YouTube']
const PLATFORM_PLACEHOLDERS = {
  Instagram: 'yourinstagramhandle',
  Facebook: 'yourpagename',
  LinkedIn: 'yourprofile',
  TikTok: 'yourtiktokhandle',
  Pinterest: 'yourpinteresthandle',
  'X (Twitter)': 'yourtwitterhandle',
  YouTube: 'Channel name or URL',
}

const PLATFORM_PREFIXES = {
  Instagram: '@',
  Facebook: '@',
  LinkedIn: 'in/',
  TikTok: '@',
  Pinterest: '@',
  'X (Twitter)': '@',
  YouTube: '',
}

// ── Templates for repeatable blocks ──────────────────────────────────────────

const CONTACT_T    = { name: '', role: '', email: '', phone: '' }
const BANK_T       = { institution: '', nickname: '', accountNumber: '', loginEmail: '', password: '' }
const CC_T         = { institution: '', nickname: '', lastFour: '', loginEmail: '', password: '' }
const SALES_TAX_T  = { state: '', taxId: '', frequency: '', portalWebsite: '', username: '', password: '' }
const SOFTWARE_T   = { name: '', loginUrl: '', username: '', password: '', purpose: '' }

// ── Shared styles ─────────────────────────────────────────────────────────────

const inp  = 'w-full border border-[#D1C4B8] rounded-lg px-3 py-2.5 text-[14px] text-brown bg-white outline-none focus:border-orange transition-colors placeholder:text-[#C4A98A]'
const sel  = `${inp} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%239A7A62' d='M6 8L0 0h12z'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_12px_center]`
const ta   = `${inp} resize-none`

function formatPhone(digits) {
  const d = (digits || '').replace(/\D/g, '').slice(0, 10)
  if (d.length <= 3) return d
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
}

// ── Helper components ─────────────────────────────────────────────────────────

function Lbl({ children, opt, req }) {
  return (
    <label className="block text-[13px] font-medium text-brown mb-1">
      {children}
      {req && <span className="text-red-500 ml-0.5">*</span>}
      {opt && <span className="text-muted font-normal ml-1">(optional)</span>}
    </label>
  )
}

function Hint({ children }) {
  return <p className="text-[12px] text-muted italic mt-0.5 mb-1.5">{children}</p>
}

function FieldErr({ msg }) {
  return msg ? <p className="text-[12px] text-red-600 mt-1">{msg}</p> : null
}

function Divider() {
  return <div className="border-t border-[#E8DDD4] my-5" />
}

function NotePill({ children }) {
  return (
    <div className="bg-[#FFF8F3] border border-orange/25 rounded-lg px-4 py-3 text-[13px] text-brown/80 leading-[1.65]">
      {children}
    </div>
  )
}

function AddBtn({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-[13px] font-medium text-orange hover:text-[#B34400] transition-colors"
    >
      + {children}
    </button>
  )
}

function SubCard({ children, className = '' }) {
  return (
    <div className={`bg-[#F7F3EF] border border-[#E5DDD5] rounded-lg p-4 ${className}`}>
      {children}
    </div>
  )
}

function SectionCard({ badge, title, description, children }) {
  return (
    <div className="bg-white border border-[#E5DDD5] rounded-xl p-6 flex flex-col gap-5">
      <div>
        {badge && (
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange/75 mb-2">
            {badge}
          </p>
        )}
        {title && (
          <h2 className="font-serif font-bold text-brown text-[20px] leading-[1.2]">{title}</h2>
        )}
        {description && (
          <p className="text-[14px] text-muted leading-[1.65] mt-2">{description}</p>
        )}
      </div>
      {children}
    </div>
  )
}

function ServiceCheckbox({ id, label, checked, onToggle }) {
  return (
    <label
      className={`flex items-start gap-2.5 border rounded-lg px-3 py-2.5 cursor-pointer transition-colors ${
        checked ? 'border-[1.5px] border-orange bg-cream' : 'border-[#D1C4B8] bg-white hover:border-orange/40'
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(id)}
        className="mt-0.5 accent-orange shrink-0"
      />
      <span className="text-[13px] text-brown leading-[1.4]">{label}</span>
    </label>
  )
}

function LaunchCheckbox({ label, checked, onToggle }) {
  return (
    <label
      className={`flex items-start gap-2.5 border rounded-lg px-3 py-2.5 cursor-pointer transition-colors ${
        checked ? 'border-[1.5px] border-orange bg-cream' : 'border-[#D1C4B8] bg-white hover:border-orange/40'
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onToggle(label)}
        className="mt-0.5 accent-orange shrink-0"
      />
      <span className="text-[13px] text-brown leading-[1.4]">{label}</span>
    </label>
  )
}

function RadioPillRow({ value, label, selected, onSelect }) {
  return (
    <label
      className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer transition-colors w-full ${
        selected ? 'border-orange bg-cream' : 'border-[#D1C4B8] bg-white hover:border-orange/40'
      }`}
    >
      <input
        type="radio"
        value={value}
        checked={selected}
        onChange={() => onSelect(value)}
        className="accent-orange shrink-0"
      />
      <span className="text-[14px] text-brown">{label}</span>
    </label>
  )
}

function FileZone({ accept, hint, multiple = false, value, onChange }) {
  const ref = useRef(null)

  function pick(files) {
    const names = Array.from(files).map((f) => f.name).join(', ')
    onChange(names)
  }

  return (
    <div
      onClick={() => ref.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => { e.preventDefault(); pick(e.dataTransfer.files) }}
      className="border-2 border-dashed border-[#D1C4B8] rounded-lg p-8 text-center cursor-pointer hover:border-orange/50 transition-colors"
    >
      <input
        ref={ref}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => pick(e.target.files)}
      />
      <p className="text-[14px] text-brown/70 mb-1">Click to choose a file or drag here</p>
      <p className="text-[12px] text-muted">{hint}</p>
      {value && (
        <p className="mt-3 text-[12px] font-medium text-orange break-all">{value}</p>
      )}
    </div>
  )
}

// Reusable software credential block (used in sections 9 and 13)
function SoftwareBlock({ data, onChange }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="sm:col-span-2">
        <Lbl>Software name</Lbl>
        <input type="text" value={data.name} onChange={(e) => onChange('name', e.target.value)} className={inp} />
      </div>
      <div className="sm:col-span-2">
        <Lbl>Login URL</Lbl>
        <input type="text" value={data.loginUrl} onChange={(e) => onChange('loginUrl', e.target.value)} placeholder="https://" className={inp} />
      </div>
      <div>
        <Lbl>Username / login email</Lbl>
        <input type="text" value={data.username} onChange={(e) => onChange('username', e.target.value)} className={inp} />
      </div>
      <div>
        <Lbl>Password</Lbl>
        <input type="text" value={data.password} onChange={(e) => onChange('password', e.target.value)} className={inp} />
      </div>
      <div className="sm:col-span-2">
        <Lbl>What it's used for</Lbl>
        <input type="text" value={data.purpose} onChange={(e) => onChange('purpose', e.target.value)} className={inp} />
      </div>
    </div>
  )
}

// ── Initial state ─────────────────────────────────────────────────────────────

const INIT = {
  // About Your Business
  legalBusinessName: '', dba: '', ownerName: '', primaryBusinessEmail: '', primaryBusinessPhone: '',
  businessAddress: '', entityType: '', entityTypeOther: '',
  stateOfFormation: '', ein: '', fiscalYearEnd: '',
  hasTaxPreparer: '',
  taxPreparer: { name: '', firmName: '', email: '', phone: '' },

  // Contacts
  additionalContacts: [{ ...CONTACT_T }],

  // Services
  selectedServices: [], futureServices: '',

  // Accounting Software
  accountingSoftware: '', accountingSoftwareOther: '', accountingSoftwareEmail: '', accountingSoftwarePassword: '', accountingSoftwareNotes: '',
  qboPlan: '', qboBankFeeds: '', qboEmail: '', qboPassword: '',

  // Bank Accounts
  checkingAccounts: [{ ...BANK_T }],
  savingsAccounts:  [{ ...BANK_T }],
  creditCards:      [{ ...CC_T }],
  accountsNotes: '',

  // Sales Tax
  salesTaxStates: [{ ...SALES_TAX_T }],
  salesTaxSoftware: '', salesTaxNotes: '',

  // Payroll
  payrollService: '', payrollServiceOther: '', payrollFrequency: '', payrollFrequencyOther: '', w2Employees: '',
  contractors1099: '', payrollEmail: '', payrollPassword: '', payrollNotes: '',

  // 1099
  contractorCount: '', w9OnFile: '', notes1099: '',

  // Ongoing Software
  ongoingSoftware: [{ ...SOFTWARE_T }], ongoingNotes: '',

  // Advisory
  advisoryAccountsAccurate: '', advisoryNotes: '',

  // Project Profitability
  projectTrackingLocation: '', projectOrganization: '',
  projectOpSoftware: '', profitabilityNotes: '',

  // Coaching
  coachingUsesAccounting: '', coachingFocus: '', coachingNotes: '',

  // Software Implementation
  implementationBackground: '',
  implementationSoftware: [{ ...SOFTWARE_T }],

  // Workflow Design
  workflows: ['', ''], workflowNotes: '',

  // Business Launch
  launchItems: [], launchNotes: '',

  // Branding / Attachments
  logoFileName: '', attachmentFileNames: '',

  // Just For Fun
  birthday: '', socialPlatform: '', socialHandle: '',

  // Final Notes
  finalNotes: '',
}

// ── Main component ────────────────────────────────────────────────────────────

export default function IntakeForm() {
  const [fields, setFields] = useState(INIT)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // ── State helpers ──────────────────────────────────────────────────────────

  function sf(key, val) {
    setFields((f) => ({ ...f, [key]: val }))
  }

  function sn(key, sub, val) {
    setFields((f) => ({ ...f, [key]: { ...f[key], [sub]: val } }))
  }

  function ua(key, idx, sub, val) {
    setFields((f) => {
      const arr = [...f[key]]
      arr[idx] = { ...arr[idx], [sub]: val }
      return { ...f, [key]: arr }
    })
  }

  function aa(key, tmpl) {
    setFields((f) => ({ ...f, [key]: [...f[key], { ...tmpl }] }))
  }

  function ra(key, idx) {
    setFields((f) => ({ ...f, [key]: f[key].filter((_, i) => i !== idx) }))
  }

  function toggleService(id) {
    const s = fields.selectedServices
    sf('selectedServices', s.includes(id) ? s.filter((x) => x !== id) : [...s, id])
  }

  function toggleLaunch(label) {
    const l = fields.launchItems
    sf('launchItems', l.includes(label) ? l.filter((x) => x !== label) : [...l, label])
  }

  // ── Conditional visibility ─────────────────────────────────────────────────

  const svcs = fields.selectedServices
  const showLegalSection   = ['txn-categorization','sales-tax-filing','payroll-support','1099-prep'].some((s) => svcs.includes(s))
  const showBankAccounts   = ['txn-categorization','1099-prep','fpa','cash-flow','budgeting'].some((s) => svcs.includes(s))
  const showSalesTax       = svcs.includes('sales-tax-filing')
  const showPayroll        = svcs.includes('payroll-support')
  const show1099           = svcs.includes('1099-prep')
  const showOngoingSW      = svcs.includes('ongoing-software')
  const showAdvisory       = ['fpa','cash-flow','budgeting'].some((s) => svcs.includes(s))
  const showProjectProfit  = svcs.includes('project-profitability')
  const showCoaching       = svcs.includes('coaching')
  const showSoftwareImpl   = svcs.includes('software-implementation')
  const showWorkflow       = svcs.includes('workflow-design')
  const showBusinessLaunch = svcs.includes('business-launch')

  const showQBO = fields.accountingSoftware === 'QuickBooks Online'
  const showProjectAccounting = ['accounting','both'].includes(fields.projectTrackingLocation)
  const showProjectOpSW       = ['operational','both'].includes(fields.projectTrackingLocation)

  // ── Submit ─────────────────────────────────────────────────────────────────

  async function handleSubmit() {
    const missingFields = []
    if (!fields.legalBusinessName.trim()) missingFields.push('Legal business name')
    if (!fields.ownerName.trim()) missingFields.push('Owner / primary contact name')
    if (!fields.primaryBusinessEmail.trim()) missingFields.push('Primary business email address')
    if (fields.selectedServices.length === 0) missingFields.push('At least one service selection')

    if (missingFields.length > 0) {
      setSubmitError(`Please complete the following before submitting: ${missingFields.join(', ')}`)
      return
    }

    setLoading(true)
    setSubmitError('')

    const f = fields

    function serialize(arr, fn) {
      return arr.filter((x) => fn ? fn(x) : x).map(fn || ((x) => x)).join(' | ')
    }

    const payload = {
      timestamp:            new Date().toISOString(),
      businessName:         f.legalBusinessName || '',
      legalBusinessName:    f.legalBusinessName || '',
      dba:                  f.dba || '',
      ownerName:            f.ownerName || '',
      primaryBusinessEmail: f.primaryBusinessEmail || '',
      primaryBusinessPhone: f.primaryBusinessPhone || '',
      ...(showLegalSection ? {
        businessAddress:    f.businessAddress || '',
        entityType:         f.entityType === 'Other' ? `Other — ${f.entityTypeOther}` : (f.entityType || ''),
        stateOfFormation:   f.stateOfFormation || '',
        ein:                f.ein || '',
        fiscalYearEnd:      f.fiscalYearEnd || '',
        taxPreparer:        f.hasTaxPreparer === 'yes'
          ? `${f.taxPreparer.name}, ${f.taxPreparer.firmName}, ${f.taxPreparer.email}, ${f.taxPreparer.phone}`
          : (f.hasTaxPreparer || ''),
      } : {}),
      additionalContacts:   serialize(f.additionalContacts.filter((c) => c.name), (c) => `${c.name} (${c.role}) — ${c.email}${c.phone ? ' / ' + c.phone : ''}`),
      selectedServices:     svcs.join(', ') || '',
      futureServices:       f.futureServices || '',
      accountingSoftware:   f.accountingSoftware === 'Other' ? `Other — ${f.accountingSoftwareOther}` : (f.accountingSoftware || ''),
      accountingSoftwareEmail: f.accountingSoftware && !['QuickBooks Desktop','Spreadsheets','None — starting from scratch'].includes(f.accountingSoftware) ? f.accountingSoftwareEmail : '',
      accountingSoftwarePassword: f.accountingSoftware && !['QuickBooks Desktop','Spreadsheets','None — starting from scratch'].includes(f.accountingSoftware) ? f.accountingSoftwarePassword : '',
      accountingSoftwareNotes: f.accountingSoftwareNotes || '',
      qboDetails:           showQBO ? `Plan: ${f.qboPlan} | Bank feeds: ${f.qboBankFeeds} | Login: ${f.qboEmail}` : '',
      checkingAccounts:     serialize(f.checkingAccounts.filter((a) => a.institution), (a) => `${a.institution}${a.nickname ? ' ('+a.nickname+')' : ''} | ${a.loginEmail}`),
      savingsAccounts:      serialize(f.savingsAccounts.filter((a) => a.institution), (a) => `${a.institution}${a.nickname ? ' ('+a.nickname+')' : ''} | ${a.loginEmail}`),
      creditCards:          serialize(f.creditCards.filter((a) => a.institution), (a) => `${a.institution}${a.nickname ? ' ('+a.nickname+')' : ''} last4:${a.lastFour} | ${a.loginEmail}`),
      accountsNotes:        f.accountsNotes || '',
      salesTaxStates:       serialize(f.salesTaxStates.filter((s) => s.state), (s) => `${s.state}: ID ${s.taxId}, ${s.frequency}`),
      salesTaxSoftware:     f.salesTaxSoftware || '',
      salesTaxNotes:        f.salesTaxNotes || '',
      payrollService:       f.payrollService === 'Other' ? `Other — ${f.payrollServiceOther}` : (f.payrollService || ''),
      payrollFrequency:     f.payrollFrequency === 'Other' ? `Other — ${f.payrollFrequencyOther}` : (f.payrollFrequency || ''),
      w2Employees:          f.w2Employees || '',
      contractors1099:      f.contractors1099 || '',
      payrollNotes:         f.payrollNotes || '',
      contractorCount:      f.contractorCount || '',
      w9OnFile:             f.w9OnFile || '',
      notes1099:            f.notes1099 || '',
      ongoingSoftware:      serialize(f.ongoingSoftware.filter((s) => s.name), (s) => `${s.name}: ${s.purpose}`),
      ongoingNotes:         f.ongoingNotes || '',
      advisoryAccountsAccurate: f.advisoryAccountsAccurate || '',
      advisoryNotes:        f.advisoryNotes || '',
      projectTrackingLocation: f.projectTrackingLocation || '',
      projectOrganization:  f.projectOrganization || '',
      projectOpSoftware:    f.projectOpSoftware || '',
      profitabilityNotes:   f.profitabilityNotes || '',
      coachingUsesAccounting: f.coachingUsesAccounting || '',
      coachingFocus:        f.coachingFocus || '',
      coachingNotes:        f.coachingNotes || '',
      implementationBackground: f.implementationBackground || '',
      implementationSoftware:   serialize(f.implementationSoftware.filter((s) => s.name), (s) => `${s.name}: ${s.purpose}`),
      workflows:            f.workflows.filter(Boolean).map((w, i) => `${i + 1}. ${w}`).join(', ') || '',
      workflowNotes:        f.workflowNotes || '',
      launchItems:          f.launchItems.join(', ') || '',
      launchNotes:          f.launchNotes || '',
      logoFileName:         f.logoFileName || '',
      attachmentFileNames:  f.attachmentFileNames || '',
      birthday:             f.birthday || '',
      socialMedia:          f.socialPlatform ? `${f.socialPlatform}: ${f.socialHandle}` : '',
      finalNotes:           f.finalNotes || '',
    }

    try {
      const res  = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (data.success) {
        window.location.href = 'https://calendly.com/dave-canopycreativeco/onboarding-kickoff-call'
      } else {
        setSubmitError('Something went wrong — please try again or email hello@canopycreativeco.com')
      }
    } catch {
      setSubmitError('Something went wrong — please try again or email hello@canopycreativeco.com')
    } finally {
      setLoading(false)
    }
  }

  // ── JSX ────────────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col gap-5">

      {/* ── HEADER CARD ── */}
      <div className="bg-brown rounded-xl p-8">
        <p className="font-serif text-[11px] font-bold tracking-[0.28em] uppercase text-orange mb-3">
          Canopy Creative Co.
        </p>
        <h1 className="font-serif font-bold text-cream text-[28px] leading-[1.2] mb-3">
          Client intake form
        </h1>
        <p className="text-[14px] leading-[1.7]" style={{ color: 'rgba(253,246,236,0.65)' }}>
          Thank you for choosing Canopy Creative Co. This form helps us get everything in place
          before your onboarding call. All information is kept strictly confidential.
        </p>
      </div>
      <p className="flex items-center justify-center gap-1.5 text-[12px] leading-[1.6] text-center mt-3" style={{ color: 'rgba(253,246,236,0.6)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[12px] h-[12px] shrink-0">
          <path fillRule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V6H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-.5V4.5A3.5 3.5 0 0 0 8 1Zm2 5V4.5a2 2 0 1 0-4 0V6h4Z" clipRule="evenodd" />
        </svg>
        <span>Submitted securely over an encrypted connection. Your information is shared only with the Canopy Creative Co team and is never sold or shared with third parties.</span>
      </p>

      {/* ── 1A: ABOUT YOUR BUSINESS (always shown) ── */}
      <SectionCard badge="Getting Started" title="About your business">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <Lbl req>Legal business name</Lbl>
            <input type="text" value={fields.legalBusinessName} onChange={(e) => sf('legalBusinessName', e.target.value)} className={inp} />
          </div>
          <div className="sm:col-span-2">
            <Lbl opt>Doing Business As (DBA)</Lbl>
            <Hint>Only if different from your legal business name</Hint>
            <input type="text" value={fields.dba} onChange={(e) => sf('dba', e.target.value)} className={inp} />
          </div>
          <div>
            <Lbl req>Owner / primary contact name</Lbl>
            <input type="text" value={fields.ownerName} onChange={(e) => sf('ownerName', e.target.value)} className={inp} />
          </div>
          <div>
            <Lbl req>Primary business email address</Lbl>
            <input type="email" value={fields.primaryBusinessEmail} onChange={(e) => sf('primaryBusinessEmail', e.target.value)} className={inp} />
          </div>
          <div>
            <Lbl>Primary business phone number</Lbl>
            <input type="tel" value={formatPhone(fields.primaryBusinessPhone)} onChange={(e) => sf('primaryBusinessPhone', e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="(555) 000-0000" className={inp} />
          </div>
        </div>
      </SectionCard>

      {/* ── 2: ADDITIONAL CONTACTS ── */}
      <SectionCard
        badge="Your Team"
        title="Additional points of contact"
        description="Anyone else on your team we should copy on communications or have access to reach? Add as many as apply."
      >
        <div className="flex flex-col gap-4">
          {fields.additionalContacts.map((c, i) => (
            <SubCard key={i}>
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted">
                  Contact {i + 1}
                </p>
                {i > 0 && (
                  <button
                    type="button"
                    onClick={() => ra('additionalContacts', i)}
                    className="text-[11px] font-semibold text-orange border border-orange rounded-full px-3 py-1 hover:bg-orange hover:text-white transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Lbl>Name</Lbl>
                  <input type="text" value={c.name} onChange={(e) => ua('additionalContacts',i,'name',e.target.value)} className={inp} />
                </div>
                <div>
                  <Lbl>Role / title</Lbl>
                  <input type="text" value={c.role} onChange={(e) => ua('additionalContacts',i,'role',e.target.value)} className={inp} />
                </div>
                <div>
                  <Lbl>Email</Lbl>
                  <input type="email" value={c.email} onChange={(e) => ua('additionalContacts',i,'email',e.target.value)} className={inp} />
                </div>
                <div>
                  <Lbl opt>Phone</Lbl>
                  <input type="tel" value={c.phone} onChange={(e) => ua('additionalContacts',i,'phone',e.target.value)} className={inp} />
                </div>
              </div>
            </SubCard>
          ))}
          <AddBtn onClick={() => aa('additionalContacts', CONTACT_T)}>Add another contact</AddBtn>
        </div>
      </SectionCard>

      {/* ── 3: SERVICES ── */}
      <SectionCard
        badge="Your Services"
        title={<>Which services are you signing on for? <span className="text-red-500">*</span></>}
        description="Select everything that applies. We'll ask for the relevant details below based on your selections."
      >
        <div className="flex flex-col gap-5">
          {/* The Roots */}
          <div>
            <span className="inline-block text-[11px] font-semibold tracking-[0.16em] uppercase text-orange border border-orange rounded-full px-3 py-1 mb-3">
              The Roots — Foundation
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ROOTS_SERVICES.map((s) => (
                <ServiceCheckbox key={s.id} id={s.id} label={s.label} checked={svcs.includes(s.id)} onToggle={toggleService} />
              ))}
            </div>
          </div>

          {/* The Canopy */}
          <div>
            <span className="inline-block text-[11px] font-semibold tracking-[0.16em] uppercase text-brown border border-[#C4A98A] bg-cream-dark rounded-full px-3 py-1 mb-3">
              The Canopy — Advisory
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CANOPY_SERVICES.map((s) => (
                <ServiceCheckbox key={s.id} id={s.id} label={s.label} checked={svcs.includes(s.id)} onToggle={toggleService} />
              ))}
            </div>
          </div>

          {/* The Build */}
          <div>
            <span className="inline-block text-[11px] font-semibold tracking-[0.16em] uppercase text-cream bg-brown rounded-full px-3 py-1 mb-3">
              The Build — Operations & Systems
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {BUILD_SERVICES.map((s) => (
                <ServiceCheckbox key={s.id} id={s.id} label={s.label} checked={svcs.includes(s.id)} onToggle={toggleService} />
              ))}
            </div>
          </div>

          <Divider />

          <div>
            <Lbl opt>Services I'm interested in down the road</Lbl>
            <Hint>Not signing on for a service today but want to flag interest for later? Add a note here.</Hint>
            <textarea value={fields.futureServices} onChange={(e) => sf('futureServices', e.target.value)} rows={3} className={ta} />
          </div>
        </div>
      </SectionCard>

      {/* ── 1B: LEGAL & TAX INFORMATION (conditional) ── */}
      {showLegalSection && (
        <SectionCard badge="Legal & Tax Information" title="Legal & tax information">
          <NotePill>
            Please make sure your answers match your official legal documents exactly. This information
            is used for tax filings, 1099s, and other compliance work, so accuracy here really matters.
            When in doubt, refer to your EIN letter, articles of organization, or any documents from
            your state registration.
          </NotePill>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <Lbl>Business address</Lbl>
              <input type="text" value={fields.businessAddress} onChange={(e) => sf('businessAddress', e.target.value)} className={inp} />
            </div>
            <div>
              <Lbl>Entity type</Lbl>
              <select value={fields.entityType} onChange={(e) => sf('entityType', e.target.value)} className={sel}>
                <option value="">Select…</option>
                {['Sole proprietorship','Single-member LLC','Multi-member LLC','S-Corp','C-Corp',
                  'LLC taxed as S-Corp','LLC taxed as C-Corp','Partnership','Other'].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            {fields.entityType === 'Other' && (
              <div>
                <Lbl>Please specify entity type</Lbl>
                <input type="text" value={fields.entityTypeOther} onChange={(e) => sf('entityTypeOther', e.target.value)} className={inp} />
              </div>
            )}
            <div>
              <Lbl>State of formation</Lbl>
              <select value={fields.stateOfFormation} onChange={(e) => sf('stateOfFormation', e.target.value)} className={sel}>
                <option value="">Select a state…</option>
                {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <Lbl>EIN</Lbl>
              <input type="text" value={fields.ein} onChange={(e) => sf('ein', e.target.value)} placeholder="XX-XXXXXXX" className={inp} />
            </div>
            <div>
              <Lbl>Fiscal year end</Lbl>
              <select value={fields.fiscalYearEnd} onChange={(e) => sf('fiscalYearEnd', e.target.value)} className={sel}>
                <option value="">Select…</option>
                {['December 31','March 31','June 30','September 30','Other'].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-3">
            <div>
              <Lbl>Do you currently have a tax preparer?</Lbl>
              <Hint>Either a CPA or tax professional</Hint>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { value: 'yes',          label: 'Yes' },
                { value: 'no-recommend', label: "No — and I'd like a recommendation" },
                { value: 'no-ok',        label: "No — and I'm all set without one" },
              ].map((opt) => (
                <RadioPillRow
                  key={opt.value}
                  value={opt.value}
                  label={opt.label}
                  selected={fields.hasTaxPreparer === opt.value}
                  onSelect={(v) => sf('hasTaxPreparer', v)}
                />
              ))}
            </div>
            {fields.hasTaxPreparer === 'yes' && (
              <SubCard>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">Tax preparer details</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><Lbl>Name</Lbl><input type="text" value={fields.taxPreparer.name} onChange={(e) => sn('taxPreparer','name',e.target.value)} className={inp} /></div>
                  <div><Lbl>Firm name</Lbl><input type="text" value={fields.taxPreparer.firmName} onChange={(e) => sn('taxPreparer','firmName',e.target.value)} className={inp} /></div>
                  <div><Lbl>Email</Lbl><input type="email" value={fields.taxPreparer.email} onChange={(e) => sn('taxPreparer','email',e.target.value)} className={inp} /></div>
                  <div><Lbl>Phone</Lbl><input type="tel" value={fields.taxPreparer.phone} onChange={(e) => sn('taxPreparer','phone',e.target.value)} className={inp} /></div>
                </div>
              </SubCard>
            )}
          </div>
        </SectionCard>
      )}

      {/* ── 4: ACCOUNTING SOFTWARE ── */}
      <SectionCard badge="Accounting" title="Accounting software">
        <div className="flex flex-col gap-4">
          <div>
            <Lbl>Accounting software</Lbl>
            <select value={fields.accountingSoftware} onChange={(e) => sf('accountingSoftware', e.target.value)} className={sel}>
              <option value="">Select…</option>
              {['QuickBooks Online','QuickBooks Desktop','Xero','FreshBooks','Wave','Spreadsheets','None — starting from scratch','Other'].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            {fields.accountingSoftware === 'Other' && (
              <div className="mt-3">
                <Lbl>Please specify</Lbl>
                <input type="text" value={fields.accountingSoftwareOther} onChange={(e) => sf('accountingSoftwareOther', e.target.value)} className={inp} />
              </div>
            )}
          </div>
          {['Xero', 'FreshBooks', 'Wave'].includes(fields.accountingSoftware) && (
            <SubCard>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
                {fields.accountingSoftware} access
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Lbl>Login email</Lbl>
                  <input type="email" value={fields.accountingSoftwareEmail} onChange={(e) => sf('accountingSoftwareEmail', e.target.value)} className={inp} />
                </div>
                <div>
                  <Lbl>Password</Lbl>
                  <input type="text" value={fields.accountingSoftwarePassword} onChange={(e) => sf('accountingSoftwarePassword', e.target.value)} className={inp} />
                </div>
              </div>
            </SubCard>
          )}

          {fields.accountingSoftware === 'Other' && fields.accountingSoftwareOther && (
            <SubCard>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">
                {fields.accountingSoftwareOther} access
              </p>
              <p className="text-[12px] text-muted italic mb-3">
                If your software is cloud-based, please provide login credentials below. Skip this if it's desktop software or doesn't require a login.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Lbl opt>Login email</Lbl>
                  <input type="email" value={fields.accountingSoftwareEmail} onChange={(e) => sf('accountingSoftwareEmail', e.target.value)} className={inp} />
                </div>
                <div>
                  <Lbl opt>Password</Lbl>
                  <input type="text" value={fields.accountingSoftwarePassword} onChange={(e) => sf('accountingSoftwarePassword', e.target.value)} className={inp} />
                </div>
              </div>
            </SubCard>
          )}

          {showQBO && (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Lbl>QuickBooks Online plan</Lbl>
                  <select value={fields.qboPlan} onChange={(e) => sf('qboPlan', e.target.value)} className={sel}>
                    <option value="">Select…</option>
                    {['Simple Start','Essentials','Plus','Advanced'].map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <Lbl>Bank feeds connected?</Lbl>
                  <select value={fields.qboBankFeeds} onChange={(e) => sf('qboBankFeeds', e.target.value)} className={sel}>
                    <option value="">Select…</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <SubCard>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">QuickBooks Online access</p>
                <p className="text-[12px] text-muted italic mb-3">
                  This information does not have to be provided if Canopy Creative Co has been added as an accounting firm on your account.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <Lbl>Login email</Lbl>
                    <input type="email" value={fields.qboEmail} onChange={(e) => sf('qboEmail', e.target.value)} className={inp} />
                  </div>
                  <div>
                    <Lbl>Password</Lbl>
                    <input type="text" value={fields.qboPassword} onChange={(e) => sf('qboPassword', e.target.value)} className={inp} />
                  </div>
                </div>
              </SubCard>
            </div>
          )}
          <div>
            <Lbl opt>Anything else your team should know about your accounting software?</Lbl>
            <textarea value={fields.accountingSoftwareNotes} onChange={(e) => sf('accountingSoftwareNotes', e.target.value)} rows={3} className={ta} />
          </div>
        </div>
      </SectionCard>

      {/* ── 5: BANK ACCOUNTS (conditional) ── */}
      {showBankAccounts && (
        <SectionCard badge="Bank Access" title="Business bank accounts">
          <div className="flex flex-col gap-6">
            <NotePill>
              Please provide login credentials for all business accounts. Quick tip before you fill this section out — most banks and financial institutions let you create a read-only sub-account under your primary login. It's a simple way to provide the access the Canopy Creative Co team needs while keeping your main credentials completely private. If you're setting up a read-only account, just make sure the username is something recognizable like "Your Business Name — Accounting" or "Your Business Name — Read Only" so it's easy to identify and unique to your business.
              <br /><br />
              Questions? Reach out to the Canopy Creative Co team anytime.
            </NotePill>

            {/* Checking */}
            <div className="flex flex-col gap-3">
              <p className="text-[13px] font-semibold text-brown">Business checking accounts</p>
              {fields.checkingAccounts.map((a, i) => (
                <SubCard key={i}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted">
                      Business checking account {i + 1}
                    </p>
                    {i > 0 && (
                      <button
                        type="button"
                        onClick={() => ra('checkingAccounts', i)}
                        className="text-[11px] font-semibold text-orange border border-orange rounded-full px-3 py-1 hover:bg-orange hover:text-white transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div><Lbl>Institution name</Lbl><input type="text" value={a.institution} onChange={(e) => ua('checkingAccounts',i,'institution',e.target.value)} className={inp} /></div>
                    <div><Lbl opt>Account nickname</Lbl><input type="text" value={a.nickname} onChange={(e) => ua('checkingAccounts',i,'nickname',e.target.value)} className={inp} /></div>
                    <div><Lbl>Account number</Lbl><input type="text" value={a.accountNumber} onChange={(e) => ua('checkingAccounts',i,'accountNumber',e.target.value)} className={inp} /></div>
                    <div><Lbl>Login / username email</Lbl><input type="text" value={a.loginEmail} onChange={(e) => ua('checkingAccounts',i,'loginEmail',e.target.value)} className={inp} /></div>
                    <div className="sm:col-span-2"><Lbl>Password</Lbl><input type="text" value={a.password} onChange={(e) => ua('checkingAccounts',i,'password',e.target.value)} className={inp} /></div>
                  </div>
                </SubCard>
              ))}
              <AddBtn onClick={() => aa('checkingAccounts', BANK_T)}>Add another checking account</AddBtn>
            </div>

            <Divider />

            {/* Savings */}
            <div className="flex flex-col gap-3">
              <p className="text-[13px] font-semibold text-brown">Business savings accounts</p>
              {fields.savingsAccounts.map((a, i) => (
                <SubCard key={i}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted">
                      Business savings account {i + 1}
                    </p>
                    {i > 0 && (
                      <button
                        type="button"
                        onClick={() => ra('savingsAccounts', i)}
                        className="text-[11px] font-semibold text-orange border border-orange rounded-full px-3 py-1 hover:bg-orange hover:text-white transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div><Lbl>Institution name</Lbl><input type="text" value={a.institution} onChange={(e) => ua('savingsAccounts',i,'institution',e.target.value)} className={inp} /></div>
                    <div><Lbl opt>Account nickname</Lbl><input type="text" value={a.nickname} onChange={(e) => ua('savingsAccounts',i,'nickname',e.target.value)} className={inp} /></div>
                    <div><Lbl>Account number</Lbl><input type="text" value={a.accountNumber} onChange={(e) => ua('savingsAccounts',i,'accountNumber',e.target.value)} className={inp} /></div>
                    <div><Lbl>Login / username email</Lbl><input type="text" value={a.loginEmail} onChange={(e) => ua('savingsAccounts',i,'loginEmail',e.target.value)} className={inp} /></div>
                    <div className="sm:col-span-2"><Lbl>Password</Lbl><input type="text" value={a.password} onChange={(e) => ua('savingsAccounts',i,'password',e.target.value)} className={inp} /></div>
                  </div>
                </SubCard>
              ))}
              <AddBtn onClick={() => aa('savingsAccounts', BANK_T)}>Add another savings account</AddBtn>
            </div>

            <Divider />

            {/* Credit cards */}
            <div className="flex flex-col gap-3">
              <p className="text-[13px] font-semibold text-brown">Business credit cards</p>
              {fields.creditCards.map((a, i) => (
                <SubCard key={i}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted">
                      Business credit card {i + 1}
                    </p>
                    {i > 0 && (
                      <button
                        type="button"
                        onClick={() => ra('creditCards', i)}
                        className="text-[11px] font-semibold text-orange border border-orange rounded-full px-3 py-1 hover:bg-orange hover:text-white transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div><Lbl>Institution name</Lbl><input type="text" value={a.institution} onChange={(e) => ua('creditCards',i,'institution',e.target.value)} className={inp} /></div>
                    <div><Lbl opt>Card nickname</Lbl><input type="text" value={a.nickname} onChange={(e) => ua('creditCards',i,'nickname',e.target.value)} className={inp} /></div>
                    <div><Lbl>Last 4 digits</Lbl><input type="text" value={a.lastFour} onChange={(e) => ua('creditCards',i,'lastFour',e.target.value)} maxLength={4} placeholder="0000" className={inp} /></div>
                    <div><Lbl>Login / username email</Lbl><input type="text" value={a.loginEmail} onChange={(e) => ua('creditCards',i,'loginEmail',e.target.value)} className={inp} /></div>
                    <div className="sm:col-span-2"><Lbl>Password</Lbl><input type="text" value={a.password} onChange={(e) => ua('creditCards',i,'password',e.target.value)} className={inp} /></div>
                  </div>
                </SubCard>
              ))}
              <AddBtn onClick={() => aa('creditCards', CC_T)}>Add another credit card</AddBtn>
            </div>

            <div>
              <Lbl opt>Anything else your team should know about your accounts?</Lbl>
              <textarea value={fields.accountsNotes} onChange={(e) => sf('accountsNotes', e.target.value)} rows={3} className={ta} />
            </div>
          </div>
        </SectionCard>
      )}

      {/* ── 6: SALES TAX FILING (conditional) ── */}
      {showSalesTax && (
        <SectionCard badge="Sales Tax" title="Sales tax filing">
          <div className="flex flex-col gap-4">
            {fields.salesTaxStates.map((s, i) => (
              <SubCard key={i}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted">
                    State {i + 1}
                  </p>
                  {i > 0 && (
                    <button
                      type="button"
                      onClick={() => ra('salesTaxStates', i)}
                      className="text-[11px] font-semibold text-orange border border-orange rounded-full px-3 py-1 hover:bg-orange hover:text-white transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <Lbl>State</Lbl>
                    <select value={s.state} onChange={(e) => ua('salesTaxStates',i,'state',e.target.value)} className={sel}>
                      <option value="">Select a state…</option>
                      {US_STATES.map((st) => <option key={st} value={st}>{st}</option>)}
                    </select>
                  </div>
                  <div><Lbl>Sales tax ID / permit number</Lbl><input type="text" value={s.taxId} onChange={(e) => ua('salesTaxStates',i,'taxId',e.target.value)} className={inp} /></div>
                  <div>
                    <Lbl>Filing frequency</Lbl>
                    <select value={s.frequency} onChange={(e) => ua('salesTaxStates',i,'frequency',e.target.value)} className={sel}>
                      <option value="">Select…</option>
                      {['Monthly','Quarterly','Annually'].map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div><Lbl>Portal website</Lbl><input type="text" value={s.portalWebsite} onChange={(e) => ua('salesTaxStates',i,'portalWebsite',e.target.value)} placeholder="https://" className={inp} /></div>
                  <div><Lbl>Portal username / login email</Lbl><input type="text" value={s.username} onChange={(e) => ua('salesTaxStates',i,'username',e.target.value)} className={inp} /></div>
                  <div><Lbl>Password</Lbl><input type="text" value={s.password} onChange={(e) => ua('salesTaxStates',i,'password',e.target.value)} className={inp} /></div>
                </div>
              </SubCard>
            ))}
            <AddBtn onClick={() => aa('salesTaxStates', SALES_TAX_T)}>Add another state</AddBtn>
            <Divider />
            <div>
              <Lbl>Do you use a sales tax software?</Lbl>
              <select value={fields.salesTaxSoftware} onChange={(e) => sf('salesTaxSoftware', e.target.value)} className={sel}>
                <option value="">Select…</option>
                {['No, we file manually','Avalara','TaxJar','Vertex','Other'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <Lbl opt>Anything else your team should know about your sales tax situation?</Lbl>
              <textarea value={fields.salesTaxNotes} onChange={(e) => sf('salesTaxNotes', e.target.value)} rows={3} className={ta} />
            </div>
          </div>
        </SectionCard>
      )}

      {/* ── 7: PAYROLL (conditional) ── */}
      {showPayroll && (
        <SectionCard badge="Payroll" title="Payroll support">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Lbl>Payroll service</Lbl>
                <select value={fields.payrollService} onChange={(e) => sf('payrollService', e.target.value)} className={sel}>
                  <option value="">Select…</option>
                  {['QuickBooks Payroll','Gusto','ADP','Paychex','Rippling','Square Payroll','Other'].map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                {fields.payrollService === 'Other' && (
                  <div className="mt-3">
                    <Lbl>Please specify payroll service</Lbl>
                    <input type="text" value={fields.payrollServiceOther} onChange={(e) => sf('payrollServiceOther', e.target.value)} className={inp} />
                  </div>
                )}
              </div>
              <div>
                <Lbl>Pay frequency</Lbl>
                <select value={fields.payrollFrequency} onChange={(e) => sf('payrollFrequency', e.target.value)} className={sel}>
                  <option value="">Select…</option>
                  {['Weekly','Bi-weekly','Semi-monthly','Monthly','Other'].map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                {fields.payrollFrequency === 'Other' && (
                  <div className="mt-3">
                    <Lbl>Please describe your pay frequency</Lbl>
                    <input type="text" value={fields.payrollFrequencyOther} onChange={(e) => sf('payrollFrequencyOther', e.target.value)} className={inp} />
                  </div>
                )}
              </div>
              <div>
                <Lbl>Number of W-2 employees</Lbl>
                <input type="number" min="0" value={fields.w2Employees} onChange={(e) => sf('w2Employees', e.target.value)} className={inp} />
              </div>
              <div>
                <Lbl>Number of 1099 contractors</Lbl>
                <input type="number" min="0" value={fields.contractors1099} onChange={(e) => sf('contractors1099', e.target.value)} className={inp} />
              </div>
            </div>
            <SubCard>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted mb-3">Payroll portal access</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div><Lbl>Login / username email</Lbl><input type="text" value={fields.payrollEmail} onChange={(e) => sf('payrollEmail', e.target.value)} className={inp} /></div>
                <div><Lbl>Password</Lbl><input type="text" value={fields.payrollPassword} onChange={(e) => sf('payrollPassword', e.target.value)} className={inp} /></div>
              </div>
            </SubCard>
            <div>
              <Lbl opt>Anything else your team should know about your payroll setup?</Lbl>
              <textarea value={fields.payrollNotes} onChange={(e) => sf('payrollNotes', e.target.value)} rows={3} className={ta} />
            </div>
          </div>
        </SectionCard>
      )}

      {/* ── 8: 1099 (conditional) ── */}
      {show1099 && (
        <SectionCard badge="1099 Filings" title="1099 prep and filing">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Lbl>Approximate number of contractors to file for</Lbl>
                <input type="number" min="0" value={fields.contractorCount} onChange={(e) => sf('contractorCount', e.target.value)} className={inp} />
              </div>
              <div>
                <Lbl>Do you have W-9s on file?</Lbl>
                <select value={fields.w9OnFile} onChange={(e) => sf('w9OnFile', e.target.value)} className={sel}>
                  <option value="">Select…</option>
                  {['Yes, all of them','Some of them','No'].map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <NotePill>
              We'll use your checking and savings account access (collected above) to review payments. Please ensure those are filled in.
            </NotePill>
            <div>
              <Lbl opt>Anything else your team should know about your 1099 situation?</Lbl>
              <textarea value={fields.notes1099} onChange={(e) => sf('notes1099', e.target.value)} rows={3} className={ta} />
            </div>
          </div>
        </SectionCard>
      )}

      {/* ── 9: ONGOING SOFTWARE (conditional) ── */}
      {showOngoingSW && (
        <SectionCard badge="Software Access" title="Ongoing software & systems operation">
          <div className="flex flex-col gap-4">
            {fields.ongoingSoftware.map((sw, i) => (
              <SubCard key={i}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted">
                    Software {i + 1}
                  </p>
                  {i > 0 && (
                    <button
                      type="button"
                      onClick={() => ra('ongoingSoftware', i)}
                      className="text-[11px] font-semibold text-orange border border-orange rounded-full px-3 py-1 hover:bg-orange hover:text-white transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <SoftwareBlock data={sw} onChange={(sub, val) => ua('ongoingSoftware', i, sub, val)} />
              </SubCard>
            ))}
            <AddBtn onClick={() => aa('ongoingSoftware', SOFTWARE_T)}>Add another software</AddBtn>
            <div>
              <Lbl opt>Anything else your team should know?</Lbl>
              <textarea value={fields.ongoingNotes} onChange={(e) => sf('ongoingNotes', e.target.value)} rows={3} className={ta} />
            </div>
          </div>
        </SectionCard>
      )}

      {/* ── 10: ADVISORY (conditional) ── */}
      {showAdvisory && (
        <SectionCard badge="Advisory" title="Advisory — accounting access">
          <div className="flex flex-col gap-4">
            <NotePill>
              If you've already provided your accounting software login above, you're all set here. If not, please complete that section first.
            </NotePill>
            <div>
              <Lbl>Are all accounts complete and accurate (C&A) in your accounting software?</Lbl>
              <select value={fields.advisoryAccountsAccurate} onChange={(e) => sf('advisoryAccountsAccurate', e.target.value)} className={sel}>
                <option value="">Select…</option>
                {['Yes','No','Not sure — we\'ll need to review'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <Lbl opt>Anything else your team should know about your financial data setup?</Lbl>
              <textarea value={fields.advisoryNotes} onChange={(e) => sf('advisoryNotes', e.target.value)} rows={3} className={ta} />
            </div>
          </div>
        </SectionCard>
      )}

      {/* ── 11: PROJECT PROFITABILITY (conditional) ── */}
      {showProjectProfit && (
        <SectionCard badge="Profitability" title="Project & product profitability">
          <div className="flex flex-col gap-4">
            <div>
              <Lbl>Where do you currently track project transactions?</Lbl>
              <select value={fields.projectTrackingLocation} onChange={(e) => sf('projectTrackingLocation', e.target.value)} className={sel}>
                <option value="">Select…</option>
                <option value="accounting">In my accounting software (by client, project, or class)</option>
                <option value="operational">In an operational software</option>
                <option value="both">Both</option>
                <option value="none">We don't track by project yet</option>
              </select>
            </div>
            {showProjectAccounting && (
              <div>
                <Lbl>How are projects organized?</Lbl>
                <select value={fields.projectOrganization} onChange={(e) => sf('projectOrganization', e.target.value)} className={sel}>
                  <option value="">Select…</option>
                  {['By client','By project','By client and project (nested)','By class or location','Mix of the above'].map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            )}
            {showProjectOpSW && (
              <div>
                <Lbl>Which operational software?</Lbl>
                <select value={fields.projectOpSoftware} onChange={(e) => sf('projectOpSoftware', e.target.value)} className={sel}>
                  <option value="">Select…</option>
                  {['Ivy','Materio','DesignFiles','Houzz Pro','Studio Designer','MyDoma','Other'].map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            )}
            <div>
              <Lbl opt>Anything else your team should know about how you track profitability?</Lbl>
              <textarea value={fields.profitabilityNotes} onChange={(e) => sf('profitabilityNotes', e.target.value)} rows={3} className={ta} />
            </div>
          </div>
        </SectionCard>
      )}

      {/* ── 12: COACHING (conditional) ── */}
      {showCoaching && (
        <SectionCard badge="Coaching" title="Finance & accounting coaching">
          <div className="flex flex-col gap-4">
            <div>
              <Lbl>Do you currently use accounting software?</Lbl>
              <select value={fields.coachingUsesAccounting} onChange={(e) => sf('coachingUsesAccounting', e.target.value)} className={sel}>
                <option value="">Select…</option>
                {['Yes (completed above)','No — I use spreadsheets','No — I don\'t track finances formally'].map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <Lbl opt>What do you most want to focus on?</Lbl>
              <textarea value={fields.coachingFocus} onChange={(e) => sf('coachingFocus', e.target.value)} rows={3} className={ta} />
            </div>
            <div>
              <Lbl opt>Anything else your team should know?</Lbl>
              <textarea value={fields.coachingNotes} onChange={(e) => sf('coachingNotes', e.target.value)} rows={3} className={ta} />
            </div>
          </div>
        </SectionCard>
      )}

      {/* ── 13: SOFTWARE IMPLEMENTATION (conditional) ── */}
      {showSoftwareImpl && (
        <SectionCard badge="Implementation" title="Software discovery, selection & implementation">
          <div className="flex flex-col gap-4">
            <div>
              <Lbl opt>Any background you'd like to share ahead of the call?</Lbl>
              <textarea value={fields.implementationBackground} onChange={(e) => sf('implementationBackground', e.target.value)} rows={3} className={ta} />
            </div>
            <Divider />
            <p className="text-[13px] font-semibold text-brown">Existing software access <span className="text-muted font-normal">(optional)</span></p>
            {fields.implementationSoftware.map((sw, i) => (
              <SubCard key={i}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted">
                    Software {i + 1}
                  </p>
                  {i > 0 && (
                    <button
                      type="button"
                      onClick={() => ra('implementationSoftware', i)}
                      className="text-[11px] font-semibold text-orange border border-orange rounded-full px-3 py-1 hover:bg-orange hover:text-white transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <SoftwareBlock data={sw} onChange={(sub, val) => ua('implementationSoftware', i, sub, val)} />
              </SubCard>
            ))}
            <AddBtn onClick={() => aa('implementationSoftware', SOFTWARE_T)}>Add another software</AddBtn>
          </div>
        </SectionCard>
      )}

      {/* ── 14: WORKFLOW DESIGN (conditional) ── */}
      {showWorkflow && (
        <SectionCard
          badge="Workflow"
          title="Workflow & process design"
          description="List each workflow or process you need help with. Add as many rows as you need."
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              {fields.workflows.map((wf, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[13px] text-muted w-5 shrink-0 text-right select-none">{i + 1}</span>
                  <input
                    type="text"
                    value={wf}
                    onChange={(e) => {
                      const updated = [...fields.workflows]
                      updated[i] = e.target.value
                      sf('workflows', updated)
                    }}
                    className="flex-1 border-0 border-b border-[#D1C4B8] rounded-none px-1 py-2 text-[14px] text-brown bg-transparent outline-none focus:border-orange transition-colors placeholder:text-[#C4A98A]"
                    placeholder="Describe the workflow…"
                  />
                  {i > 1 && (
                    <button
                      type="button"
                      onClick={() => sf('workflows', fields.workflows.filter((_, wi) => wi !== i))}
                      className="text-[11px] font-semibold text-orange border border-orange rounded-full px-3 py-1 hover:bg-orange hover:text-white transition-colors shrink-0"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
            <AddBtn onClick={() => sf('workflows', [...fields.workflows, ''])}>Add another workflow</AddBtn>
            <div>
              <Lbl opt>Anything else your team should know?</Lbl>
              <textarea value={fields.workflowNotes} onChange={(e) => sf('workflowNotes', e.target.value)} rows={3} className={ta} />
            </div>
          </div>
        </SectionCard>
      )}

      {/* ── 15: BUSINESS LAUNCH (conditional) ── */}
      {showBusinessLaunch && (
        <SectionCard
          badge="Launch Support"
          title="Business launch support"
          description="Check everything you need help with. We'll prioritize together on our call."
        >
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {LAUNCH_ITEMS.map((item) => (
                <LaunchCheckbox
                  key={item}
                  label={item}
                  checked={fields.launchItems.includes(item)}
                  onToggle={toggleLaunch}
                />
              ))}
            </div>
            <div>
              <Lbl opt>Anything else not listed above?</Lbl>
              <textarea value={fields.launchNotes} onChange={(e) => sf('launchNotes', e.target.value)} rows={3} className={ta} />
            </div>
          </div>
        </SectionCard>
      )}

      {/* ── 16: BRANDING ── */}
      <SectionCard
        badge="Branding"
        title="Business logo"
        description="We'll use this on any client-facing documents we prepare on your behalf."
      >
        <FileZone
          accept=".png,.svg,.pdf"
          hint="PNG, SVG, or PDF — up to 10MB"
          value={fields.logoFileName}
          onChange={(v) => sf('logoFileName', v)}
        />
      </SectionCard>

      {/* ── 17: ATTACHMENTS ── */}
      <SectionCard
        badge="Attachments"
        title="Anything else you'd like to share?"
        description="Upload any documents that help give us context — prior reports, spreadsheets, contracts, or anything else."
      >
        <FileZone
          accept=".pdf,.xlsx,.xls,.doc,.docx,.jpg,.jpeg,.png"
          hint="PDF, Excel, Word, images — up to 25MB"
          multiple
          value={fields.attachmentFileNames}
          onChange={(v) => sf('attachmentFileNames', v)}
        />
      </SectionCard>

      {/* ── 18: JUST FOR FUN ── */}
      <SectionCard
        badge="Just for Fun"
        title="A little about you"
        description="Totally optional — but we love getting to know the people behind the businesses we work with."
      >
        <div className="flex flex-col gap-4">
          <SubCard>
            <Lbl opt>Birthday (month and day)</Lbl>
            <Hint>We love celebrating our people.</Hint>
            <input
              type="text"
              value={fields.birthday}
              onChange={(e) => sf('birthday', e.target.value)}
              placeholder="e.g. March 15"
              className={`${inp} max-w-[240px]`}
            />
          </SubCard>
          <SubCard>
            <Lbl opt>Primary business social media</Lbl>
            <Hint>So we can cheer you on publicly.</Hint>
            <div className="grid grid-cols-2 gap-3 mt-1">
              <div>
                <select
                  value={fields.socialPlatform}
                  onChange={(e) => { sf('socialPlatform', e.target.value); sf('socialHandle', '') }}
                  className={sel}
                >
                  <option value="">Select platform…</option>
                  {SOCIAL_PLATFORMS.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              {fields.socialPlatform && (
                <div>
                  {PLATFORM_PREFIXES[fields.socialPlatform] ? (
                    <div className="flex items-center border border-[#D1C4B8] rounded-lg bg-white overflow-hidden transition-colors focus-within:border-orange">
                      <span className="pl-3 pr-1 text-[14px] text-muted select-none">{PLATFORM_PREFIXES[fields.socialPlatform]}</span>
                      <input
                        type="text"
                        value={fields.socialHandle}
                        onChange={(e) => sf('socialHandle', e.target.value.replace(/^[@/]+/, ''))}
                        placeholder={PLATFORM_PLACEHOLDERS[fields.socialPlatform] || 'yourhandle'}
                        className="flex-1 bg-transparent py-2.5 pr-3 text-[14px] text-brown outline-none placeholder:text-[#C4A98A]"
                      />
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={fields.socialHandle}
                      onChange={(e) => sf('socialHandle', e.target.value)}
                      placeholder={PLATFORM_PLACEHOLDERS[fields.socialPlatform] || 'Channel name or URL'}
                      className={inp}
                    />
                  )}
                </div>
              )}
            </div>
          </SubCard>
        </div>
      </SectionCard>

      {/* ── 19: FINAL NOTES ── */}
      <SectionCard
        badge="Final Thoughts"
        title="Anything else we should know?"
        description="This is your space — share whatever context you think would be helpful before your onboarding call."
      >
        <textarea
          value={fields.finalNotes}
          onChange={(e) => sf('finalNotes', e.target.value)}
          rows={5}
          className={ta}
        />
      </SectionCard>

      {/* ── 20: CLOSING CARD ── */}
      <div className="bg-brown rounded-xl p-8 text-center">
        <h2 className="font-serif font-bold text-cream text-[22px] leading-[1.25] mb-3">
          Thank you for trusting us with your business.
        </h2>
        <p className="text-[13px] leading-[1.7] mb-8 max-w-[440px] mx-auto" style={{ color: 'rgba(253,246,236,0.65)' }}>
          One click. Form submitted. Schedule your kickoff call. Let's get to work.
        </p>
        <div className="flex flex-col items-center gap-3">
          {loading ? (
            <div className="flex flex-col items-center gap-4">
              <svg
                className="animate-spin"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="15" stroke="rgba(253,246,236,0.2)" strokeWidth="3" />
                <path
                  d="M18 3a15 15 0 0 1 15 15"
                  stroke="#CC4E00"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-[13px] leading-[1.7] max-w-[360px]" style={{ color: 'rgba(253,246,236,0.65)' }}>
                Almost there! We're saving your response in the background — this can take up to a minute.<br />Please don't close or refresh this page.
              </p>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full sm:w-auto bg-white text-orange border border-orange text-[15px] font-semibold px-8 py-3.5 rounded-lg transition-colors duration-150 hover:bg-orange hover:text-white"
            >
              Schedule onboarding kickoff call →
            </button>
          )}
          {submitError && (
            <p className="text-[13px] text-red-400 leading-[1.6] max-w-[400px]">{submitError}</p>
          )}
        </div>
      </div>

    </div>
  )
}
