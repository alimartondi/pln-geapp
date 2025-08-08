export default function Contact() {
  return (
    <section className="py-12 bg-accent">
      <div className="container-wrapper">
        <div className="max-w-md space-y-4">
          <h2 className="text-4xl font-semibold">Register for Access</h2>
          <p className="text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor amet
            praesentium totam porro nihil? Mollitia consequatur impedit incidunt
            iure quod.
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact Detail</h3>
            <div className="space-y-2 text-gray-600">
              <h6 className="font-semibold">Office address:</h6>
              <p>
                Sed ut perspiciatis unde omnis iste,
                <br /> quae ab illo inventore veritatis <br /> voluptatem
                accusantium
              </p>
            </div>
          </div>

          <div className="text-gray-600">
            <span className="block">Tel: 021 3345 3310</span>
            <a>Email: info@company.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
