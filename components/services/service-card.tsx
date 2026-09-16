import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Droplets,
  Hammer,
  Paintbrush,
  Settings,
  Wind,
  Zap,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { services } from "@/data/services";

interface ServiceCardProps {
  service: (typeof services)[number];
}

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Zap,
  Wind,
  Hammer,
  Paintbrush,
  Settings,
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-border bg-white transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />

        <div className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-full bg-white text-forest">
          {Icon ? <Icon size={19} strokeWidth={2} /> : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-orange">
              {service.number}
            </p>

            <h2 className="text-2xl font-extrabold tracking-[-0.04em] text-ink">
              {service.title}
            </h2>
          </div>

          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background-muted text-forest transition-colors group-hover:bg-forest group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-6 text-ink-muted">
          {service.shortDescription}
        </p>

        <span className="mt-6 text-sm font-bold text-forest">
          View service
          <span className="ml-2 transition-all group-hover:ml-3">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}