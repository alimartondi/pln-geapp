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
            <p>
              Understanding the Strategy, Scope, and Data behind Our Renewable
              Project Portfolio.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/50 px-6 py-8 rounded-lg space-y-4">
              <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight text-pretty">
                About the Program
              </h2>
              <p>
                Indonesia&apos;s isolated microgrids offer a major opportunity
                for renewable energy, but developers often face unclear land
                status, varying permitting pathways, and limited visibility of
                environmental, social, and hazard risks. These uncertainties
                slow bidding, raise costs, and delay diesel-replacement
                outcomes.
              </p>
              <p>
                To address this,{" "}
                <strong>
                  GEAPP and PLN partnered with ITP Renewables, Synkrona, and
                  Mosaic Risk Analytics
                </strong>{" "}
                to strengthen site preparation and improve risk transparency
                across the De-dieselization Program. This platform provides{" "}
                <strong>consistent, indicative information</strong> from the
                Portfolio Feasibility Study—the first unified view of technical,
                geospatial, and E&S conditions at each PLTD—giving developers a
                clearer basis for preparing competitive bids.
              </p>
            </div>

            <div className="bg-muted/50 px-6 py-8 rounded-lg space-y-4">
              <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight text-pretty">
                Technical Approach
              </h2>
              <p>
                The technical partners combined{" "}
                <strong>
                  energy-system engineering, geospatial intelligence, and
                  environmental & social screening
                </strong>{" "}
                into a single comparable dataset. Surfacing key risks early
                reduces uncertainty, improves comparability across sites, and
                enables faster investment decisions in remote microgrids.
              </p>
              <p>
                This work was delivered by ITP Renewables, Synkrona, and Mosaic
                Risk Analytics, with support from PLN&apos;s regional teams and
                community informants.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/50 px-6 py-8 rounded-lg space-y-4">
              <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight text-pretty">
                Methodology & Data Sources
              </h2>
              <p>The assessment integrates four inputs:</p>

              <ul className="space-y-4 max-w-lg">
                <li className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-primary-foreground">
                    1
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="font-medium">Geo-AI Desktop Assessments</p>
                    <p>
                      Core Data Gathering (Feasibility Study): The foundational
                      layer includes energy system modelling, economic and
                      financial analysis, direct PLN load and diesel-generation
                      data, and initial field surveys conducted by trained grid
                      engineers.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-primary-foreground">
                    2
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="font-medium">Field Validation</p>
                    <p>
                      Targeted on-site checks by grid engineers to confirm
                      access, local conditions, infrastructure, and operational
                      context.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-primary-foreground">
                    3
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="font-medium">
                      Energy Modelling & Feasibility Analysis
                    </p>
                    <p>
                      Energy-system modelling, economic screening, and
                      integration of PLN load and diesel-generation data to
                      establish consistent technical and financial baselines.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-primary-foreground">
                    4
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="font-medium">
                      Portfolio Integration & E&S Screening
                    </p>
                    <p>
                      Consolidation of technical, regulatory, socioeconomic,
                      community and preliminary climate-risk inputs to produce
                      comparable site profiles and development-risk
                      classifications, including considerations of land and
                      permitting, environmental sensitivity, social context, and
                      technical suitability.
                    </p>
                  </div>
                </li>
              </ul>
              {/* <div className="basis-1/2 space-y-6">
                <p>The assessment integrates four inputs:</p>

                <ul className="space-y-4 max-w-lg">
                  <li className="flex gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-primary-foreground">
                      1
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="font-medium">Geo-AI Desktop Assessments</p>
                      <p>
                        Core Data Gathering (Feasibility Study): The
                        foundational layer includes energy system modelling,
                        economic and financial analysis, direct PLN load and
                        diesel-generation data, and initial field surveys
                        conducted by trained grid engineers.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-primary-foreground">
                      2
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="font-medium">Field Validation</p>
                      <p>
                        Targeted on-site checks by grid engineers to confirm
                        access, local conditions, infrastructure, and
                        operational context.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-primary-foreground">
                      3
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="font-medium">
                        Energy Modelling & Feasibility Analysis
                      </p>
                      <p>
                        Energy-system modelling, economic screening, and
                        integration of PLN load and diesel-generation data to
                        establish consistent technical and financial baselines.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-md bg-primary text-primary-foreground">
                      4
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="font-medium">
                        Portfolio Integration & E&S Screening
                      </p>
                      <p>
                        Consolidation of technical, regulatory, socioeconomic,
                        community and preliminary climate-risk inputs to produce
                        comparable site profiles and development-risk
                        classifications, including considerations of land and
                        permitting, environmental sensitivity, social context,
                        and technical suitability.
                      </p>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="bg-muted/50 px-6 py-8 rounded-lg space-y-4">
              <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight text-pretty">
                Outcome
              </h2>
              <p>
                The program prepared{" "}
                <strong>
                  52 auction-ready solar—BESS hybrid projects (~139 MW),
                </strong>{" "}
                each supported with development feasibility information. By
                improving risk visibility upfront, GEAPP and PLN enable
                developers to bid more accurately, reduce contingencies, and
                accelerate renewable deployment in Indonesia&apos;s remote
                microgrids.
              </p>
              <p>
                <strong>Data Vintage:</strong> Q1—Q2 2025
              </p>
            </div>
          </div>
        </div>
      </ScrollWrapper>
    </section>
  );
}
