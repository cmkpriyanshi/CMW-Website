"use client";

import type { Step } from "@/components/how-it-works/how-it-works";
import { StepCard } from "@/components/how-it-works/step-card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {
  steps: Step[];
  className?: string;
};

export function HowItWorksCarousel({ steps, className }: Props) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  return (
    <div className={cn("w-[calc(100%+3rem)] md:w-[calc(100%+5rem)]", className)}>
      <Carousel setApi={setCarouselApi}>
        <CarouselContent>
          {steps.map((step, index) => (
            <CarouselItem
              key={step.title}
              className="basis-[var(--carousel-item-width)] [--carousel-item-width:240px]"
              onClick={() => {
                carouselApi?.scrollTo(index);
                setCurrent(index + 1);
              }}
            >
              <StepCard step={step} isActive={current === index + 1} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
