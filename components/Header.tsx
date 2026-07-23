"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/student-life", label: "Student Life" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md card-shadow" : "bg-white/70 backdrop-blur-sm"
        }`}
    >
      <div className="container-hc flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_8px_18px_-6px_rgba(27,90,200,0.5)] group-hover:scale-105 transition-transform">
            <Image
              src={logo}
              alt="Higher Career Academy Logo"
              width={44}
              height={44}
              priority
              className="object-contain"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-navy">
              Higher Career
            </span>
            <span className="block text-[11px] tracking-wide text-slate font-medium">
              ACADEMY &middot; Nursery &amp; Primary
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 rounded-full text-[15px] font-medium text-ink hover:text-brand hover:bg-sky transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/admissions" className="btn-primary text-sm">
            Apply for Admission
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center h-11 w-11 rounded-xl border border-line text-navy"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-line bg-white"
          >
            <nav className="container-hc flex flex-col py-3">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[16px] font-medium text-ink border-b border-line last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/admissions"
                onClick={() => setOpen(false)}
                className="btn-primary justify-center mt-4 mb-2"
              >
                Apply for Admission
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}