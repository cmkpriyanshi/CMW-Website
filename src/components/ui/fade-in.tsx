"use client";

import { motion } from "motion/react";
import React from "react";

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  viewOnce = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  viewOnce?: boolean;
}) {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)", ...directions[direction] }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
      viewport={{ once: viewOnce, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
