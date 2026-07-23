import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { Quote } from "lucide-react";

export default function HeadTeacherWelcome() {
  return (
    <section className="section-pad">
      <div className="container-hc grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
        <Reveal>
          <div className="relative rounded-[1.75rem] overflow-hidden card-shadow aspect-4/5 max-w-sm mx-auto lg:mx-0">
            <PhotoPlaceholder
              label="Photo: Head Teacher in the school courtyard"
              tone="navy"
              className="h-full w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">A Message From Our Head Teacher</span>
          <Quote className="text-sky fill-sky mt-4 mb-2" size={44} />
          <p className="font-display text-2xl sm:text-3xl text-navy  leading-snug mb-6">
            &ldquo;Every child who walks through our gates carries a spark. Our
            work is to protect that spark, and help it grow into confidence,
            character, and a genuine love of learning.&rdquo;
          </p>
          <p className="text-slate leading-relaxed mb-6">
            At Higher Career Academy, we believe the early years of a child&rsquo;s
            education shape everything that follows. That is why our teachers
            take the time to know each learner personally &mdash; their pace,
            their curiosity, and their needs &mdash; so that no child is left
            behind and every child is challenged to reach further.
          </p>
          <div>
            <p className="font-semibold text-navy ">Mrs. Amina Joseph Mwakalinga</p>
            <p className="text-sm text-slate">Head Teacher, Higher Career Academy</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}