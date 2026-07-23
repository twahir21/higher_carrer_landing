"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function GsapReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    // Calculate start offset based on direction
    const xOffset = direction === "left" ? -50 : direction === "right" ? 50 : 0;
    const yOffset = direction === "up" ? 60 : direction === "down" ? -60 : 0;

    gsap.from(ref.current, {
      opacity: 0,
      x: xOffset,
      y: yOffset,
      duration: 1,
      delay: delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%", // Triggers when top of section hits 85% of viewport height
        toggleActions: "play none none reverse", // Replays gracefully if scrolled back
      },
    });
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}