import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";

import { Button } from "@/components/global/button";
import { Container } from "@/components/global/container";
import { CONTACT } from "@/lib/constants";

export function Hero() {
  return (
    <section className="overflow-hidden bg-background pt-28 sm:pt-32 lg:pt-36">
      <Container>
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:pb-28">
          <div className="max-w-2xl">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-forest">
              Home Repairs & Maintenance · Lagos
            </p>

            <h1 className="max-w-xl text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] text-ink sm:text-6xl lg:text-[72px]">
              Reliable home repairs without the runaround.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
              From plumbing and electrical repairs to AC servicing and
              everyday maintenance, PrimeFix helps homeowners get essential
              work handled properly and without unnecessary hassle.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">
                Request a Service
                <ArrowUpRight size={17} />
              </Button>

              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-forest bg-transparent px-6 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
              >
                <Phone size={17} />
                Call PrimeFix
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px]">
              <Image
                src="/images/hero/primefix-hero-technician.webp"
                alt="PrimeFix technician working inside a modern Lagos home"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 52vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-5 hidden bg-white p-5 shadow-sm sm:block lg:-left-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange">
                Home maintenance
              </p>
              <p className="mt-2 text-sm font-semibold text-ink">
                Practical help when you need it.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}