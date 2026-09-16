import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import { Container } from "@/components/global/container";
import { navigation } from "@/data/navigation";
import {
  CONTACT,
  DEMO_DISCLAIMER,
  FOOTER_TAGLINE,
  WHATSAPP_URL,
} from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-white">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <Image
              src="/images/brand/primefix-logo.jpeg"
              alt="PrimeFix Home Services"
              width={180}
              height={56}
              className="h-auto w-[160px]"
            />

            <p className="mt-6 max-w-sm text-sm leading-6 text-white">
              {FOOTER_TAGLINE}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-light">
              Navigation
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-white transition-colors hover:text-orange-light"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-light">
              Contact
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white">
              <p>{CONTACT.location}</p>

              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="flex w-fit items-center gap-2 transition-colors hover:text-orange-light"
              >
                <Phone size={16} />
                {CONTACT.phone}
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="w-fit transition-colors hover:text-orange-light"
              >
                {CONTACT.email}
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-1 font-semibold text-white transition-colors hover:text-orange-light"
              >
                Chat on WhatsApp
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-6">
          <p className="max-w-4xl text-xs leading-5 text-white">
            {DEMO_DISCLAIMER}
          </p>

          <p className="mt-5 text-xs text-white">
            © 2026 WebEger — PrimeFix Home Services portfolio concept
          </p>
        </div>
      </Container>
    </footer>
  );
}