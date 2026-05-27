"use client";

import { StepDetails } from "@/components/how-it-works/step-details";
import type { Step } from "@/components/how-it-works/how-it-works";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Props = {
  steps: Step[];
  className?: string;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    x: 0,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
  }),
};

export function HowItWorksTabs({ steps, className }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeTab = steps[activeIdx];

  const handleTabChange = (newTitle: string) => {
    const newIdx = steps.findIndex(s => s.title === newTitle);
    if (newIdx === activeIdx) return;
    setDirection(newIdx > activeIdx ? 1 : -1);
    setActiveIdx(newIdx);
  };

  return (
    <Tabs className={cn("w-full max-w-6xl", className)} value={activeTab.title} onValueChange={handleTabChange}>
      <TabsList className="flex flex-wrap justify-center h-auto w-full gap-6">
        {steps.map((step) => (
          <TabsTrigger
            key={step.title}
            value={step.title}
            className="flex flex-1 cursor-pointer flex-col items-center justify-start gap-5 px-2 py-6 min-w-[250px] max-w-[270px]"
          >
            <StepDetails step={step} isActive={activeTab.title === step.title} />
          </TabsTrigger>
        ))}
      </TabsList>
      
      <div className="bg-card w-full mt-8 rounded-lg border overflow-hidden">
        <div className="relative flex w-full justify-center h-[540px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeTab.title}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 220, damping: 25, mass: 1 }}
              className="absolute inset-0 flex justify-center items-end"
            >
              <Image src={activeTab.image} alt="App Image" width={400} height={500} className="object-cover object-top h-[500px] w-[400px]" priority />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Tabs>
  );
}
