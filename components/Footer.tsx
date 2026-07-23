import Link from "next/link";
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--hc-navy)] text-white">
      <div className="container-hc py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                <GraduationCap size={22} />
              </span>
              <span className="font-display text-lg font-semibold">Higher Career</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Building strong foundations for a successful future &mdash; quality nursery
              and primary education rooted in care, discipline, and curiosity.
            </p>
            {/* <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[var(--hc-blue-light)] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-white/60">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/academics" className="hover:text-white">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
              <li><Link href="/student-life" className="hover:text-white">Student Life</Link></li>
              <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-white/60">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><Link href="/academics" className="hover:text-white">Nursery Education</Link></li>
              <li><Link href="/academics" className="hover:text-white">Primary Education</Link></li>
              <li><Link href="/student-life" className="hover:text-white">Clubs &amp; Sports</Link></li>
              <li><Link href="/news" className="hover:text-white">News &amp; Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-white/60">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-2.5"><MapPin size={17} className="shrink-0 mt-0.5 text-[var(--hc-amber)]" /> Plot 24, Mikocheni Street, Dar es Salaam, Tanzania</li>
              <li className="flex gap-2.5"><Phone size={17} className="shrink-0 mt-0.5 text-[var(--hc-amber)]" /> +255 700 000 000</li>
              <li className="flex gap-2.5"><Mail size={17} className="shrink-0 mt-0.5 text-[var(--hc-amber)]" /> info@highercareeracademy.ac.tz</li>
              <li className="flex gap-2.5"><Clock size={17} className="shrink-0 mt-0.5 text-[var(--hc-amber)]" /> Mon &ndash; Fri, 7:00 AM &ndash; 5:00 PM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-hc py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Higher Career Academy. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white/80">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/80">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}