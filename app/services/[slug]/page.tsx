import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetailHero } from "@/components/services/service-detail-hero";
import { ServiceExpectations } from "@/components/services/service-expectations";
import { ServiceFinalCta } from "@/components/services/service-final-cta";
import { ServiceProblems } from "@/components/services/service-problems";
import { ServiceRelated } from "@/components/services/service-related";
import { services } from "@/data/services";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetailHero
        number={service.number}
        title={service.title}
        description={service.description}
        image={service.image}
      />

      <ServiceProblems problems={service.problems} />

      <ServiceExpectations
        expectations={service.whatToExpect}
      />

      <ServiceRelated currentSlug={service.slug} />

      <ServiceFinalCta serviceName={service.title} />
    </>
  );
}