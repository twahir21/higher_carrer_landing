import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";

import {
  FileCheck2,
  BadgeCheck,
  Syringe,
  IdCard,
  Download,
} from "lucide-react";
import PageHero from "../components/PageHero";
import ProcessSteps from "@/components/Process";
import { ADMISSIONS_FAQ } from "@/components/faq";

export const metadata = {
  title: "Admissions | Higher Career Academy",
  description:
    "Learn about the admission process, requirements, application steps, and fees at Higher Career Academy.",
};

const REQUIREMENTS = [
  { icon: FileCheck2, title: "Birth Certificate", text: "Original and one photocopy for verification." },
  { icon: BadgeCheck, title: "Passport Photos", text: "Two recent passport-size photographs of the child." },
  { icon: Syringe, title: "Health & Immunisation Record", text: "Up-to-date clinic card or immunisation booklet." },
  { icon: IdCard, title: "Parent/Guardian ID", text: "A copy of the parent or guardian's national ID or passport." },
];

const FEES = [
  { level: "Nursery (Ages 2–5)", tuition: "Contact office for current rate", registration: "Placeholder Fee" },
  { level: "Standard I – IV", tuition: "Contact office for current rate", registration: "Placeholder Fee" },
  { level: "Standard V – VII", tuition: "Contact office for current rate", registration: "Placeholder Fee" },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Join the Higher Career Academy family"
        text="We keep our admissions process simple and personal, so every family feels informed and supported from the first inquiry."
      />

      {/* Process */}
      <section className="section-pad">
        <div className="container-hc">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow">Admission Process</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
              Four simple steps to enrolment
            </h2>
          </Reveal>
          <ProcessSteps />
        </div>
      </section>

      {/* Requirements */}
      <section className="section-pad bg-sky-2">
        <div className="container-hc">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow">Requirements</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
              What you'll need to apply
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REQUIREMENTS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl bg-white p-6 card-shadow">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky text-brand mb-4">
                    <r.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-navy mb-1.5">{r.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="section-pad">
        <div className="container-hc">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow">Fees Information</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
              Transparent, family-friendly fee structure
            </h2>
            <p className="text-slate mt-4">
              Figures below are placeholders &mdash; please contact our accounts
              office for the current fee schedule and available payment plans.
            </p>
          </Reveal>

          <Reveal className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-navy text-white text-sm">
                  <th className="px-6 py-4 font-semibold">Level</th>
                  <th className="px-6 py-4 font-semibold">Tuition (per term)</th>
                  <th className="px-6 py-4 font-semibold">Registration Fee</th>
                </tr>
              </thead>
              <tbody>
                {FEES.map((f, i) => (
                  <tr key={f.level} className={i % 2 ? "bg-sky-2" : "bg-white"}>
                    <td className="px-6 py-4 font-medium text-navy">{f.level}</td>
                    <td className="px-6 py-4 text-sm text-slate">{f.tuition}</td>
                    <td className="px-6 py-4 text-sm text-slate">{f.registration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal className="text-center mt-10">
            <a href="#" className="btn-primary">
              <Download size={18} /> Download Application Form
            </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-sky-2">
        <div className="container-hc max-w-3xl">
          <Reveal className="text-center mb-12">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
              Admissions FAQ
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={ADMISSIONS_FAQ} />
          </Reveal>
        </div>
      </section>
    </>
  );
}