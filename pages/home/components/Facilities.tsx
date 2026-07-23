import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

const FACILITIES = [
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
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Our Facilities</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy  mt-3">
            A campus built for young learners
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="rounded-2xl overflow-hidden card-shadow group">
                <div className="relative aspect-4/3">
                  <PhotoPlaceholder label={`Photo: ${f.title}`} tone={f.tone} className="h-full w-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="font-semibold text-navy ">{f.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}