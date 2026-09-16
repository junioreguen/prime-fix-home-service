import { MessageCircle, Phone } from "lucide-react";

import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
          className="flex min-h-14 items-center justify-center gap-2 border-r border-border bg-forest px-4 text-sm font-semibold !text-white transition-colors hover:bg-forest-dark"
        >
          <Phone size={18} />
          Call PrimeFix
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-14 items-center justify-center gap-2 bg-white px-4 text-sm font-semibold text-forest transition-colors hover:bg-background-muted"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}