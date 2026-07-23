"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Parent container that orchestrates the stagger timing
export function StaggerGroup({
  children,
  className = "",
  staggerDelay = 0.15,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay, // Delays each child item by 0.15s
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Child item that defines the entrance animation
export function StaggerItem({
  children,
  className = "",
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}