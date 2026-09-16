import type { Metadata } from "next";

import { Container } from "@/components/global/container";
import { Button } from "@/components/global/button";
import { ServiceCard } from "@/components/services/service-card";
import { ServicesHero } from "@/components/services/services-hero";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore PrimeFix home repair and maintenance services, including plumbing, electrical, AC servicing, carpentry, painting and general maintenance.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="section-padding bg-background">
        <Container>
          <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-forest">
                What We Fix
              </p>

              <h2 className="text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-ink sm:text-5xl">
                Everyday problems. Properly handled.
              </h2>

              <p className="mt-5 text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
                Choose the type of work you need help with. Each service page
                explains what PrimeFix can handle and what you can expect next.
              </p>
            </div>

            <Button href="/contact" className="w-fit shrink-0">
              Request a Service
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background-muted">
        <Container className="section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange">
                Not sure what you need?
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-ink sm:text-5xl">
                Just tell us what is wrong.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
                You do not need to know the exact service category before
                contacting PrimeFix. Describe the problem and the next step
                can be worked out from there.
              </p>

              <div className="mt-7">
                <Button href="/contact">
                  Tell Us What You Need
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}