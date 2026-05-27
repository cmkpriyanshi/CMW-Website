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
          &quot;Before CheckMyWarranty, keeping track of receipts and warranty cards was a nightmare. Now, I just scan them and let the AI do the rest. It&apos;s the easiest app for organizing my personal documents and getting timely expiry reminders!&quot;
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
