import Link from "next/link";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="section-pad bg-[var(--hc-sky-2)]">
      <div className="container-hc grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="eyebrow">About Higher Career Academy</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3 mb-5 leading-tight">
            More than a school &mdash; a foundation for life
          </h2>
          <p className="text-slate leading-relaxed mb-5">
            Since 2012, Higher Career Academy has grown from a single nursery
            classroom into a full nursery and primary institution serving
            families across Dar es Salaam. We combine the discipline of the
            Tanzanian national curriculum with a warm, child-centred approach
            that helps young learners build character alongside competence.
          </p>
          <p className="text-slate leading-relaxed mb-8">
            Our campus is designed for young learners: bright classrooms,
            secure play areas, and spaces that invite curiosity at every turn.
          </p>
          <Link href="/about" className="btn-primary">
            Learn Our Story <ArrowRight size={18} />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden card-shadow aspect-square">
              <PhotoPlaceholder label="School building exterior" tone="sky" className="h-full w-full" />
            </div>
            <div className="rounded-2xl overflow-hidden card-shadow aspect-square mt-8">
              <PhotoPlaceholder label="Children in the library corner" tone="amber" className="h-full w-full" />
            </div>
            <div className="rounded-2xl overflow-hidden card-shadow aspect-square -mt-8">
              <PhotoPlaceholder label="Outdoor play area" tone="amber" className="h-full w-full" />
            </div>
            <div className="rounded-2xl overflow-hidden card-shadow aspect-square">
              <PhotoPlaceholder label="Teacher assisting a pupil" tone="sky" className="h-full w-full" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}