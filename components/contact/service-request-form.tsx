"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/global/button";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";
import { services } from "@/data/services";

export function ServiceRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-[8px] border border-border bg-white p-6 sm:p-8 lg:p-10">
      {submitted ? (
        <div className="py-10 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange">
            Request Ready
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-ink">
            Your request is ready to send.
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-ink-muted">
            For this portfolio demonstration, use WhatsApp or the phone
            number below to continue the enquiry.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[4px] border border-forest bg-forest px-6 text-sm font-semibold text-white transition-colors hover:border-forest-dark hover:bg-forest-dark"
            >
              Continue on WhatsApp
              <ArrowUpRight size={17} />
            </a>

            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-12 items-center justify-center rounded-[4px] border border-forest px-6 text-sm font-semibold text-forest transition-colors hover:bg-forest hover:text-white"
            >
              Call PrimeFix
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-bold text-ink"
            >
              Your name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-[4px] border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-bold text-ink"
            >
              Phone number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-[4px] border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-sm font-bold text-ink"
            >
              What do you need help with?
            </label>

            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="w-full rounded-[4px] border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest"
            >
              <option value="" disabled>
                Select a service
              </option>

              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-bold text-ink"
            >
              Describe the problem
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-y rounded-[4px] border border-border bg-background px-4 py-3 text-sm leading-6 text-ink outline-none transition-colors focus:border-forest"
              placeholder="Tell us what is happening..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[4px] border border-forest bg-forest px-6 text-sm font-semibold text-white transition-colors hover:border-forest-dark hover:bg-forest-dark"
            >
            Prepare Service Request
            <ArrowUpRight size={17} />
          </button>

          <p className="text-xs leading-5 text-ink-muted">
            This portfolio demonstration does not process real service
            requests. In a live implementation, this form could connect to
            the business's preferred enquiry workflow.
          </p>
        </form>
      )}
    </div>
  );
}