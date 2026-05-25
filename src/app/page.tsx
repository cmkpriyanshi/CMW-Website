"use client";

import { FAQs } from "@/components/faqs/faqs";
import { BentoGrid } from "@/components/bento/bento-grid";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Quote } from "@/components/quote/quote";
import { Showcase } from "@/components/showcase/showcase";
import { Testimonials } from "@/components/testimonials/testimonials";
import { useRedirectWarning } from "@/lib/redirect";

export default function Home() {
  useRedirectWarning();

  return (
    <>
      <Hero />
      <Showcase />
      <Quote />
      <BentoGrid />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  );
}
