import Reveal from "@/components/Reveal";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  text?: string;
}

export default function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-sky-2 border-b border-line">
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-sky blur-3xl" />
      <div className="container-hc relative py-16 sm:py-20 text-center">
        <Reveal>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-navy mt-3 max-w-3xl mx-auto leading-tight">
            {title}
          </h1>
          {text && (
            <p className="text-slate max-w-2xl mx-auto mt-5 leading-relaxed">
              {text}
            </p>
          )}
          <span className="brick-row justify-center mt-7"><span /><span /><span /></span>
        </Reveal>
      </div>
    </section>
  );
}