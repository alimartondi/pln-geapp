import Image from "next/image";

export default function Overview() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container-wrapper flex flex-col lg:flex-row gap-4 lg:gap-8">
        <div className="w-full lg:w-4/12">
          <h3 className="font-semibold">Program Overview</h3>
        </div>
        <div className="w-full lg:w-8/12 grid grid-cols-1 gap-6 lg:gap-12">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim omnis
            cumque magni ipsum deleniti perspiciatis?
          </h2>
          <div className="w-full grid lg:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
}
