import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/global/container";
import { ServiceRequestForm } from "@/components/contact/service-request-form";
import { CONTACT, DEMO_DISCLAIMER, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a PrimeFix home repair or maintenance service through the enquiry form, phone or WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-forest pt-32 text-white sm:pt-36 lg:pt-40">
        <Container className="pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-light">
              Request a Service · Lagos
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Tell us what needs fixing.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
              Describe the job and the next step can be worked out from there.
              You can also contact PrimeFix directly by phone or WhatsApp.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="section-padding">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <ServiceRequestForm />

            <aside>
              <div className="rounded-[8px] bg-background-muted p-6 sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange">
                  Contact PrimeFix
                </p>

                <div className="mt-7 space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="mt-0.5 shrink-0 text-forest" size={20} />

                    <div>
                      <p className="text-sm font-bold text-ink">Location</p>
                      <p className="mt-1 text-sm leading-6 text-ink-muted">
                        {CONTACT.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="mt-0.5 shrink-0 text-forest" size={20} />

                    <div>
                      <p className="text-sm font-bold text-ink">Phone</p>
                      <a
                        href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                        className="mt-1 block text-sm leading-6 text-ink-muted transition-colors hover:text-forest"
                      >
                        {CONTACT.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="mt-0.5 shrink-0 text-forest" size={20} />

                    <div>
                      <p className="text-sm font-bold text-ink">Email</p>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="mt-1 block text-sm leading-6 text-ink-muted transition-colors hover:text-forest"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 flex min-h-12 items-center justify-center gap-2 rounded-[4px] bg-forest px-6 text-sm font-semibold !text-white transition-colors hover:bg-forest-dark"
                >
                  Chat on WhatsApp
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="mt-6 border-l-2 border-orange pl-5">
                <p className="text-xs leading-5 text-ink-muted">
                  {DEMO_DISCLAIMER}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}