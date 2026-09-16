import { FaqPreview } from "@/components/home/faq-preview";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { HowItWorksPreview } from "@/components/home/how-it-works-preview";
import { PopularServices } from "@/components/home/popular-services";
import { ServiceArea } from "@/components/home/service-area";
import { ServicesPreview } from "@/components/home/services-preview";
import { TrustStrip } from "@/components/home/trust-strip";
import { WhyPrimeFix } from "@/components/home/why-primefix";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <HowItWorksPreview />
      <WhyPrimeFix />
      <PopularServices />
      <ServiceArea />
      <FaqPreview />
      <FinalCta />
    </>
  );
}