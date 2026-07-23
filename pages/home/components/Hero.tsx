"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Star, X } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/images/hero.png";
import { useState } from "react";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <section className="relative overflow-hidden bg-sky-2">
      {/* soft ambient shapes */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-32 h-72 w-72 rounded-full bg-[#FFE9CF] blur-3xl opacity-70" />

      <div className="container-hc relative grid lg:grid-cols-2 gap-14 items-center py-14 lg:py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 card-shadow mb-6"
          >
            <span className="brick-row"><span /><span /><span /></span>
            <span className="text-xs font-semibold text-navy ">
              Nursery &amp; Primary Education in Zanzibar
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] text-navy "
          >
            Building Tomorrow&apos;s Leaders{" "}
            <span className="relative whitespace-nowrap">
              Today
              <svg
                aria-hidden
                viewBox="0 0 300 12"
                className="absolute left-0 -bottom-1 w-full text-amber"
              >
                <path
                  d="M2 9C60 2 240 2 298 9"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-slate leading-relaxed max-w-xl"
          >
            Higher Career Academy provides quality nursery and primary education in Zanzibar
            through experienced teachers, a safe learning environment, and a child-centered curriculum
            that helps every learner think creatively, build confidence, and achieve their full potential.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link href="/admissions" className="btn-primary">
              Apply for Admission <ArrowRight size={18} />
            </Link>
            <button
              className="btn-secondary group"
              onClick={() => setIsVideoOpen(true)}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky">
                <Play
                  size={15}
                  className="fill-brand text-brand group-hover:scale-110 transition"
                />
              </span>
              Watch School Tour
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex items-center gap-6 text-sm text-slate"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={18} className="text-brand" />
              Registered by MoEST
            </div>
            <div className="flex items-center gap-1.5">
              <Star size={18} className="text-amber fill-amber" />
              Trusted by 400+ families
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-4xl overflow-hidden card-shadow aspect-4/5 sm:aspect-5/4 lg:aspect-4/5">
            <Image
              src={heroImage}
              alt="Happy students learning together at Higher Career Academy"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-white p-4 pr-6 card-shadow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-brand font-display font-semibold">
              1:9
            </div>
            <div>
              <p className="text-sm font-semibold text-navy ">Teacher-to-pupil ratio</p>
              <p className="text-xs text-slate">Personalised attention, always</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -top-5 -right-5 hidden sm:block rounded-2xl bg-navy text-white px-5 py-3 card-shadow"
          >
            <p className="text-xs text-white/70">Est.</p>
            <p className="font-display text-lg font-semibold">2012</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-3 sm:p-6"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl aspect-video max-h-[85vh] rounded-xl sm:rounded-2xl overflow-hidden card-shadow bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                aria-label="Close video"
                className="absolute -top-9 right-0 sm:top-3 sm:right-3 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/90 text-navy hover:bg-white transition z-10"
              >
                <X size={16} className="sm:hidden" />
                <X size={18} className="hidden sm:block" />
              </button>
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/iMnZ_v1sjPY?si=hYfPiZ5hcjOAOXyH&autoplay=1"
                title="Higher Career Academy School Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}