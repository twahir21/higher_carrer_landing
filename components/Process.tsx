import Reveal from "@/components/Reveal";
import { FileText, ClipboardList, MessageSquare, CheckCircle2 } from "lucide-react";

const STEPS = [
  { icon: FileText, title: "Submit Inquiry", text: "Reach out via our Contact page or visit the school office to express interest and collect a form." },
  { icon: ClipboardList, title: "Complete Application", text: "Fill out the application form and gather the required supporting documents." },
  { icon: MessageSquare, title: "Assessment & Interview", text: "Your child attends a brief, friendly placement assessment and a short parent interview." },
  { icon: CheckCircle2, title: "Confirm Enrolment", text: "Receive your offer, complete fee payment, and welcome your child to Higher Career Academy." },
];

export default function ProcessSteps() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {STEPS.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.08}>
          <div className="relative h-full rounded-2xl border border-[var(--hc-line)] p-7 pt-9 hover:card-shadow transition-all">
            <span className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--hc-blue)] text-white text-sm font-semibold">
              {i + 1}
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--hc-sky)] text-[var(--hc-blue)] mb-4">
              <s.icon size={22} />
            </div>
            <h3 className="font-semibold text-[var(--hc-navy)] mb-2">{s.title}</h3>
            <p className="text-sm text-[var(--hc-slate)] leading-relaxed">{s.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}