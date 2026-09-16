import { ArrowRight } from "lucide-react";

import { Container } from "@/components/global/container";

interface ServiceExpectationsProps {
  expectations: readonly string[];
}

export function ServiceExpectations({
  expectations,
}: ServiceExpectationsProps) {
  return (
    <section className="bg-background-muted">
      <Container className="section-padding">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest">
              What To Expect
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-ink sm:text-5xl">
              Straightforward from the start.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-ink-muted">
              The exact work depends on the condition of the property and the
              problem involved, but the process stays focused on clear
              communication and practical next steps.
            </p>
          </div>

          <div>
            {expectations.map((expectation, index) => (
              <div
                key={expectation}
                className="flex gap-5 border-t border-border py-6 last:border-b"
              >
                <span className="text-xs font-bold tracking-[0.12em] text-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <p className="text-base font-semibold leading-7 text-ink sm:text-lg">
                    {expectation}
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  className="mt-1 shrink-0 text-forest"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}