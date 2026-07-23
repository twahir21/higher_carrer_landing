"use client";

import { Baby, BookOpen, Users, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const ITEMS = [
  {
    icon: Baby,
    title: "Nursery Education",
    text: "Play-based early learning that builds language, motor, and social skills for ages 2–5.",
  },
  {
    icon: BookOpen,
    title: "Primary Education",
    text: "A structured Standard I–VII curriculum blending strong academics with creativity.",
  },
  {
    icon: Users,
    title: "Qualified Teachers",
    text: "Experienced, caring educators trained to nurture every child's individual potential.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Learning Environment",
    text: "A secure, supervised campus where children feel protected, valued, and free to grow.",
  },
];

export default function QuickInfo() {
  return (
    <section className="relative -mt-10 z-10">
      <div className="container-hc">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-6 card-shadow border border-[var(--hc-line)] hover:-translate-y-1.5 transition-transform">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--hc-sky)] text-[var(--hc-blue)] mb-4">
                  <item.icon size={22} />
                </div>
                <h3 className="font-semibold text-[var(--hc-navy)] mb-1.5">{item.title}</h3>
                <p className="text-sm text-[var(--hc-slate)] leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}