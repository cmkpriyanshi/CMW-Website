import { HowItWorksCarousel } from "@/components/how-it-works/how-it-works-carousel";
import { HowItWorksTabs } from "@/components/how-it-works/how-it-works-tabs";
import { Badge } from "@/components/ui/badge";
import { ScanIcon, CalendarClockIcon, BellRingIcon, HandHeartIcon } from "lucide-react";

export type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

const defaultWarrantySteps = [
  {
    icon: <ScanIcon size={20} />,
    title: "Scan Receipt",
    description: "Instantly extract details with AI scanning.",
    image: "/how-it-works/warranty/step-1.png",
  },
  {
    icon: <CalendarClockIcon size={20} />,
    title: "Set Expiration",
    description: "Easily set or auto-detect warranty lengths.",
    image: "/how-it-works/warranty/step-2.png",
  },
  {
    icon: <BellRingIcon size={20} />,
    title: "Get Reminders",
    description: "Receive push alerts before warranties expire.",
    image: "/how-it-works/warranty/step-3.png",
  },
  {
    icon: <HandHeartIcon size={20} />,
    title: "Claim Quickly",
    description: "Initiate claims directly from the app.",
    image: "/how-it-works/warranty/step-4.png",
  },
] satisfies Step[];

export type HowItWorksProps = {
  badge?: string;
  title?: string;
  description?: string;
  steps?: Step[];
};

export function HowItWorks({
  badge = "HOW IT WORKS",
  title = "Discover how easy it is",
  description = "We've built the ultimate digital vault so you can focus on your assets - not managing paperwork.",
  steps = defaultWarrantySteps
}: HowItWorksProps) {
  return (
    <div id="how-it-works" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <Badge variant="secondary" className="uppercase">
        {badge}
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8 text-muted-foreground">
        {description}
      </p>
      <HowItWorksCarousel steps={steps} className="block lg:hidden" />
      <HowItWorksTabs steps={steps} className="hidden lg:block" />
    </div>
  );
}
