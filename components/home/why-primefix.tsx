import { ArrowRight } from "lucide-react";

import { Container } from "@/components/global/container";

const principles = [
  {
    number: "01",
    title: "Show Up",
    description:
      "Respect agreed appointments and communicate when plans change.",
  },
  {
    number: "02",
    title: "Do the Work Properly",
    description:
      "Focus on practical repairs rather than unnecessary complexity.",
  },
  {
    number: "03",
    title: "Keep It Clear",
    description:
      "Explain the work and next steps in straightforward language.",
  },
] as const;

export function WhyPrimeFix() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest">
              Why PrimeFix
            </p>

            <h2 className="mt-5 max-w-lg text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
              Home maintenance should be simple.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-ink-muted">
              You shouldn&apos;t have to spend your day chasing technicians,
              explaining the same problem repeatedly or wondering when
              someone will arrive. PrimeFix is built around straightforward
              communication, practical service and getting the job done.
            </p>

            <div className="mt-12 divide-y divide-border border-y border-border">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="grid gap-4 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-center sm:gap-6"
                >
                  <span className="text-xs font-bold tracking-[0.15em] text-orange">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.025em] text-ink">
                      {principle.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-ink-muted">
                      {principle.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="hidden text-forest sm:block"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}