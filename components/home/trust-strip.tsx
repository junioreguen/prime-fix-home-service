import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/global/container";

const benefits = [
  {
    title: "Fast Response",
    description:
      "Get help for everyday home maintenance issues without unnecessary delays.",
  },
  {
    title: "Skilled Technicians",
    description:
      "Practical experience across common residential repair and maintenance needs.",
  },
  {
    title: "Clear Communication",
    description:
      "Know what needs attention before work begins.",
  },
  {
    title: "Local Service",
    description:
      "Focused on homes and properties across Lagos.",
  },
] as const;

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-white">
      <Container>
        <div className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="px-0 py-7 md:px-7 lg:px-8 lg:py-8"
            >
              <CheckCircle2
                size={20}
                className="text-orange"
                aria-hidden="true"
              />

              <h2 className="mt-4 text-base font-bold tracking-[-0.02em] text-ink">
                {benefit.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-ink-muted">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}