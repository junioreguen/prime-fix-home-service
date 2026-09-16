import { Check } from "lucide-react";

import { Container } from "@/components/global/container";

interface ServiceProblemsProps {
  problems: readonly string[];
}

export function ServiceProblems({ problems }: ServiceProblemsProps) {
  return (
    <section className="bg-white">
      <Container className="section-padding">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange">
              What We Handle
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-ink sm:text-5xl">
              Common problems we can help with.
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {problems.map((problem) => (
              <div
                key={problem}
                className="flex gap-4 border-b border-border py-5"
              >
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-orange-light text-orange">
                  <Check size={15} strokeWidth={2.5} />
                </span>

                <p className="text-sm font-semibold leading-6 text-ink">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}