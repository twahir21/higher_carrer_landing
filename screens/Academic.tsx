import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Link from "next/link";
import {
  Puzzle,
  Languages,
  Calculator,
  Palette,
  Music2,
  Microscope,
  Globe2,
  BookMarked,
  ClipboardCheck,
  Users,
  Trophy,
  ArrowRight,
} from "lucide-react";
import PageHero from "./Land";

export const metadata = {
  title: "Academics | Higher Career Academy",
  description:
    "Explore the Nursery and Primary curriculum, teaching approach, learning methodology, and extracurricular activities at Higher Career Academy.",
};

const NURSERY_SUBJECTS = [
  { icon: Languages, title: "Language & Literacy", text: "Phonics, vocabulary building, and early reading in English and Kiswahili." },
  { icon: Calculator, title: "Early Numeracy", text: "Counting, shapes, patterns, and problem-solving through play." },
  { icon: Palette, title: "Creative Arts", text: "Drawing, colouring, and craft to build fine motor skills and imagination." },
  { icon: Puzzle, title: "Social & Emotional Skills", text: "Sharing, cooperation, and independence through guided group activities." },
];

const PRIMARY_SUBJECTS = [
  { icon: Languages, title: "English & Kiswahili" },
  { icon: Calculator, title: "Mathematics" },
  { icon: Microscope, title: "Science & Technology" },
  { icon: Globe2, title: "Social Studies" },
  { icon: BookMarked, title: "Civics & Moral Education" },
  { icon: Music2, title: "Creative Arts & Music" },
];

const METHODOLOGY = [
  { title: "Child-Centred Teaching", text: "Lessons are adapted to each pupil's pace, with extra support where needed." },
  { title: "Hands-On Learning", text: "Practical activities, group work, and demonstrations reinforce every concept." },
  { title: "Continuous Assessment", text: "Regular quizzes and observation help teachers track progress in real time." },
  { title: "Values Integration", text: "Discipline, respect, and responsibility are woven into everyday lessons." },
];

const EXTRA_CURRICULAR = [
  "Football, netball & athletics",
  "Music, choir & drama club",
  "Art, craft & design club",
  "Debate & public speaking",
  "Coding & digital literacy club",
  "Reading & library club",
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="A curriculum built for strong foundations"
        text="From nursery play-based learning to primary examination readiness, our academic programme is designed to grow with every child."
      />

      {/* Nursery curriculum */}
      <section className="section-pad">
        <div className="container-hc grid lg:grid-cols-2 gap-14 items-center mb-16">
          <Reveal>
            <span className="eyebrow">Nursery Curriculum · Ages 2–5</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3 mb-5">
              Learning through play and discovery
            </h2>
            <p className="text-slate leading-relaxed">
              Our nursery programme lays the groundwork for lifelong learning
              through structured play, storytelling, songs, and guided
              exploration &mdash; helping children build language, motor, and
              social skills before they enter Standard I.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden card-shadow aspect-[4/3]">
              <PhotoPlaceholder label="Photo: Nursery pupils in a play-based lesson" tone="amber" className="h-full w-full" />
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NURSERY_SUBJECTS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-line p-6 hover:card-shadow transition-all">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky text-brand mb-4">
                  <s.icon size={20} />
                </div>
                <h3 className="font-semibold text-navy mb-1.5">{s.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Primary curriculum */}
      <section className="section-pad bg-[var(--hc-sky-2)]">
        <div className="container-hc grid lg:grid-cols-2 gap-14 items-center mb-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden card-shadow aspect-[4/3]">
              <PhotoPlaceholder label="Photo: Primary classroom lesson in progress" tone="sky" className="h-full w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <span className="eyebrow">Primary Curriculum · Standard I–VII</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3 mb-5">
              Rigorous academics, well-rounded pupils
            </h2>
            <p className="text-slate leading-relaxed">
              Our primary programme follows the national curriculum,
              delivered through engaging, well-resourced lessons across core
              and creative subjects, preparing pupils for the Primary School
              Leaving Examination (PSLE) and beyond.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRIMARY_SUBJECTS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="flex items-center gap-4 rounded-2xl bg-white p-5 card-shadow">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navytext-white">
                  <s.icon size={19} />
                </div>
                <h3 className="font-semibold text-[var(--hc-navy)]">{s.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Teaching approach / methodology */}
      <section className="section-pad">
        <div className="container-hc">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow">Teaching Approach &amp; Methodology</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
              How we help every child thrive
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {METHODOLOGY.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.07}>
                <div className="flex gap-5 rounded-2xl border border-line p-7">
                  <span className="font-display text-2xl font-semibold text-brand/30">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy mb-1.5">{m.title}</h3>
                    <p className="text-sm text-slate leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Exam prep */}
      <section className="section-pad bg-navytext-white">
        <div className="container-hc grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="eyebrow text-amber">Examination Preparation</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-5">
              Structured revision, real confidence
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              From Standard IV mock assessments to intensive Standard VII PSLE
              preparation, pupils receive structured revision timetables,
              past-paper practice, and one-on-one support in the weeks
              leading up to national examinations.
            </p>
            <ul className="space-y-3 text-white/85 text-sm">
              <li className="flex items-center gap-2"><ClipboardCheck size={17} className="text-amber" /> Weekly assessments and progress tracking</li>
              <li className="flex items-center gap-2"><Users size={17} className="text-amber" /> Small revision groups for extra support</li>
              <li className="flex items-center gap-2"><Trophy size={17} className="text-amber" /> Consistent top PSLE pass rates</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden card-shadow aspect-[4/3]">
              <PhotoPlaceholder label="Photo: Standard VII pupils in revision class" tone="sky" className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Extra-curricular */}
      <section className="section-pad">
        <div className="container-hc">
          <Reveal className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow">Extra-Curricular Activities</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
              Skills that grow beyond the syllabus
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {EXTRA_CURRICULAR.map((e, i) => (
              <Reveal key={e} delay={i * 0.05}>
                <div className="rounded-2xl bg-sky px-6 py-5 text-navy font-medium">
                  {e}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center">
            <Link href="/admissions" className="btn-primary">
              Apply for Admission <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}