import IntakeForm from './IntakeForm'

export const metadata = {
  title: 'Client Intake — Canopy Creative Co.',
  description: 'Onboarding intake form for Canopy Creative Co. clients.',
}

export default function ClientIntakePage() {
  return (
    <div className="bg-cream min-h-screen pt-[100px] pb-20 px-4">
      <div className="max-w-[720px] mx-auto">
        <IntakeForm />
      </div>
    </div>
  )
}
