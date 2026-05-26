"use client";

import React, { useRef } from "react";
import BorderGlow from "@/components/BorderGlow";
import { motion, useScroll, useTransform } from "motion/react";
import { FadeIn } from "@/components/ui/fade-in";

export function VaultBenefits() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center center"]
  });

  // Card 1: animates first
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.5], [60, 0]);

  // Card 2: animates second
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.75], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.75], [60, 0]);

  // Card 3: animates third
  const opacity3 = useTransform(scrollYProgress, [0.5, 1.0], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.5, 1.0], [60, 0]);

  return (
    <section ref={ref} className="py-24" id="benefits">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">Your pristine digital space.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Experience the relief of knowing every important document is exactly where it needs to be.
          </p>
        </FadeIn>

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
                    Eliminate the Clutter
                  </h3>
                  <p className="mt-6 text-muted-foreground md:text-lg leading-relaxed">
                    Say goodbye to overflowing filing cabinets and faded shoebox receipts. By digitizing your assets into our intelligent vault, you reclaim physical space while making your documents permanently legible and immune to wear and tear.
                  </p>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

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
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Always Accessible</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Whether you&apos;re at a retailer dealing with a return or traveling abroad, your entire archive is securely available right in your pocket.
                  </p>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

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
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Disaster Proof</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Fires, floods, or just a spilled cup of coffee. Physical documents are fragile. Your digital vault is backed up across multiple secure server locations.
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
