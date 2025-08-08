export default function Overview() {
  return (
    <section className="py-12">
      <div className="container-wrapper flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-4/12">
          <h3 className="font-semibold">Program Overview</h3>
        </div>
        <div className="w-full lg:w-8/12 grid grid-cols-1 gap-6">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim omnis
            cumque magni ipsum deleniti perspiciatis?
          </h2>
          <div className="w-full grid lg:grid-cols-2 gap-4">
            <div className="aspect-3/4 bg-primary rounded-md"></div>
            <div className="aspect-5/4 bg-secondary rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
