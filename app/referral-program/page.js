import Link from 'next/link'
import AffiliateForm from './AffiliateForm'

export const metadata = {
  title: 'Become an Affiliate',
  description:
    'Share The Roots and The Canopy with others you know and earn a 20% commission on every referral. Apply to the Canopy Creative Co affiliate program.',
  openGraph: {
    title: 'Become an Affiliate | Canopy Creative Co',
    description:
      'Share The Roots and The Canopy with others you know and earn a 20% commission on every referral. Apply to the Canopy Creative Co affiliate program.',
    url: 'https://www.canopycreativeco.com/referral-program',
    siteName: 'Canopy Creative Co',
  },
  alternates: {
    canonical: 'https://www.canopycreativeco.com/referral-program',
  },
}

const steps = [
  'Apply below. We review each application and reply within 2 business days.',
  'We set up your affiliate account and send you a personal referral link.',
  'Share your link. You earn a 20% commission on The Roots and The Canopy, tracked automatically and paid quarterly through PayPal.',
]

export default function ReferralProgramPage() {
  return (
    <section className="bg-cream min-h-screen pt-[140px] pb-[100px] px-6">
      <div className="max-w-[640px] mx-auto">
        <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
          Referral Program
        </p>
        <h1
          className="font-serif font-bold text-brown leading-[1.2] tracking-[-0.01em] mb-5"
          style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
        >
          Become
          <br />
          an&nbsp;affiliate.
        </h1>
        <p className="text-[17px] text-brown/75 leading-[1.7] mb-12">
          If The Roots or The Canopy earned a place in how you run your business, you can put
          them in front of others you know and earn a commission for the introduction.
        </p>

        {/* How it works */}
        <div className="flex flex-col gap-5 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="font-serif font-bold text-orange text-[20px] leading-[1.4] shrink-0">
                {i + 1}.
              </span>
              <p className="text-[16px] text-brown/85 leading-[1.7]">{step}</p>
            </div>
          ))}
        </div>

        <p className="text-[14px] text-muted leading-[1.6] mb-12">
          For The Canopy, commission comes from your referral's first annual payment. The rest
          of the fine print lives in the{' '}
          <Link href="/legal#affiliate" className="text-orange no-underline hover:underline">
            Affiliate Program Terms
          </Link>
          .
        </p>

        <AffiliateForm />

        <p className="text-[14px] text-muted leading-[1.6] mt-10">
          Questions first? Reach us at{' '}
          <a
            href="mailto:hello@canopycreativeco.com"
            className="text-orange no-underline hover:underline"
          >
            hello@canopycreativeco.com
          </a>
        </p>
      </div>
    </section>
  )
}
