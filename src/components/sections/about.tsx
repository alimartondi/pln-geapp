export default function About() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container-wrapper">
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-accent p-8 rounded-lg space-y-4">
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
            <div className="bg-accent p-8 rounded-lg space-y-4">
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
          <div className="bg-accent flex gap-16 p-8 rounded-lg">
            <div className="basis-5/12 space-y-4">
              <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight text-pretty">
                Data Methodology & Sources
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
            <div className="basis-7/12 space-y-6">
              <p>
                The data displayed on the website are gathered, collected, and
                processed through a sophisticated, multi-layered approach
                involving ITP Synkrona consortium and its technical experts and
                Mosaic Risk Analytics:
              </p>

              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-md bg-accent">
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
                  <div className="h-10 w-10 flex items-center justify-center rounded-md bg-accent">
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
                  <div className="h-10 w-10 flex items-center justify-center rounded-md bg-accent">
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
                  <div className="h-10 w-10 flex items-center justify-center rounded-md bg-accent">
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
      </div>
    </section>
  );
}
