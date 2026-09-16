import { ArrowUpRight, Phone } from "lucide-react";

import { Button } from "@/components/global/button";
import { Container } from "@/components/global/container";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

interface ServiceFinalCtaProps {
  serviceName: string;
}

export function ServiceFinalCta({
  serviceName,
}: ServiceFinalCtaProps) {
  return (
    <section className="bg-forest text-white">
      <Container className="section-padding">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-light">
              Need {serviceName.toLowerCase()}?
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Tell us what needs fixing.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white sm:text-lg sm:leading-8">
              Describe the problem and PrimeFix can help you work out the next
              step.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button
              href="/contact"
              className="!text-forest"
            >
              Request a Service
              <ArrowUpRight size={17} />
            </Button>

            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-white px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:!text-forest"
            >
              <Phone size={17} />
              Call PrimeFix
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-[4px] border border-white/50 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:!text-forest"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}