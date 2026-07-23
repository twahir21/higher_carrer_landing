import Link from "next/link";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { ArrowRight, CalendarDays } from "lucide-react";
import { NEWS } from "@/constants/Events";

export default function NewsPreview() {
  const items = NEWS.slice(0, 3);
  return (
    <section className="section-pad">
      <div className="container-hc">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <Reveal>
            <span className="eyebrow">Latest News</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy  mt-3">
              News &amp; announcements
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/news" className="btn-secondary">
              View All News <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((n, i) => (
            <Reveal key={n.slug} delay={i * 0.08}>
              <Link href={`/news/${n.slug}`} className="group block h-full rounded-2xl overflow-hidden card-shadow bg-white">
                <div className="relative aspect-16/10">
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
      </div>
    </section>
  );
}