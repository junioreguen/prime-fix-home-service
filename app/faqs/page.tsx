import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/global/button";
import { Container } from "@/components/global/container";
import { FaqList } from "@/components/faqs/faq-list";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about PrimeFix home repair and maintenance services.",
};

export default function FaqsPage() {
  return (
    <>
      <section className="bg-forest pt-32 text-white sm:pt-36 lg:pt-40">
        <Container className="pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-light">
              Frequently Asked Questions
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Before you request a service.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
              Here are answers to some of the common questions homeowners and
              property managers may have.
            </p>
          </div>
        </Container>
      </section>

      <FaqList />

      <section className="bg-background-muted">
        <Container className="section-padding">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange">
                Still Have Questions?
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-ink sm:text-5xl">
                Tell us what you need help with.
              </h2>
            </div>

            <Button href="/contact">
              Contact PrimeFix
              <ArrowUpRight size={17} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}