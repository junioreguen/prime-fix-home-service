import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/global/button";
import { Container } from "@/components/global/container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the practical service principles behind PrimeFix Home Services.",
};

const principles = [
  {
    number: "01",
    title: "Show Up",
    description:
      "Respect the agreed appointment and communicate clearly when plans change.",
  },
  {
    number: "02",
    title: "Do the Work Properly",
    description:
      "Focus on practical repairs and maintenance rather than unnecessary complexity.",
  },
  {
    number: "03",
    title: "Keep It Clear",
    description:
      "Explain the work, the issue and the next steps in straightforward language.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="bg-background pt-32 sm:pt-36 lg:pt-40">
        <Container className="pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-4xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange">
              About PrimeFix · Lagos
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl">
              Home maintenance should not become another problem to manage.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
              PrimeFix is built around a simple idea: when something in your
              home needs fixing, getting help should be clear, practical and
              straightforward.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-forest text-white">
        <Container className="section-padding">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-light">
                Why PrimeFix
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-5xl">
                Less chasing. More getting things done.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-white sm:text-lg sm:leading-8">
                Home repairs can become frustrating when communication is
                unclear, appointments are uncertain or the work itself is
                difficult to understand. PrimeFix is designed around removing
                as much of that friction as possible.
              </p>

              <p className="mt-6 text-base leading-7 text-white sm:text-lg sm:leading-8">
                The focus is practical: understand the problem, communicate
                the next step and handle the work that needs doing.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="section-padding">
          <div className="mb-12 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange">
              How We Work
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-ink sm:text-5xl">
              Three principles behind the service.
            </h2>
          </div>

          <div className="grid border-t border-border md:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle.number}
                className={`border-b border-border p-6 sm:p-8 lg:p-10 ${
                  index < 2 ? "md:border-r" : ""
                }`}
              >
                <p className="text-sm font-extrabold tracking-[0.14em] text-orange">
                  {principle.number}
                </p>

                <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.04em] text-ink">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-ink-muted">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background-muted">
        <Container className="section-padding">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest">
              Who We Serve
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-ink sm:text-5xl">
              Built around real residential maintenance needs.
            </h2>

            <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
              {[
                "Homeowners",
                "Renters",
                "Landlords",
                "Property managers",
                "Busy professionals",
                "Residential properties",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[6px] border border-border bg-white p-4"
                >
                  <CheckCircle2 size={18} className="text-orange" />
                  <span className="text-sm font-semibold text-ink">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/contact">
                Request a Service
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}