"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

const CATEGORIES = ["All", "Classrooms", "Campus", "Events", "Activities"];

type Images = { label: string; cat: string; tone: "sky" | "amber" | "navy" | undefined }[]

const IMAGES: Images = [
  { label: "Nursery classroom in session", cat: "Classrooms", tone: "sky" },
  { label: "Primary classroom lesson", cat: "Classrooms", tone: "amber" },
  { label: "School gate and entrance", cat: "Campus", tone: "sky" },
  { label: "Outdoor playground", cat: "Campus", tone: "amber" },
  { label: "Library reading corner", cat: "Campus", tone: "sky" },
  { label: "Annual Sports Day", cat: "Events", tone: "amber" },
  { label: "Cultural Week performance", cat: "Events", tone: "sky" },
  { label: "Prize-Giving Day", cat: "Events", tone: "amber" },
  { label: "Football practice", cat: "Activities", tone: "sky" },
  { label: "Art & craft session", cat: "Activities", tone: "amber" },
  { label: "Choir rehearsal", cat: "Activities", tone: "sky" },
  { label: "Science club experiment", cat: "Activities", tone: "amber" },
  { label: "Dining hall at lunchtime", cat: "Campus", tone: "sky" },
  { label: "Computer lab lesson", cat: "Classrooms", tone: "amber" },
  { label: "Debate club session", cat: "Activities", tone: "sky" },
  { label: "Graduation day", cat: "Events", tone: "amber" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? IMAGES : IMAGES.filter((i) => i.cat === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              active === cat
                ? "bg-brand text-white"
                : "bg-white border border-line text-navy hover:border-brand-light"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:balance]">
        {filtered.map((img, i) => (
          <motion.div
            layout
            key={img.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
            className="mb-4 break-inside-avoid rounded-2xl overflow-hidden card-shadow"
          >
            <PhotoPlaceholder
              label={img.label}
              tone={img.tone}
              className={i % 3 === 0 ? "aspect-3/4" : "aspect-square"}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}