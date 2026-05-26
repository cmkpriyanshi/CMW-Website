/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import BorderGlow from "@/components/BorderGlow";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import React from "react";
import { FadeIn } from "@/components/ui/fade-in";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export const caseStudyData: Gallery4Item[] = [
  {
    id: "enterprise",
    title: "Global Retailer Saves $4.2M in Expired Claims",
    description:
      "See how integrating CheckMyWarranty into their supply chain allowed a leading retailer to automatically track and claim hardware warranties before they expired.",
    href: "/case-study/enterprise",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxfHx8fHx8fHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "startup",
    title: "Tech Startup Eliminates Physical Receipts entirely",
    description:
      "Discover how a fast-growing tech startup used our digital vault to completely digitize their hardware asset management, achieving zero paper clutter in 30 days.",
    href: "/case-study/startup",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwyfHx8fHx8fHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "consumer",
    title: "The $10k Home Appliances Claim",
    description:
      "How intelligent push notifications saved a family from having to pay out-of-pocket for a catastrophic refrigerator and HVAC failure just days before expiration.",
    href: "/case-study/consumer",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwzfHx8fHx8fHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "agency",
    title: "Agency Tracks 500+ Employee Devices Seamlessly",
    description:
      "A creative agency leverages our calendar sync and automated reminders to track warranties on over 500 MacBooks, iPads, and production monitors.",
    href: "/case-study/agency",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHw0fHx8fHx8fHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

export function CaseStudy() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-24 overflow-hidden" id="case-study">
      <FadeIn className="w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="mb-12 flex flex-col items-center text-center gap-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
              Success Stories
            </h2>
            <p className="max-w-2xl text-muted-foreground md:text-xl">
              Discover how leading companies and individuals are leveraging our digital vault to protect their assets.
            </p>
            <Link href="/case-study" className="group mt-2 shrink-0 bg-background/50 backdrop-blur-sm border border-border/50 w-fit rounded-full h-12 relative text-foreground text-sm font-medium flex items-center overflow-hidden shadow-sm">
              <div className="btn-black-3d !transition-all !duration-500 !ease-out rounded-full h-10 w-10 flex items-center justify-center absolute left-1 top-[2px] group-hover:w-[calc(100%-8px)] z-10">
                <ArrowUpRight className="text-white w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <p className="pl-14 pr-6 relative z-0 whitespace-nowrap">
                View All Case Studies
              </p>
            </Link>
          </div>

          <div className="w-full">
            <Carousel
              setApi={setCarouselApi}
              opts={{
                loop: true,
                breakpoints: {
                  "(max-width: 768px)": { dragFree: true },
                },
              }}
            >
              <CarouselContent className="-ml-4 pb-4">
                {caseStudyData.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-4 max-w-[320px] lg:max-w-[420px]"
                  >
                    <a href={item.href} className="group rounded-xl">
                      <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
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
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            <div className="mt-8 flex items-center justify-center gap-6">
              <Button
                size="icon"
                variant="default"
                onClick={() => carouselApi?.scrollPrev()}
                className="hidden md:flex rounded-full disabled:opacity-30"
              >
                <ArrowLeft className="size-5" />
              </Button>
              
              <div className="flex justify-center gap-3">
                {caseStudyData.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "w-8 bg-black dark:bg-white" : "w-2.5 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
                    }`}
                    onClick={() => carouselApi?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                size="icon"
                variant="default"
                onClick={() => carouselApi?.scrollNext()}
                className="hidden md:flex rounded-full disabled:opacity-30"
              >
                <ArrowRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
