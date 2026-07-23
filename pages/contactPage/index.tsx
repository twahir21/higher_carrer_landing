import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import PageHero from "@/components/PageHero";


export const metadata = {
  title: "Contact Us | Higher Career Academy",
  description:
    "Get in touch with Higher Career Academy — visit us, call, email, or send a message through our contact form.",
};

const INFO = [
  { icon: MapPin, title: "Visit Us", text: "V976+PR5, Amaani, mkabala na Amani stadium, Dunga Kiembeni, Zanzibar" },
  { icon: Phone, title: "Call Us", text: " 0777 343 414 / 0776 578 657" },
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
                  <p className="font-semibold text-navy">{item.title}</p>
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

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden card-shadow aspect-4/5">
                <iframe
                  title="Higher Career Academy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5212666361547!2d39.359545!3d-6.135729499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185d29c7bd114ef7%3A0xdca4e8d9e0fe08ad!2sHigher%20Career%20Academy!5e0!3m2!1sen!2stz!4v1711004824659!5m2!1sen!2stz"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <Link
                href="https://www.google.com/maps/dir/-6.852042,39.2894836/higher+career+academy+location/@-6.4816381,38.9349168,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x185d29c7bd114ef7:0xdca4e8d9e0fe08ad!2m2!1d39.3621196!2d-6.1357295?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand hover:underline"
              >
                Get Directions
                <ExternalLink size={16} />
              </Link>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <span className="text-sm font-semibold text-navy">Follow us:</span>
              {[FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaTiktok].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sky text-brand hover:bg-brand hover:text-white transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}