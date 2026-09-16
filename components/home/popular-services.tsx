import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/global/container";
import { SectionHeading } from "@/components/global/section-heading";
import { services } from "@/data/services";

const popularSlugs = [
  "air-conditioning",
  "plumbing",
  "electrical",
  "general-maintenance",
] as const;

export function PopularServices() {
  const popularServices = popularSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean);

  return (
    <section className="section-padding bg-background-muted">
      <Container>
        <SectionHeading
          eyebrow="Popular Services"
          title="Common jobs, handled practically."
          description="A few of the services homeowners commonly need around the house."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {popularServices.map((service) => {
            if (!service) {
              return null;
            }

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-[8px] border border-border bg-white"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} home service`}
                    fill
                    sizes="(max-width: 639px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.035em] text-ink">
                        {service.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-ink-muted">
                        {service.shortDescription}
                      </p>
                    </div>

                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest text-white"
                      aria-hidden="true"
                    >
                      <ArrowUpRight size={17} />
                    </span>
                  </div>

                  <p className="mt-6 text-sm font-semibold text-forest">
                    Request this service →
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}