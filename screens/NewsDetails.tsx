import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ArrowLeft, ArrowRight } from "lucide-react";
import { NEWS } from "@/pages/Events";

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }) {
  const item = NEWS.find((n) => n.slug === params.slug);
  if (!item) return {};
  return {
    title: `${item.title} | Higher Career Academy`,
    description: item.excerpt,
  };
}

export default function NewsDetailPage({ params }) {
  const index = NEWS.findIndex((n) => n.slug === params.slug);
  if (index === -1) notFound();
  const item = NEWS[index];
  const related = NEWS.filter((_, i) => i !== index).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--hc-sky-2)] border-b border-[var(--hc-line)]">
        <div className="container-hc py-14 sm:py-16">
          <Reveal>
            <Link href="/news" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--hc-blue)] mb-6">
              <ArrowLeft size={16} /> Back to News
            </Link>
            <div className="flex items-center gap-2 text-xs text-[var(--hc-slate)] mb-4">
              <span className="rounded-full bg-[var(--hc-sky)] text-[var(--hc-blue)] font-semibold px-2.5 py-1">{item.category}</span>
              <span className="inline-flex items-center gap-1"><CalendarDays size={13} /> {item.date}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--hc-navy)] max-w-3xl leading-tight">
              {item.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-hc grid lg:grid-cols-[1.3fr_0.7fr] gap-14">
          <div>
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden card-shadow aspect-[16/9] mb-10">
                <PhotoPlaceholder label={item.title} tone={item.tone} className="h-full w-full" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[var(--hc-slate)] leading-relaxed text-[17px]">{item.body}</p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-[var(--hc-sky-2)] p-7">
              <h3 className="font-display text-lg font-semibold text-[var(--hc-navy)] mb-5">
                More News &amp; Events
              </h3>
              <ul className="space-y-5">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/news/${r.slug}`} className="group flex items-start gap-2 text-sm">
                      <ArrowRight size={15} className="mt-0.5 shrink-0 text-[var(--hc-blue)]" />
                      <span className="text-[var(--hc-navy)] font-medium group-hover:text-[var(--hc-blue)] transition-colors">
                        {r.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}