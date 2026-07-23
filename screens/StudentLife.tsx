import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { Trophy, Palette, Sparkles, CalendarHeart } from "lucide-react";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Student Life | Higher Career Academy",
  description:
    "Explore sports, clubs, creative activities, and events that make up student life at Higher Career Academy.",
};

const SPORTS = [
  "Football (boys & girls)", "Netball", "Athletics & track", "Table tennis",
];
const CLUBS = [
  "Debate & public speaking", "Reading & library club", "Science club", "Coding & digital literacy",
];
const CREATIVE = [
  "Music & choir", "Drama & theatre", "Art & craft", "Traditional dance",
];

const EVENTS = [
  { title: "Annual Sports Day", tone: "amber" },
  { title: "Cultural Week", tone: "sky" },
  { title: "End-of-Year Concert", tone: "amber" },
  { title: "Prize-Giving Day", tone: "sky" },
];

function ListSection({ icon: Icon, eyebrow, title, items, tone = "sky" }) {
  return (
    <Reveal>
      <div className="h-full rounded-3xl bg-white p-8 card-shadow">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-brand mb-5">
          <Icon size={22} />
        </div>
        <span className="eyebrow">{eyebrow}</span>
        <h3 className="font-display text-xl font-semibold text-navy mt-2 mb-4">{title}</h3>
        <ul className="space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-slate">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function StudentLifePage() {
  return (
    <>
      <PageHero
        eyebrow="Student Life"
        title="Where character grows alongside academics"
        text="Sports, clubs, creative arts, and school events shape well-rounded learners at Higher Career Academy."
      />

      <section className="section-pad bg-sky-2">
        <div className="container-hc grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ListSection icon={Trophy} eyebrow="Physical Education" title="Sports" items={SPORTS} />
          <ListSection icon={Sparkles} eyebrow="After School" title="Clubs" items={CLUBS} />
          <ListSection icon={Palette} eyebrow="Self-Expression" title="Creative Activities" items={CREATIVE} />
        </div>
      </section>

      {/* Events */}
      <section className="section-pad">
        <div className="container-hc">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow">School Events</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
              Moments our pupils look forward to
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EVENTS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.07}>
                <div className="rounded-2xl overflow-hidden card-shadow group">
                  <div className="relative aspect-square">
                    <PhotoPlaceholder label={e.title} tone={e.tone} className="h-full w-full group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4 bg-white flex items-center gap-2">
                    <CalendarHeart size={16} className="text-brand" />
                    <h3 className="text-sm font-semibold text-navy">{e.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-pad bg-cream">
        <div className="container-hc">
          <Reveal className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow">Gallery</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-navy mt-3">
              Students in action
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="rounded-2xl overflow-hidden card-shadow aspect-square">
                  <PhotoPlaceholder
                    label="Student activity photo"
                    tone={i % 2 ? "amber" : "sky"}
                    className="h-full w-full"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}