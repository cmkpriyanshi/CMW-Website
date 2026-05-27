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

  // Card 1
  const opacity1 = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.4], [60, 0]);

  // Card 2
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.55], [60, 0]);

  // Card 3
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.3, 0.7], [60, 0]);

  // Card 4
  const opacity4 = useTransform(scrollYProgress, [0.45, 0.85], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.45, 0.85], [60, 0]);

  // Card 5
  const opacity5 = useTransform(scrollYProgress, [0.6, 1.0], [0, 1]);
  const y5 = useTransform(scrollYProgress, [0.6, 1.0], [60, 0]);

  return (
    <section ref={ref} className="py-24" id="benefits">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">Your Pristine Digital Space.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Experience the peace of mind that comes with knowing every important document is exactly where it needs to be.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
          
          {/* Card 1 - Large Top Left (Span 2 cols) */}
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="group col-span-1 md:col-span-2 md:row-span-1 h-full min-h-[250px]"
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
                    Zero Physical Clutter
                  </h3>
                  <p className="mt-6 text-muted-foreground md:text-lg leading-relaxed">
                    Say goodbye to overflowing filing cabinets and faded shoebox receipts. By digitizing your assets into our intelligent vault, you reclaim physical space while making your documents permanently legible and immune to wear and tear.
                  </p>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Card 2 - Top Right (Span 1 col) */}
          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="group col-span-1 md:col-span-1 md:row-span-1 h-full min-h-[250px]"
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
                    Whether you're at a retailer dealing with a return or traveling abroad, your entire archive is securely available right in your pocket.
                  </p>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Card 3 - Bottom Left (Span 1 col) */}
          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="group col-span-1 md:col-span-1 md:row-span-1 h-full min-h-[250px]"
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
                    Fires, floods, or just a spilled coffee. Physical documents are fragile. Your digital vault is safely backed up across the cloud.
                  </p>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Card 4 - Bottom Mid (Span 1 col) */}
          <motion.div
            style={{ opacity: opacity4, y: y4 }}
            className="group col-span-1 md:col-span-1 md:row-span-1 h-full min-h-[250px]"
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
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Military-Grade Security</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Your sensitive personal documents are locked behind end-to-end encryption. Only you hold the keys to your vault.
                  </p>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Card 5 - Bottom Right (Span 1 col) */}
          <motion.div
            style={{ opacity: opacity5, y: y5 }}
            className="group col-span-1 md:col-span-1 md:row-span-1 h-full min-h-[250px]"
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
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">Effortless Organization</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Our AI automatically categorizes and tags every upload, making it incredibly easy to find what you need in seconds.
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
