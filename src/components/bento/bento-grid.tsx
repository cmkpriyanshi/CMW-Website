"use client";

import Image from "next/image";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";

export function BentoGrid() {
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
    <section ref={ref} className="py-24" id="modules">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">Everything Your Personal Vault Needs.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            The only app you need to organize product warranties, secure personal documents, and track important renewal dates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="group col-span-1 md:row-span-2 h-full"
          >
            <BorderGlow 
              className="h-full"
              glowColor="221 83 53"
              colors={['#2563EB', '#60A5FA', '#3B82F6']}
              backgroundColor="var(--muted)"
              borderRadius={24}
              coneSpread={3}
            >
              <Link href="/modules/warranty" className="flex flex-col h-full cursor-pointer relative z-10 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-[24px]">
                <div className="p-8 md:p-12 pb-0">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      Smart Warranty Tracker
                    </h3>
                    <div className="shrink-0 bg-background/50 backdrop-blur-sm border border-border/50 w-fit rounded-full h-12 relative text-foreground text-sm font-medium flex items-center overflow-hidden shadow-sm">
                      <div className="btn-black-3d !transition-all !duration-500 !ease-out rounded-full h-10 w-10 flex items-center justify-center absolute left-1 top-[2px] group-hover:w-[calc(100%-8px)] z-10">
                        <ArrowUpRight className="text-white w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
                      </div>
                      <p className="pl-14 pr-6 relative z-0 whitespace-nowrap">
                        Explore Warranty
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground md:text-lg">
                    Scan receipts and let our AI extract the details. Automatically track product warranties, purchase dates, and expiration timelines in one secure place.
                  </p>
                </div>
                <div className="relative mt-8 w-[85%] mx-auto flex-1 min-h-[250px]">
                  <div className="absolute inset-x-0 top-0">
                    <Image 
                      src="/mockups/warranty.png" 
                      alt="Warranty Tracking Mockup" 
                      width={800}
                      height={1600}
                      className="w-full h-auto transition-transform duration-500 group-hover:-translate-y-2"
                    />
                  </div>
                </div>
              </Link>
            </BorderGlow>
          </motion.div>

          {/* Vault Card - Half Width */}
          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="group col-span-1 h-full"
          >
            <BorderGlow 
              className="h-full"
              glowColor="221 83 53"
              colors={['#2563EB', '#60A5FA', '#3B82F6']}
              backgroundColor="var(--muted)"
              borderRadius={24}
              coneSpread={3}
            >
              <Link href="/modules/vault" className="flex flex-col h-full cursor-pointer relative z-10 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-[24px]">
                <div className="p-8 pb-0">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">Secure Personal Vault</h3>
                    <div className="shrink-0 bg-background/50 backdrop-blur-sm border border-border/50 w-fit rounded-full h-12 relative text-foreground text-sm font-medium flex items-center overflow-hidden shadow-sm">
                      <div className="btn-black-3d !transition-all !duration-500 !ease-out rounded-full h-10 w-10 flex items-center justify-center absolute left-1 top-[2px] group-hover:w-[calc(100%-8px)] z-10">
                        <ArrowUpRight className="text-white w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:rotate-45" />
                      </div>
                      <p className="pl-14 pr-6 relative z-0 whitespace-nowrap">
                        Explore Vault
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Keep your IDs, insurance policies, and property records encrypted and organized. Access your digital vault anytime, even offline.
                  </p>
                </div>
                <div className="relative mt-8 w-[85%] mx-auto flex-1 min-h-[250px]">
                  <div className="absolute inset-x-0 top-0">
                    <Image 
                      src="/mockups/vault.png" 
                      alt="Secure Vault Mockup" 
                      width={800}
                      height={1600}
                      className="w-full h-auto transition-transform duration-500 group-hover:-translate-y-2"
                    />
                  </div>
                </div>
              </Link>
            </BorderGlow>
          </motion.div>

          {/* Reminder Card - Half Width */}
          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="group col-span-1 h-full"
          >
            <BorderGlow 
              className="h-full"
              glowColor="221 83 53"
              colors={['#2563EB', '#60A5FA', '#3B82F6']}
              backgroundColor="var(--muted)"
              borderRadius={24}
              coneSpread={3}
            >
              <Link href="/modules/reminders" className="flex flex-col h-full cursor-pointer relative z-10 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-[24px]">
                <div className="p-8 pb-0">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">Smart Expiry Reminders</h3>
                    <div className="shrink-0 bg-background/50 backdrop-blur-sm border border-border/50 w-fit rounded-full h-12 relative text-foreground text-sm font-medium flex items-center overflow-hidden shadow-sm">
                      <div className="btn-black-3d !transition-all !duration-500 !ease-out rounded-full h-10 w-10 flex items-center justify-center absolute left-1 top-[2px] group-hover:w-[calc(100%-8px)] z-10">
                        <ArrowUpRight className="text-white w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:rotate-45" />
                      </div>
                      <p className="pl-14 pr-6 relative z-0 whitespace-nowrap">
                        Explore Reminders
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Never miss a bill or subscription renewal again. Get timely pre-alerts for expiring warranties right on your calendar.
                  </p>
                </div>
                <div className="relative mt-8 w-[85%] mx-auto flex-1 min-h-[250px]">
                  <div className="absolute inset-x-0 top-0">
                    <Image 
                      src="/mockups/reminder.png" 
                      alt="Intelligent Reminders Mockup" 
                      width={800}
                      height={1600}
                      className="w-full h-auto transition-transform duration-500 group-hover:-translate-y-2"
                    />
                  </div>
                </div>
              </Link>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
