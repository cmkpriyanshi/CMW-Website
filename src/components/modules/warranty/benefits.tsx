"use client";

import React, { useRef } from "react";
import BorderGlow from "@/components/BorderGlow";
import { motion, useScroll, useTransform } from "motion/react";

export function WarrantyBenefits() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center center"]
  });

  // Card 1 (Warranty): animates first
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.5], [60, 0]);

  // Card 2 (Vault): animates second
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.75], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.75], [60, 0]);

  // Card 3 (Reminder): animates third
  const opacity3 = useTransform(scrollYProgress, [0.5, 1.0], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.5, 1.0], [60, 0]);

  return (
    <section ref={ref} className="py-24" id="features">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">The ultimate protection.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Why you need a centralized digital vault for all your warranties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="group col-span-1 md:row-span-2 h-full min-h-[300px]"
          >
            <BorderGlow 
              className="h-full flex flex-col"
              glowColor="221 83 53"
              colors={['#2563EB', '#60A5FA', '#3B82F6']}
              backgroundColor="var(--muted)"
              borderRadius={24}
              coneSpread={3}
            >
              <div className="flex flex-col h-full relative z-10 rounded-[24px]">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    Save Thousands on Replacements
                  </h3>
                  <p className="mt-6 text-muted-foreground md:text-lg leading-relaxed">
                    Stop paying out of pocket for repairs on items you already insured. With smart tracking, you&apos;ll always know exactly what&apos;s covered and claim it before time runs out.
                  </p>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Vault Card - Half Width */}
          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="group col-span-1 h-full min-h-[200px]"
          >
            <BorderGlow 
              className="h-full flex flex-col"
              glowColor="221 83 53"
              colors={['#2563EB', '#60A5FA', '#3B82F6']}
              backgroundColor="var(--muted)"
              borderRadius={24}
              coneSpread={3}
            >
              <div className="flex flex-col h-full relative z-10 rounded-[24px]">
                <div className="p-8">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Zero Paper Clutter</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Ditch the messy shoebox of fading paper receipts. Everything is scanned, digitized, and securely backed up.
                  </p>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Reminder Card - Half Width */}
          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="group col-span-1 h-full min-h-[200px]"
          >
            <BorderGlow 
              className="h-full flex flex-col"
              glowColor="221 83 53"
              colors={['#2563EB', '#60A5FA', '#3B82F6']}
              backgroundColor="var(--muted)"
              borderRadius={24}
              coneSpread={3}
            >
              <div className="flex flex-col h-full relative z-10 rounded-[24px]">
                <div className="p-8">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Total Peace of Mind</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Rest easy knowing your most valuable assets are tracked and protected automatically without lifting a finger.
                  </p>
                </div>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
