import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import PageHero from "./Land";
import { NEWS } from "@/core/constants/Events";

export const metadata = {
  title: "News & Events | Higher Career Academy",
  description:
    "Read the latest news, announcements, and upcoming events from Higher Career Academy.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="Stay up to date with Higher Career Academy"
        text="Announcements, school events, and stories from across our nursery and primary community."
      />
      <section className="section-pad">
        <div className="container-hc grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.map((n, i) => (
            <Reveal key={n.slug} delay={(i % 3) * 0.08}>
              <Link href={`/news/${n.slug}`} className="group block h-full rounded-2xl overflow-hidden card-shadow bg-white">
                <div className="relative aspect-[16/10]">
                  <PhotoPlaceholder label={n.title} tone={n.tone} className="h-full w-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate mb-3">
                    <span className="rounded-full bg-sky text-brand font-semibold px-2.5 py-1">{n.category}</span>
                    <span className="inline-flex items-center gap-1"><CalendarDays size={13} /> {n.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy mb-2 leading-snug group-hover:text-brand transition-colors">
                    {n.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">{n.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}