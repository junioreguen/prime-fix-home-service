"use client";

import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/global/container";
import { faqs } from "@/data/faqs";

const previewFaqs = faqs.slice(0, 4);

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest">
              FAQs
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-ink sm:text-5xl">
              Questions before you request a service?
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-ink-muted">
              Here are a few things homeowners commonly want to know.
            </p>

            <Link
              href="/faqs"
              className="mt-8 inline-flex items-center gap-2 border-b border-forest pb-1 text-sm font-semibold text-forest transition-colors hover:border-orange hover:text-orange"
            >
              View all FAQs
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="border-t border-border">
            {previewFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="border-b border-border">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-base font-semibold tracking-[-0.015em] text-ink sm:text-lg">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-forest transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen ? (
                    <div className="pb-6 pr-10">
                      <p className="max-w-2xl text-sm leading-6 text-ink-muted sm:text-base sm:leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}