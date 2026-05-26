"use client";

import { ArrowUpRight } from "lucide-react";
import { caseStudyData } from "@/components/case-study/case-study";
import { motion } from "motion/react";

export default function CaseStudyPage() {
  return (
    <main className="flex-1 w-full flex flex-col items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center gap-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tighter sm:text-6xl text-foreground"
          >
            Case Studies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl text-muted-foreground md:text-xl"
          >
            Discover how leading companies and individuals are leveraging our digital vault to protect their assets.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {caseStudyData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <a href={item.href} className="group rounded-xl block h-full">
                <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                    <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                      {item.title}
                    </div>
                    <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                      {item.description}
                    </div>
                    <div className="shrink-0 bg-background/50 backdrop-blur-sm border border-border/50 w-fit rounded-full h-12 relative text-foreground text-sm font-medium flex items-center overflow-hidden shadow-sm">
                      <div className="btn-black-3d !transition-all !duration-500 !ease-out rounded-full h-10 w-10 flex items-center justify-center absolute left-1 top-[2px] group-hover:w-[calc(100%-8px)] z-10">
                        <ArrowUpRight className="text-white w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:rotate-45" />
                      </div>
                      <p className="pl-14 pr-6 relative z-0 whitespace-nowrap">
                        Read more
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
