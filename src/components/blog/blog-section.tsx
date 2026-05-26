"use client";

import React, { useRef } from "react";
import BorderGlow from "@/components/BorderGlow";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "5 Hidden Manufacturer Warranty Clauses You Need to Know",
    category: "Guides",
    date: "May 24, 2026",
    gradient: "from-blue-500/20 to-cyan-500/20",
    href: "/blog/hidden-warranty-clauses"
  },
  {
    title: "How We Saved Our Enterprise Clients $4.2M Last Year",
    category: "Case Study",
    date: "May 20, 2026",
    gradient: "from-emerald-500/20 to-teal-500/20",
    href: "/case-study/enterprise"
  },
  {
    title: "The Death of the Paper Receipt: What it Means for Consumers",
    category: "Industry News",
    date: "May 15, 2026",
    gradient: "from-purple-500/20 to-pink-500/20",
    href: "/blog/death-of-paper-receipt"
  }
];

export function BlogSection() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section ref={ref} className="py-24 relative" id="blog">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center gap-4">
          <motion.div
            style={{ opacity: shouldReduceMotion ? 1 : opacity, y: shouldReduceMotion ? 0 : y }}
            className="flex flex-col items-center text-center gap-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
              Latest Insights
            </h2>
            <p className="max-w-2xl text-muted-foreground md:text-xl">
              Stay ahead of the curve with our latest guides, industry news, and success stories.
            </p>
            <Link href="/blog" className="group mt-2 shrink-0 bg-background/50 backdrop-blur-sm border border-border/50 w-fit rounded-full h-12 relative text-foreground text-sm font-medium flex items-center overflow-hidden shadow-sm">
              <div className="btn-black-3d !transition-all !duration-500 !ease-out rounded-full h-10 w-10 flex items-center justify-center absolute left-1 top-[2px] group-hover:w-[calc(100%-8px)] z-10">
                <ArrowUpRight className="text-white w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <p className="pl-14 pr-6 relative z-0 whitespace-nowrap">
                View All Articles
              </p>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              style={{ opacity: shouldReduceMotion ? 1 : opacity, y: shouldReduceMotion ? 0 : y }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <Link href={article.href} className="group block h-full">
                <BorderGlow 
                  className="h-full flex flex-col"
                  glowColor="221 83 53"
                  colors={['#2563EB', '#60A5FA', '#3B82F6']}
                  backgroundColor="var(--muted)"
                  borderRadius={24}
                  coneSpread={2}
                >
                  <div className="flex flex-col h-full relative z-10 rounded-[24px] overflow-hidden">
                    {/* Abstract Image Placeholder */}
                    <div className={`h-48 w-full bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px]"></div>
                      <div className="absolute top-4 left-4 inline-flex items-center rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
                        {article.category}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground mb-3">{article.date}</p>
                        <h3 className="text-xl font-bold tracking-tight text-foreground leading-snug transition-colors duration-300">
                          {article.title}
                        </h3>
                      </div>
                      
                      <div className="mt-6 shrink-0 bg-background/50 backdrop-blur-sm border border-border/50 w-fit rounded-full h-12 relative text-foreground text-sm font-medium flex items-center overflow-hidden shadow-sm">
                        <div className="btn-black-3d !transition-all !duration-500 !ease-out rounded-full h-10 w-10 flex items-center justify-center absolute left-1 top-[2px] group-hover:w-[calc(100%-8px)] z-10">
                          <ArrowUpRight className="text-white w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:rotate-45" />
                        </div>
                        <p className="pl-14 pr-6 relative z-0 whitespace-nowrap">
                          Read Article
                        </p>
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </Link>
            </motion.div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}
