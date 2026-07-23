import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Map,
} from "lucide-react";
import PageHero from "./Land";

export const metadata = {
  title: "Contact Us | Higher Career Academy",
  description:
    "Get in touch with Higher Career Academy — visit us, call, email, or send a message through our contact form.",
};

const INFO = [
  { icon: MapPin, title: "Visit Us", text: "Plot 24, Mikocheni Street, Zanzibar, Tanzania" },
  { icon: Phone, title: "Call Us", text: "+255 700 000 000" },
  { icon: Mail, title: "Email Us", text: "info@highercareeracademy.ac.tz" },
  { icon: Clock, title: "Working Hours", text: "Mon – Fri, 7:00 AM – 5:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you"
        text="Whether you're exploring admissions or have a quick question, our team is ready to help."
      />

      <section className="section-pad">
        <div className="container-hc grid lg:grid-cols-2 gap-6 mb-16">
          {INFO.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="sm:col-span-1">
              <div className="flex items-center gap-4 rounded-2xl border border-line p-6 h-full">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky text-brand">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[var(--hc-navy)]">{item.title}</p>
                  <p className="text-sm text-slate">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="container-hc grid lg:grid-cols-[1fr_0.85fr] gap-14">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy mb-6">
              Send us a message
            </h2>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-semibold text-navy mb-6">
              Find us on the map
            </h2>
            <div className="rounded-2xl overflow-hidden card-shadow aspect-[4/5] bg-sky flex flex-col items-center justify-center gap-3 text-brand">
              <Map size={36} strokeWidth={1.6} />
              <p className="text-sm font-medium px-6 text-center">
                Google Maps embed placeholder — Mikocheni Street, Zanzibar
              </p>
            </div>

            {/* <div className="flex items-center gap-3 mt-8">
              <span className="text-sm font-semibold text-[var(--hc-navy)]">Follow us:</span>
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-brand hover:bg-brand hover:text-white transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div> */}
          </Reveal>
        </div>
      </section>
    </>
  );
}