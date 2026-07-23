import Link from "next/link";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { ArrowRight } from "lucide-react";

const PROGRAMS = [
  {
    tag: "Ages 2 – 5",
    title: "Nursery Programme",
    text: "Play-based learning focused on language, numeracy readiness, motor skills, and social development.",
    tone: "amber",
  },
  {
    tag: "Standard I – VII",
    title: "Primary Programme",
    text: "A rigorous academic path in line with the national curriculum, paired with creative and moral education.",
    tone: "sky",
  },
];

export default function ProgramsOverview() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-hc">
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow">Academic Programs</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
            A clear path from nursery to Standard VII
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group rounded-3xl overflow-hidden card-shadow bg-white h-full flex flex-col">
                <div className="relative aspect-video">
                  <PhotoPlaceholder
                    label={`Photo: ${p.title} classroom`}
                    tone={p.tone}
                    className="h-full w-full"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="eyebrow mb-2">{p.tag}</span>
                  <h3 className="font-display text-xl font-semibold text-navy mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed mb-6 flex-1">
                    {p.text}
                  </p>
                  <Link
                    href="/academics"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all"
                  >
                    View curriculum <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}