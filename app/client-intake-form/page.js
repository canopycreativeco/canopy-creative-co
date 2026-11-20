import IntakeForm from './IntakeForm'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: 'Client Intake',
  description: 'Onboarding intake form for Canopy Creative Co clients.',
  path: '/client-intake-form',
})

export default function ClientIntakePage() {
  return (
    <div className="bg-cream min-h-screen pt-[100px] pb-20 px-4">
      <div className="max-w-[720px] mx-auto">
        <IntakeForm />
      </div>
    </div>
  )
}
