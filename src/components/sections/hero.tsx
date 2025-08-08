import React from "react";

export default function Hero() {
  return (
    <section className="pb-12">
      <div className="container-wrapper h-full grid gap-6">
        <div className="bg-primary h-[calc(100dvh-86px)] max-h-[600px] rounded-lg">
          1
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full bg-primary p-4 rounded-md">1</div>
          <div className="w-full bg-tertiary p-4 rounded-md">2</div>
          <div className="w-full bg-secondary p-4 rounded-md">3</div>
        </div>
      </div>
    </section>
  );
}
