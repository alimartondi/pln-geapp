import ScrollWrapper from "@/components/layouts/scroll-wrapper";

export default function Location() {
  return (
    <section className="py-12 bg-accent lg:py-20">
      <ScrollWrapper name="location" className="container-wrapper space-y-10">
        <div className="max-w-md space-y-4">
          <h2 className="text-4xl lg:text-5xl font-semibold">Site Locations</h2>
          <p className="text-pretty">
            View Solar PV & BESS Project Sites Across Indonesia
          </p>
        </div>

        <div className="aspect-16/11 lg:aspect-16/7 bg-primary rounded-md"></div>
      </ScrollWrapper>
    </section>
  );
}
