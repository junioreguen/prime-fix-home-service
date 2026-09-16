import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/global/container";
import { processSteps } from "@/data/process";

export function HowItWorksPreview() {
  return (
    <section className="section-padding bg-forest text-white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-light">
              How It Works
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl">
              Getting help should be straightforward.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-white sm:text-lg sm:leading-8">
              Tell us what is happening, confirm the details and let the
              service process take care of the next step.
            </p>

            <Link
              href="/how-it-works"
              className="mt-8 inline-flex items-center gap-2 border-b border-white pb-1 text-sm font-semibold text-white transition-colors hover:border-orange-light hover:text-orange-light"
            >
              See how it works
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="divide-y divide-white/20">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="grid gap-4 py-7 first:pt-0 last:pb-0 sm:grid-cols-[80px_1fr] sm:gap-8"
              >
                <span className="text-sm font-bold tracking-[0.12em] text-orange-light">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold tracking-[-0.025em] text-white sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-white sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}