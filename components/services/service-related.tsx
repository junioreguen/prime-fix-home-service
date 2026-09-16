import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/global/container";
import { services } from "@/data/services";

interface ServiceRelatedProps {
  currentSlug: string;
}

export function ServiceRelated({ currentSlug }: ServiceRelatedProps) {
  const relatedServices = services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="bg-background">
      <Container className="section-padding">
        <div className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange">
            More Services
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-ink sm:text-5xl">
            More ways PrimeFix can help.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex min-h-40 flex-col justify-between rounded-[8px] border border-border bg-white p-6 transition-colors hover:border-forest hover:bg-forest !hover:text-white"
            >
              <div className="flex items-start justify-between gap-4 hover:!text-white">
                <span className="text-[10px] font-bold tracking-[0.16em] text-orange">
                  {service.number}
                </span>

                <span className="flex size-9 items-center justify-center rounded-full bg-background-muted text-forest transition-colors group-hover:bg-white group-hover:text-forest">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold tracking-[-0.03em] group-hover:!text-white">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-ink-muted group-hover:text-white/80">
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}