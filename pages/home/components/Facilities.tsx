import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGrp";

const FACILITIES: { title: string; tone: "sky" | "amber" | "navy" | undefined}[] = [
  { title: "Modern Classrooms", tone: "sky" },
  { title: "School Library", tone: "amber" },
  { title: "Playground & Play Equipment", tone: "amber" },
  { title: "Computer Lab", tone: "sky" },
  { title: "Dining Hall", tone: "amber" },
  { title: "Sick Bay & First Aid Room", tone: "sky" },
];

export default function Facilities() {
  return (
    <section className="section-pad">
      <div className="container-hc">
        {/* Header Reveal */}
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Our Facilities</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
            A campus built for young learners
          </h2>
        </Reveal>

        {/* Staggered Facilities Grid */}
        <StaggerGroup
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.4} // 2x delay cadence matching the other sections
        >
          {FACILITIES.map((f) => (
            <StaggerItem key={f.title} className="h-full">
              <div className="rounded-2xl overflow-hidden card-shadow group border border-line hover:border-brand-light transition-colors h-full flex flex-col">
                {/* Photo Container with Smooth Hover Scale */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <PhotoPlaceholder
                    label={`Photo: ${f.title}`}
                    tone={f.tone}
                    className="h-full w-full group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                {/* Title Card Footer */}
                <div className="p-5 bg-white flex-1 flex items-center">
                  <h3 className="font-semibold text-navy group-hover:text-brand transition-colors">
                    {f.title}
                  </h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}