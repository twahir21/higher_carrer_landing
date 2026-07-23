import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { Eye, Target, HeartHandshake, Award } from "lucide-react";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us | Higher Career Academy",
  description:
    "Learn about Higher Career Academy's history, vision, mission, core values, and leadership.",
};

const VALUES = [
  { title: "Integrity", text: "We act honestly and consistently, teaching pupils to do the same." },
  { title: "Excellence", text: "We hold high standards in academics, conduct, and care." },
  { title: "Respect", text: "Every child, parent, and staff member is treated with dignity." },
  { title: "Community", text: "We grow stronger by working closely with families and neighbours." },
];

const TEACHERS = [
  { name: "Mrs. Amina J. Mwakalinga", role: "Head Teacher", subject: "School Leadership" },
  { name: "Mr. Baraka E. Mushi", role: "Deputy Head Teacher", subject: "Mathematics & Science" },
  { name: "Ms. Grace P. Kileo", role: "Nursery Coordinator", subject: "Early Childhood Education" },
  { name: "Mr. Daniel S. Mrema", role: "Senior Teacher", subject: "English & Literature" },
  { name: "Ms. Rehema A. Chuma", role: "Senior Teacher", subject: "Kiswahili & Social Studies" },
  { name: "Mr. Elias N. Komba", role: "Sports & Activities Coordinator", subject: "Physical Education" },
];

const ACHIEVEMENTS = [
  "Top 5 primary school performance in the district, 2023–2025 examinations",
  "Regional Science Fair gold award winners, three consecutive years",
  "Inter-school football champions, Zanzibar zonal league, 2024",
  "Accredited member of the Tanzania Association of Private Schools",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Higher Career Academy"
        title="A community built on trust, care, and high standards"
        text="Discover the story, values, and people behind Higher Career Academy's nursery and primary education."
      />

      {/* History */}
      <section className="section-pad">
        <div className="container-hc grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden card-shadow aspect-4/3">
              <PhotoPlaceholder label="Photo: Original school building, early years" tone="sky" className="h-full w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Our History</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3 mb-5">
              From one classroom to a full academy
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              Higher Career Academy was founded in 2012 by a small group of
              educators who believed Zanzibar families deserved an
              affordable, high-quality alternative for early childhood and
              primary education. We began with a single nursery classroom of
              eighteen pupils.
            </p>
            <p className="text-slate leading-relaxed">
              Over the past decade, steady investment in our teachers,
              curriculum, and campus has allowed us to grow into a full
              Nursery-to-Standard-VII institution, now serving hundreds of
              families while holding on to the personal, caring culture we
              started with.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="section-pad bg-sky-2">
        <div className="container-hc grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-9 card-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-brand mb-5">
                <Eye size={22} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-3">Our Vision</h3>
              <p className="text-slate leading-relaxed">
                To be the leading nursery and primary school in Tanzania,
                recognised for nurturing confident, capable, and compassionate
                learners who are ready for a lifetime of success.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-navytext-white p-9 card-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-5">
                <Target size={22} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                To deliver quality nursery and primary education through
                qualified teachers, a safe and inspiring environment, and a
                curriculum that builds strong academic, social, and moral
                foundations in every child.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-pad">
        <div className="container-hc">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow">Core Values</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
              The principles that guide us daily
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-line p-7 text-center hover:card-shadow transition-all">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-brand mb-4">
                    <HeartHandshake size={20} />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">{v.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership message */}
      <section className="section-pad bg-cream">
        <div className="container-hc grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden card-shadow aspect-square max-w-sm mx-auto lg:mx-0">
              <PhotoPlaceholder label="Photo: Board Chairperson" tone="navy" className="h-full w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">A Word From Leadership</span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-navy mt-3 mb-5">
              Committed to your child&rsquo;s success
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              As Board Chairperson, I am proud of how far Higher Career
              Academy has come, and even more excited about where we are
              headed. Our leadership team meets regularly to review academic
              performance, invest in teacher development, and listen closely
              to parent feedback.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              We take our responsibility to your family seriously, and we are
              committed to continuous improvement in everything we do.
            </p>
            <p className="font-semibold text-navy">Mr. Peter L. Massawe</p>
            <p className="text-sm text-slate">Board Chairperson</p>
          </Reveal>
        </div>
      </section>

      {/* Teacher profiles */}
      <section className="section-pad">
        <div className="container-hc">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow">Our Teachers</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
              Meet the people behind our classrooms
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div className="rounded-2xl overflow-hidden card-shadow bg-white">
                  <div className="relative aspect-square">
                    <PhotoPlaceholder label={t.name} tone={i % 2 ? "amber" : "sky"} className="h-full w-full" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-navy">{t.name}</h3>
                    <p className="text-sm text-brand font-medium">{t.role}</p>
                    <p className="text-xs text-slate mt-1">{t.subject}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-pad bg-navy text-white">
        <div className="container-hc">
          <Reveal className="max-w-2xl mb-12">
            <span className="eyebrow text-amber">Achievements</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
              Milestones we&rsquo;re proud of
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {ACHIEVEMENTS.map((a, i) => (
              <Reveal key={a} delay={i * 0.07}>
                <div className="flex gap-4 rounded-2xl bg-white/5 border border-white/10 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber text-navy">
                    <Award size={18} />
                  </div>
                  <p className="text-white/85 leading-relaxed">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}