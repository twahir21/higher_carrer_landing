import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import { PhoneCall, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { GENERAL_FAQ } from "@/components/faq";

export const metadata = {
  title: "FAQ | Higher Career Academy",
  description:
    "Answers to common questions from parents about admissions, classes, school hours, transportation, and facilities at Higher Career Academy.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Answers for parents, made simple"
        text="Everything you need to know before enrolling your child at Higher Career Academy. Can't find your answer? Reach out directly."
      />

      <section className="section-pad">
        <div className="container-hc max-w-3xl">
          <Reveal>
            <Accordion items={GENERAL_FAQ} />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-hc">
          <Reveal>
            <div className="rounded-3xl bg-navytext-white px-8 py-12 sm:px-14 sm:py-14 text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">
                Still have questions?
              </h2>
              <p className="text-white/75 max-w-xl mx-auto mb-8">
                Our admissions team is happy to walk you through anything
                that's not covered here.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="rounded-full bg-white text-navy font-semibold px-7 py-3.5 inline-flex items-center gap-2 hover:-translate-y-1 transition-transform">
                  <PhoneCall size={17} /> Contact Us
                </Link>
                <Link href="/admissions" className="rounded-full border border-white/40 text-white font-semibold px-7 py-3.5 inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
                  Admissions Process <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}