"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/global/button";
import { Container } from "@/components/global/container";
import { navigation } from "@/data/navigation";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white">
      <Container className="flex h-[76px] items-center justify-between gap-6 lg:h-[82px]">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-[60] flex shrink-0 items-center"
          onClick={() => setIsMenuOpen(false)}
          aria-label="PrimeFix Home Services home"
        >
          <Image
            src="/images/brand/primefix-logo.jpeg"
            alt="PrimeFix Home Services"
            width={180}
            height={56}
            className="h-auto w-[140px] sm:w-[155px]"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-muted transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop service actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="group flex items-center gap-2"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-orange-light text-orange transition-colors group-hover:bg-orange group-hover:text-white">
              <Phone size={16} />
            </span>

            <span className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-muted">
                Call PrimeFix
              </span>

              <span className="text-sm font-bold text-ink">
                {CONTACT.phone}
              </span>
            </span>
          </a>

          <Button href="/contact">
            Request a Service
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="relative z-[60] flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            aria-label="Call PrimeFix"
            className="flex size-10 items-center justify-center rounded-full bg-orange-light text-orange"
          >
            <Phone size={18} />
          </a>

          <button
            type="button"
            className="flex size-10 items-center justify-center text-forest"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile navigation */}
      {isMenuOpen ? (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <Container className="min-h-screen bg-white pt-[100px]">
            <div className="mb-8 border-b border-border pb-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange">
                PrimeFix Home Services
              </p>

              <p className="mt-2 max-w-sm text-sm leading-6 text-ink-muted">
                Reliable home repairs and maintenance across Lagos.
              </p>
            </div>

            <nav className="flex flex-col">
              {[
                { label: "Home", href: "/" },
                ...navigation,
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center border-b border-border py-5 text-xl font-bold tracking-[-0.03em] text-forest transition-colors hover:text-orange"
                >
                  <span className="mr-4 min-w-7 text-[10px] font-bold tracking-[0.15em] text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <Button
                href="/contact"
                className="w-full !border-forest !bg-forest !text-white hover:!border-forest-dark hover:!bg-forest-dark hover:!text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Request a Service
              </Button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 border border-forest px-5 py-4 text-sm font-bold text-forest transition-colors hover:bg-forest hover:text-white"
              >
                <Phone size={17} />
                Call PrimeFix
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center border border-border px-5 py-4 text-sm font-bold text-forest transition-colors hover:border-forest hover:bg-forest hover:text-white"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}