"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/global/container";
import { faqs } from "@/data/faqs";

export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background">
      <Container className="section-padding">
        <div className="mx-auto max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-t border-border last:border-b"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold leading-6 text-ink sm:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-background-muted text-forest">
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen ? (
                  <div className="pb-6 pr-12">
                    <p className="text-sm leading-6 text-ink-muted sm:text-base sm:leading-7">
                      {faq.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}