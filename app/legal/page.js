"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms of Use" },
  { id: "disclaimer", label: "Disclaimer" },
];

export default function LegalPage() {
  const [active, setActive] = useState("privacy");

  useEffect(() => {
    const observers = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <main className="bg-[#FDF6EC] min-h-screen">
      {/* Page Header */}
      <div className="bg-[#3B1E08] px-6 pt-[100px] pb-16 max-md:pt-[80px] max-md:pb-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#9A7A62] text-sm tracking-widest uppercase mb-3 font-['DM_Sans']">
            Legal
          </p>
          <h1 className="font-['Libre_Baskerville'] text-[#FDF6EC] text-4xl md:text-5xl leading-tight">
            Policies &amp; Terms
          </h1>
          <p className="text-[#9A7A62] mt-4 font-['DM_Sans'] text-sm">
            Last updated: January 1, 2026
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row gap-12">

        {/* Sidebar Nav */}
        <aside className="md:w-48 shrink-0">
          <nav className="md:sticky md:top-8 flex flex-row md:flex-col gap-2 flex-wrap">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`text-sm font-['DM_Sans'] transition-colors py-1 border-b ${
                  active === s.id
                    ? "text-[#CC4E00] border-[#CC4E00]"
                    : "text-[#9A7A62] border-transparent hover:text-[#CC4E00] hover:border-[#CC4E00]"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="flex-1 space-y-16 font-['DM_Sans'] text-[#3B1E08]">

          {/* Privacy Policy */}
          <section id="privacy">
            <h2 className="font-['Libre_Baskerville'] text-2xl md:text-3xl text-[#3B1E08] mb-6">
              Privacy Policy
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-[#3B1E08]/80">
              <p>
                Canopy Creative Consulting LLC, doing business as Canopy Creative Co ("we," "us," or "our") operates this website at canopycreativeco.com. This policy explains what information we collect, how we use it, and your rights with respect to it.
              </p>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Information we collect</h3>
                <p>
                  When you submit a contact or intake form on this site, we collect the information
                  you provide — such as your name, email address, phone number, and business
                  details. We do not collect payment information through this website.
                </p>
                <p className="mt-3">
                  We may also collect basic analytics data (pages visited, time on site, referring
                  URL) through third-party analytics tools. This data is aggregated and not linked
                  to any individual.
                </p>
              </div>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">How we use your information</h3>
                <p>
                  We use the information you submit solely to respond to your inquiry, schedule
                  calls, and onboard you as a client. We do not sell, rent, or share your
                  information with third parties for marketing purposes.
                </p>
              </div>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Third-party tools</h3>
                <p>
                  Our site uses third-party services including form providers and scheduling
                  software. These services have their own privacy policies that govern how they
                  handle your data. We encourage you to review them.
                </p>
              </div>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Data retention</h3>
                <p>
                  We retain contact and intake information for as long as it is reasonably
                  necessary to provide services or respond to your inquiry. You may request
                  deletion of your information at any time by contacting us.
                </p>
              </div>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Your rights</h3>
                <p>
                  You may request access to, correction of, or deletion of any personal
                  information we hold about you. To make a request, email us at the address below.
                </p>
              </div>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Contact</h3>
                <p>
                  Canopy Creative Consulting LLC (DBA: Canopy Creative Co)<br />
                  5005 W Laurel Street, Suite 100, PMB 3206<br />
                  Tampa, FL 33607<br />
                  United States<br />
                  <a href="mailto:hello@canopycreativeco.com" className="text-[#CC4E00] hover:underline">
                    hello@canopycreativeco.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          <hr className="border-[#F5EBD8]" />

          {/* Terms of Use */}
          <section id="terms">
            <h2 className="font-['Libre_Baskerville'] text-2xl md:text-3xl text-[#3B1E08] mb-6">
              Terms of Use
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-[#3B1E08]/80">
              <p>
                By accessing or using this website, you agree to the following terms. If you do
                not agree, please do not use the site.
              </p>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Use of this site</h3>
                <p>
                  This website is provided for informational purposes only. You may not use this
                  site for any unlawful purpose or in a way that could damage, disable, or impair
                  our services.
                </p>
              </div>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Intellectual property</h3>
                <p>
                  All content on this site — including text, design, graphics, and logos — is the
                  property of Canopy Creative Consulting LLC and may not be reproduced or distributed
                  without our written permission.
                </p>
              </div>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Third-party links</h3>
                <p>
                  This site may contain links to external websites. We are not responsible for the
                  content or practices of those sites and provide links for convenience only.
                </p>
              </div>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Limitation of liability</h3>
                <p>
                  To the fullest extent permitted by law, Canopy Creative Consulting LLC shall not be
                  liable for any damages arising from your use of, or inability to use, this
                  website or its content.
                </p>
              </div>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Changes to these terms</h3>
                <p>
                  We may update these terms at any time. Continued use of the site after changes
                  are posted constitutes your acceptance of the updated terms.
                </p>
              </div>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Governing law</h3>
                <p>
                  These terms are governed by the laws of the State of Florida, without regard to
                  its conflict of law provisions.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-[#F5EBD8]" />

          {/* Disclaimer */}
          <section id="disclaimer">
            <h2 className="font-['Libre_Baskerville'] text-2xl md:text-3xl text-[#3B1E08] mb-6">
              Disclaimer
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-[#3B1E08]/80">
              <p>
                The information on this website is provided for general informational purposes
                only and does not constitute professional financial, accounting, tax, or legal
                advice.
              </p>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Not a substitute for professional advice</h3>
                <p>
                  Nothing on this site should be relied upon as a substitute for consultation
                  with a qualified CPA, attorney, or other licensed professional. Every business
                  situation is unique, and general information may not apply to your specific
                  circumstances.
                </p>
              </div>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">No guarantee of results</h3>
                <p>
                  Any examples, case studies, or descriptions of outcomes on this site are
                  illustrative only. We make no guarantee that you will achieve the same or
                  similar results by engaging our services.
                </p>
              </div>
              <div>
                <h3 className="font-['Libre_Baskerville'] text-lg text-[#3B1E08] mb-2">Accuracy of information</h3>
                <p>
                  We make reasonable efforts to keep the content on this site accurate and
                  current, but we make no representations or warranties about the completeness,
                  accuracy, or timeliness of any information presented.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom note */}
          <div className="pt-4 border-t border-[#F5EBD8]">
            <p className="text-sm text-[#9A7A62]">
              Questions about these policies?{" "}
              <a href="mailto:hello@canopycreativeco.com" className="text-[#CC4E00] hover:underline">
                Get in touch.
              </a>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
