import Reveal from "@/components/Reveal";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Neema R.",
    role: "Parent, Standard III pupil",
    text: "My daughter has grown so much in confidence since joining Higher Career. The teachers genuinely care about each child's progress.",
  },
  {
    name: "Juma Hassan",
    role: "Parent, Nursery pupil",
    text: "The nursery programme is warm and structured. My son looks forward to school every single morning — that says everything.",
  },
  {
    name: "Fatma Said",
    role: "Parent, Standard VI pupil",
    text: "Communication with teachers is excellent, and the results speak for themselves. Highly recommend this school to any parent.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-sky-2">
      <div className="container-hc">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Parent Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
            Trusted by families across Zanzibar
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-7 card-shadow flex flex-col">
                <div className="flex gap-1 mb-4 text-amber">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm text-[var(--hc-ink)] leading-relaxed flex-1 mb-6">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-sky flex items-center justify-center font-display font-semibold text-brand">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--hc-navy)]">{r.name}</p>
                    <p className="text-xs text-slate">{r.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}