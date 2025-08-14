import ContactForm from "./contact-form";
import ScrollWrapper from "@/components/layouts/scroll-wrapper";

export default function Contact() {
  return (
    <section className="py-12 lg:py-20 bg-muted/50">
      <ScrollWrapper
        name="contact"
        className="container-wrapper flex flex-col md:flex-row gap-6 md:gap-8 justify-between"
      >
        <div className="md:w-1/2 max-w-md space-y-4">
          <h2 className="text-4xl font-semibold">
            Download the 50-Site Portfolio — Invest in Indonesia&apos;s Clean
            Energy Future
          </h2>
          <p className="text-pretty">
            Access the full technical, financial, and social impact details for
            50 ready-to-build projects replacing diesel with renewables.
            Register now to download the portfolio report and secure your
            position in Indonesia&apos;s energy transition.
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact Detail</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <h6 className="font-semibold">Office address:</h6>
              <p>
                Sed ut perspiciatis unde omnis iste,
                <br /> quae ab illo inventore veritatis <br /> voluptatem
                accusantium
              </p>
            </div>
          </div>

          <div className="text-gray-600 dark:text-gray-300">
            <span className="block">Tel: 021 3345 3310</span>
            <a>Email: info@company.com</a>
          </div>
        </div>

        <ContactForm />
      </ScrollWrapper>
    </section>
  );
}
