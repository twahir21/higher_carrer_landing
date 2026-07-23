import Reveal from "@/components/Reveal";
import {
  Heart,
  BookOpenCheck,
  Users2,
  Bus,
  Utensils,
  Trophy,
} from "lucide-react";

const REASONS = [
  {
    icon: Heart,
    title: "Nurturing Environment",
    text: "A warm, family-like atmosphere where every child feels seen and supported.",
  },
  {
    icon: BookOpenCheck,
    title: "Proven Curriculum",
    text: "National curriculum enriched with phonics, coding basics, and creative arts.",
  },
  {
    icon: Users2,
    title: "Small Class Sizes",
    text: "Low pupil-to-teacher ratios mean more individual attention for every learner.",
  },
  {
    icon: Bus,
    title: "Reliable Transport",
    text: "Safe, supervised school buses covering key routes across the city.",
  },
  {
    icon: Utensils,
    title: "Nutritious Meals",
    text: "Balanced daily meals prepared on-site to keep young minds energised.",
  },
  {
    icon: Trophy,
    title: "Strong Track Record",
    text: "Consistent top performance in regional primary school examinations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad">
      <div className="container-hc">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
            What sets Higher Career Academy apart
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-line p-7 hover:border-brand-light hover:card-shadow transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navytext-white mb-5">
                  <r.icon size={22} />
                </div>
                <h3 className="font-semibold text-navy mb-2">{r.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}