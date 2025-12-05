import Image from "next/image";
import ScrollWrapper from "@/components/layouts/scroll-wrapper";

export default function Overview() {
  return (
    <section className="relative after:absolute after:bottom-0 after:max-w-7xl after:bg-radial after:from-muted after:h-px py-16 lg:py-24 after:inset-x-0 after:mx-auto">
      <ScrollWrapper name="overview" className="container-wrapper">
        <div className=" flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="w-full lg:w-4/12">
            <h3 className="font-semibold sticky top-28">
              <span className="relative  inline-flex size-3 mr-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
              </span>
              Program Overview
            </h3>
          </div>
          <div className="w-full lg:w-8/12 grid grid-cols-1 gap-6 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight">
                In partnership with PLN, the Global Energy Alliance for People &
                Planet is bringing 52 island microgrid projects to market—ready
                for private investment.
              </h2>
              <p className="max-w-2xl">
                The program bridges financing gaps, reduces risk, and delivers
                affordable, reliable power to where it&apos;s needed most.
                Investors gain vetted, shovel-ready projects with strong returns
                and community impact.
              </p>
            </div>
            <div className="w-full grid md:grid-cols-2 gap-6">
              <div className="relative aspect-3/4 rounded-lg overflow-hidden">
                <Image
                  src="/images/About-Image-01-by-Pexel.png"
                  alt="Panel Solar"
                  fill
                  sizes="600px"
                  quality={100}
                />
              </div>
              <div className="relative aspect-5/4 rounded-lg overflow-hidden">
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
        </div>
      </ScrollWrapper>
    </section>
  );
}
