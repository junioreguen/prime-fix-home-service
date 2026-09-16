import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/global/button";
import { Container } from "@/components/global/container";
import { processSteps } from "@/data/process";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how PrimeFix handles home repair and maintenance requests from the first enquiry through completion.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-forest pt-32 text-white sm:pt-36 lg:pt-40">
        <Container className="pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-light">
              Simple Process · Less Hassle
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Getting help with your home should be straightforward.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
              Tell PrimeFix what you need, confirm the details and get the
              right next step without unnecessary back-and-forth.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="section-padding">
          <div className="grid gap-0 lg:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`border-border p-6 sm:p-8 lg:p-10 ${
                  index < 2 ? "border-b" : ""
                } ${index % 2 === 0 ? "lg:border-r" : ""}`}
              >
                <p className="text-sm font-extrabold tracking-[0.14em] text-orange">
                  {step.number}
                </p>

                <h2 className="mt-5 text-2xl font-extrabold tracking-[-0.04em] text-ink sm:text-3xl">
                  {step.title}
                </h2>

                <p className="mt-4 max-w-md text-base leading-7 text-ink-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background-muted">
        <Container className="section-padding">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-forest">
                Before You Contact Us
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] text-ink sm:text-5xl">
                A little information helps us understand the job.
              </h2>
            </div>

            <div className="space-y-5">
              {[
                "Tell us what is happening and where the problem is.",
                "Mention anything you have already tried, if relevant.",
                "Send a photo or video through WhatsApp when it helps explain the issue.",
                "Let us know if there is a preferred timing for the visit.",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-orange"
                  />

                  <p className="text-base leading-7 text-ink">{item}</p>
                </div>
              ))}

              <div className="pt-4">
                <Button href="/contact">
                  Request a Service
                  <ArrowUpRight size={17} />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-forest text-white">
        <Container className="section-padding">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-light">
              Ready When You Are
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Something at home needs attention?
            </h2>

            <div className="mt-8">
              <Button
                href="/contact"
                className="!text-forest"
              >
                Request a Service
                <ArrowUpRight size={17} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}