import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";

import { Button } from "@/components/global/button";
import { Container } from "@/components/global/container";
import { CONTACT } from "@/lib/constants";

interface ServiceDetailHeroProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

export function ServiceDetailHero({
  number,
  title,
  description,
  image,
}: ServiceDetailHeroProps) {
  return (
    <section className="bg-background pt-28 sm:pt-32 lg:pt-36">
      <Container>
        <div className="grid gap-10 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:pb-24">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-orange">
              <span>{number}</span>
              <span className="h-px w-8 bg-orange" />
              <span>PrimeFix Service</span>
            </div>

            <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl">
              {title}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">
                Request a Service
                <ArrowUpRight size={17} />
              </Button>

              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-forest px-6 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:!text-white"
              >
                <Phone size={17} />
                Call PrimeFix
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[8px]">
            <div className="relative aspect-[4/3]">
              <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 55vw"
              />
            </div>

            <div className="absolute bottom-5 left-5 max-w-[230px] rounded-[6px] bg-forest px-5 py-4 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-light">
                Home maintenance
              </p>
              <p className="mt-1 text-sm font-semibold leading-5">
                Practical help for everyday property needs.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}