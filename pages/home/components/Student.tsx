import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ACTIVITIES = ["Football & Athletics", "Music & Drama Club", "Arts & Craft", "Debate & Reading Club"];

export default function StudentActivitiesPreview() {
  return (
    <section className="section-pad bg-navy text-white overflow-hidden relative">
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="container-hc relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <Reveal>
            <span className="eyebrow text-amber">Beyond the Classroom</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
              Student activities that build character
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/student-life" className="btn-secondary bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
              Explore Student Life <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ACTIVITIES.map((a, i) => (
            <Reveal key={a} delay={i * 0.08}>
              <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <div className="relative aspect-square">
                  <PhotoPlaceholder label={a} tone="sky" className="h-full w-full opacity-90" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold">{a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}