export const metadata = {
  title: 'Contact — Canopy Creative Co.',
  description: "Get in touch with Canopy Creative Co. — let's figure out the right fit for your creative business.",
}

export default function ContactPage() {
  return (
    <section className="bg-cream min-h-screen pt-[140px] pb-[100px] px-6">
      <div className="max-w-[640px] mx-auto">
        <p className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
          Get in Touch
        </p>
        <h1
          className="font-serif font-bold text-brown leading-[1.2] tracking-[-0.01em] mb-5"
          style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
        >
          Let's figure out the right fit.
        </h1>
        <p className="text-[17px] text-brown/75 leading-[1.7] mb-12">
          Fill out the form below and we'll be in touch within one business day.
        </p>

        {/* Tally form embed placeholder */}
        <div id="tally-embed" className="mb-12">
          {/* Tally form embed goes here */}
        </div>

        <p className="text-[14px] text-muted leading-[1.6]">
          Prefer email? Reach us at{' '}
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
