import {
  ArrowUpRight,
  Droplets,
  Hammer,
  Paintbrush,
  Settings,
  Wind,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/global/container";
import { SectionHeading } from "@/components/global/section-heading";
import { services } from "@/data/services";

const icons = {
  Droplets,
  Zap,
  Wind,
  Hammer,
  Paintbrush,
  Settings,
} as const;

export function ServicesPreview() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="What We Fix"
          title="The everyday problems around your home."
          description="From essential repairs to routine maintenance, PrimeFix covers the jobs that keep a home working properly."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-[8px] border border-border bg-white p-7 transition-colors duration-200 hover:border-forest sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-full bg-orange-light text-forest">
                    <Icon size={21} aria-hidden="true" />
                  </div>

                  <span className="text-xs font-bold tracking-[0.15em] text-orange">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-[-0.035em] text-ink">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-ink-muted">
                  {service.shortDescription}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                  View service
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-9">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-semibold text-forest transition-colors hover:border-orange hover:text-orange"
          >
            View all services
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}