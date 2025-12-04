import ScrollWrapper from "@/components/layouts/scroll-wrapper";

export default function About() {
  return (
    <section className="py-16 lg:py-24">
      <ScrollWrapper
        name="about"
        className="container-wrapper flex flex-col gap-6 md:gap-12"
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:justify-between">
          <div className="basis-full lg:basis-7/12 max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-semibold text-pretty">
              Accelerating Indonesia&apos;s Clean Energy Transition
            </h2>
          </div>
          <div className="basis-full lg:basis-5/12 max-w-lg">
            <p className="text-pretty">
              Understanding the Strategy, Scope, and Data behind Our Renewable
              Project Portfolio.
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-muted/50 px-6 py-8 lg:p-12 rounded-lg space-y-4">
              <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight text-pretty">
                National Energy Vision (RUPTL)
              </h2>
              <p>
                The Electricity Supply Business Plan (RUPTL) is Indonesia’s
                central planning document for the national power sector.  The
                2025–2034 RUPTL set a target of installing 53 GW of renewable
                energy generation capacity, accounting for 76% of forecast new
                capacity.
              </p>
            </div>
            <div className="bg-muted/50 px-6 py-8 lg:p-12 rounded-lg space-y-4">
              <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight text-pretty">
                The Diesel Replacement Program
              </h2>
              <p>
                A core component of the RUPTL is the PLN’s De-dieselization
                Program. This program aims to reduce diesel fuel consumption
                across 2,130 isolated power grids by integrating renewable
                energy, replacing diesel with gas, or interconnecting with
                larger power grids. The program covers 5,200 diesel generators,
                with cumulative installed capacity of 2,370 MW.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 flex md:flex-row flex-col gap-16 px-6 py-8 lg:p-12 rounded-lg">
            <div className="basis-1/2 space-y-4">
              <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight text-pretty">
                Data Methodology & Sources
              </h2>
              <p className="max-w-md text-pretty">
                A core component of the RUPTL is the PLN’s De-dieselization
                Program. This program aims to reduce diesel fuel consumption
                across 2,130 isolated power grids by integrating renewable
                energy, replacing diesel with gas, or interconnecting with
                larger power grids. The program covers 5,200 diesel generators,
                with cumulative installed capacity of 2,370 MW.
              </p>
            </div>
            <div className="basis-1/2 space-y-6">
              <p>
                The data displayed on the website are gathered, collected, and
                processed through a sophisticated, multi-layered approach
                involving ITP Synkrona consortium and its technical experts and
                Mosaic Risk Analytics:
              </p>

              <ul className="space-y-4 max-w-lg">
                <li className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary">
                    1
                  </div>
                  <p className="flex-1">
                    Core Data Gathering (Feasibility Study): The foundational
                    layer includes energy system modelling, economic and
                    financial analysis, direct PLN load and diesel-generation
                    data, and initial field surveys conducted by trained grid
                    engineers.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary">
                    2
                  </div>
                  <p className="flex-1">
                    Geospatial Processing: Technical suitability and siting
                    constraints are evaluated by applying advanced satellite
                    imaging, computer vision, and location-intelligence
                    techniques.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary">
                    3
                  </div>
                  <p className="flex-1">
                    Open-Source Collection: Data is compiled from open-source
                    public domain sources, including Government of Indonesia
                    ministry portals, OpenStreetMap, national and international
                    hazard inventories, and IPCC climate change projection
                    datasets.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary">
                    4
                  </div>
                  <p className="flex-1">
                    Environmental & Social (E&S) Screening: Preliminary impacts
                    and regulatory pathways are scoped using BPS statistics and
                    insights gathered from village-level informants.
                  </p>
                </li>
              </ul>
              <p>
                The portfolio information was compiled using the latest
                available datasets during Q1–Q2 20257.
              </p>
            </div>
          </div>
        </div>
      </ScrollWrapper>
    </section>
  );
}
