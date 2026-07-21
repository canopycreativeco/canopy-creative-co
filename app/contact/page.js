import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact',
  description: 'Canopy Creative Co teaches operators to run lean businesses with AI. Free monthly live demos, a self-paced course, an ongoing membership, and done-with-you systems work.',
  openGraph: {
    title: 'Contact | Canopy Creative Co',
    description: 'Canopy Creative Co teaches operators to run lean businesses with AI. Free monthly live demos, a self-paced course, an ongoing membership, and done-with-you systems work.',
    url: 'https://www.canopycreativeco.com/contact',
    siteName: 'Canopy Creative Co',
  },
  alternates: {
    canonical: 'https://www.canopycreativeco.com/contact',
  },
}

export default function ContactPage() {
  return (
    <section className="bg-cream min-h-screen pt-[140px] pb-[100px] px-6">
      <div className="max-w-[640px] mx-auto">
        <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-orange/85 mb-5">
          Get in Touch
        </p>
        <h1
          className="font-serif font-bold text-brown leading-[1.2] tracking-[-0.01em] mb-5"
          style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
        >
          Let's figure out
          <br />
          the right&nbsp;fit.
        </h1>
        <p className="text-[17px] text-brown/75 leading-[1.7] mb-12">
          Fill out the form below and let's get started with a free discovery call.
        </p>

        <ContactForm />

        <p className="text-[14px] text-muted leading-[1.6] mt-10">
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
