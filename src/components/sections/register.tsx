import ScrollWrapper from "@/components/layouts/scroll-wrapper";

export default function Register() {
  return (
    <section className="py-12">
      <ScrollWrapper name="register" className="container-wrapper">
        <div className="relative aspect-5/4 rounded-md lg:aspect-16/8 bg-[url('/images/register-image-background.png')] bg-cover bg-center after:absolute after:inset-0 after:bg-secondary/75 overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">
            <div className="max-w-4xl space-y-4 text-white lg:text-center">
              <h2 className="text-4xl lg:text-5xl lg:leading-tight font-bold">
                Let&apos;s Build a Brighter Future. Together.
              </h2>
              <p className="text-pretty">
                Transforming Indonesia&apos;s energy landscape through renewable
                solar PV <br className="hidden lg:block" /> and battery energy
                storage systems.
              </p>
            </div>
          </div>
        </div>
      </ScrollWrapper>
    </section>
  );
}
