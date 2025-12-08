import ScrollWrapper from "@/components/layouts/scroll-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <section className="py-16 lg:py-24">
      <ScrollWrapper
        name="about"
        className="container-wrapper grid md:grid-cols-2 gap-16"
      >
        <div className="max-w-xl">
          <div className="sticky top-[130px] space-y-4">
            <h2 className="text-4xl lg:text-5xl font-semibold text-pretty">
              Accelerating Indonesia&apos;s Clean Energy Transition
            </h2>
            <p>
              Understanding the Strategy, Scope, and Data behind Our Renewable
              Project Portfolio.
            </p>
          </div>
        </div>

        <div className="max-w-lg space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight text-pretty">
              About the Program
            </h2>
            <p>
              Indonesia&apos;s isolated microgrids offer a major opportunity for
              renewable energy, but developers often face unclear land status,
              varying permitting pathways, and limited visibility of
              environmental, social, and hazard risks. These uncertainties slow
              bidding, raise costs, and delay diesel-replacement outcomes.
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

          <div className="space-y-4">
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

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight text-pretty">
              Methodology & Data Sources
            </h2>
            <p>
              The portfolio assessment methodology blends satellite and
              computer-vision analytics with fieldwork, energy modelling, and
              open-source data to accelerate and de-risk FS development.
            </p>
            <p>The assessment integrates four inputs:</p>

            <Accordion
              type="multiple"
              defaultValue={["item-1"]}
              className="space-y-4"
            >
              {dataSources.map((source, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i + 1}`}
                  className="border-0 bg-muted px-6 rounded-md"
                >
                  <AccordionTrigger className="cursor-pointer">
                    {source.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    {source.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold lg:text-4xl lg:leading-tight text-pretty">
              Outcome
            </h2>
            <p>
              The program prepared{" "}
              <strong>
                52 auction-ready solar—BESS hybrid projects (~139 MW),
              </strong>{" "}
              each supported with development feasibility information. By
              improving risk visibility upfront, GEAPP and PLN enable developers
              to bid more accurately, reduce contingencies, and accelerate
              renewable deployment in Indonesia&apos;s remote microgrids.
            </p>
            <p>
              <strong>Data Vintage:</strong> Q1—Q2 2025
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:justify-between">
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
        </div> */}

        {/* <div className="grid gap-6">
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
              <p>
                The portfolio assessment methodology blends satellite and
                computer-vision analytics with fieldwork, energy modelling, and
                open-source data to accelerate and de-risk FS development.
              </p>
              <p>The assessment integrates four inputs:</p>

              <Accordion type="multiple" className="space-y-4">
                {dataSources.map((source, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-0 bg-muted px-6 rounded-md"
                  >
                    <AccordionTrigger className="cursor-pointer">
                      {source.title}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      {source.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
        </div> */}
      </ScrollWrapper>
    </section>
  );
}

const dataSources = [
  {
    title: "Geo—AI Desktop Assessments",
    description:
      "Multi-dimensional screening using satellite imagery, terrain and land-sensitivity analytics, automated siting and permitting constraints, hazard layers, and indicative E&S sensitivities enhanced by machine-learning techniques.",
  },
  {
    title: "Field Validation",
    description:
      "Targeted on-site checks by grid engineers to confirm access, local conditions, infrastructure, and operational context.",
  },
  {
    title: "Energy Modelling & Feasibility Analysis",
    description:
      "Energy-system modelling, economic screening, and integration of PLN load and diesel-generation data to establish consistent technical and financial baselines.",
  },
  {
    title: "Portfolio Integration & E&S Screening",
    description:
      "Consolidation of technical, regulatory, socioeconomic, community and preliminary climate-risk inputs to produce comparable site profiles and development-risk classifications, including considerations of land and permitting, environmental sensitivity, social context, and technical suitability.",
  },
];
