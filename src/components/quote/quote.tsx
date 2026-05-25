import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

export function Quote() {
  return (
    <figure className="mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center">
      <blockquote className="text-3xl leading-[1.1] font-medium tracking-tighter text-balance md:text-5xl md:text-wrap">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={0}
          blurStrength={4}
          wordAnimationEnd="bottom center"
          rotationEnd="bottom center"
        >
          &quot;Since the first day we used CheckMyWarranty, we knew we&apos;d never go back to spreadsheets again.&quot;
        </ScrollReveal>
      </blockquote>
      <figcaption className="mt-10">
        <span className="block font-semibold tracking-tight md:text-xl">Anuj Dalal</span>
        <span className="text-muted-foreground mt-1 block text-xs tracking-tighter md:text-xl">
          Founder & CEO · Zestard Technologies
        </span>
      </figcaption>
    </figure>
  );
}
