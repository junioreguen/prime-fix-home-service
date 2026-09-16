import { MapPin } from "lucide-react";

import { Container } from "@/components/global/container";
import { SectionHeading } from "@/components/global/section-heading";
import { serviceAreas } from "@/data/service-areas";

export function ServiceArea() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionHeading
            eyebrow="Service Area"
            title="Serving homes across Lagos."
            description="PrimeFix is designed for residential customers across key Lagos communities, with service availability depending on technician schedules and job requirements."
          />

          <div>
            <div className="grid grid-cols-2 border-t border-border sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 border-b border-border py-5 text-sm font-semibold text-ink"
                >
                  <MapPin size={15} className="shrink-0 text-orange" />
                  {area}
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-5 text-ink-muted">
              Service availability depends on technician schedules and job
              requirements.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}