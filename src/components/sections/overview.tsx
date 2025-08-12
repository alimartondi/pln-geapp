import Image from "next/image";
import ScrollWrapper from "@/components/layouts/scroll-wrapper";

export default function Overview() {
  return (
    <section className="py-12 lg:py-20">
      <ScrollWrapper
        name="about"
        className="container-wrapper flex flex-col lg:flex-row gap-4 lg:gap-8"
      >
        <div className="w-full lg:w-4/12">
          <h3 className="font-semibold">Program Overview</h3>
        </div>
        <div className="w-full lg:w-8/12 grid grid-cols-1 gap-6 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight">
              In partnership with PLN, GEAPP is bringing 50 island microgrid
              projects to market—ready for private investment.
            </h2>
            <p className="max-w-md">
              The program bridges financing gaps, reduces risk, and delivers
              affordable, reliable power to where it&apos;s needed most.
              Investors gain vetted, shovel-ready projects with strong returns
              and community impact.
            </p>
          </div>
          <div className="w-full grid md:grid-cols-2 gap-6">
            <div className="relative aspect-3/4 rounded-md overflow-hidden">
              <Image
                src="/images/About-Image-01-by-Pexel.png"
                alt="Panel Solar"
                fill
                sizes="600px"
                quality={100}
              />
            </div>
            <div className="relative aspect-5/4 rounded-md overflow-hidden">
              <Image
                src="/images/About-Image-02-by-Pexel.png"
                alt="Panel Solar"
                fill
                sizes="600px"
                quality={100}
              />
            </div>
          </div>
        </div>
      </ScrollWrapper>
    </section>
  );
}
