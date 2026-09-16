import { ArrowUpRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/global/button";
import { Container } from "@/components/global/container";
import { WHATSAPP_URL } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="bg-forest">
      <Container className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-light">
            Need a hand?
          </p>

          <h2 className="mt-5 text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Something at home needs fixing?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
            Tell PrimeFix what you need and we&apos;ll help you figure out the
            next step.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/contact"
              className=" !text-forest"
            >
              Request a Service
              <ArrowUpRight size={17} />
            </Button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-white px-6 font-semibold !text-white transition-colors hover:bg-white hover:!text-forest"
            >
              <MessageCircle size={17} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}