import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function AdmissionBanner() {
  return (
    <section className="container-hc py-4 sm:py-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--hc-blue)] px-8 py-14 sm:px-16 sm:py-16 text-center">
          <div className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-[var(--hc-amber)]/20 blur-3xl" />
          <div className="relative">
            <span className="brick-row justify-center mb-5"><span /><span /><span /></span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white max-w-2xl mx-auto leading-tight">
              Admissions for the next intake are now open
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mt-4 mb-9">
              Give your child a strong start. Limited places remain across
              Nursery and Standard I for the upcoming academic year.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/admissions" className="rounded-full bg-white text-[var(--hc-navy)] font-semibold px-7 py-3.5 inline-flex items-center gap-2 hover:-translate-y-1 transition-transform">
                Apply for Admission <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="rounded-full border border-white/40 text-white font-semibold px-7 py-3.5 inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
                <PhoneCall size={17} /> Talk to Admissions
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}