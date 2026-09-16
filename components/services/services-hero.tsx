import { Container } from "@/components/global/container";

export function ServicesHero() {
  return (
    <section className="bg-forest pt-32 text-white sm:pt-36 lg:pt-40">
      <Container className="pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-light">
            Home Services & Maintenance · Lagos
          </p>

          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Practical help for the jobs your home needs.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
            From everyday repairs to essential maintenance, PrimeFix helps
            homeowners and property managers handle the work that keeps a
            property running properly.
          </p>
        </div>
      </Container>
    </section>
  );
}