import { HowItWorksCarousel } from "@/components/how-it-works/how-it-works-carousel";
import { HowItWorksTabs } from "@/components/how-it-works/how-it-works-tabs";
import { Badge } from "@/components/ui/badge";
import { ImagePlus, Wand2, MapPin, Box } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

const defaultWarrantySteps = [
  {
    icon: <ImagePlus size={20} />,
    title: "Upload Your Document",
    description: "Easily snap a photo or select a digital warranty document right from your device's gallery.",
    image: "/how-it-works/warranty/step-1.png",
  },
  {
    icon: <Wand2 size={20} />,
    title: "Smart AI Extraction",
    description: "Let our AI instantly extract the purchase date and fill in the details, or quickly enter them yourself.",
    image: "/how-it-works/warranty/step-2.png",
  },
  {
    icon: <MapPin size={20} />,
    title: "Assign a Location",
    description: "Tag the broad physical location, like 'Home' or 'Office', so you always know where your asset lives.",
    image: "/how-it-works/warranty/step-3.png",
  },
  {
    icon: <Box size={20} />,
    title: "Specify Placement",
    description: "Add pinpoint placement details like 'Bottom Desk Drawer' so you never lose a physical manual again.",
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
  title = "How Our Warranty Tracker Works",
  description = "Digitizing your personal documents and tracking product warranties is as easy as taking a photo. Let our smart app do the heavy lifting.",
  steps = defaultWarrantySteps
}: HowItWorksProps) {
  return (
    <div id="how-it-works" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <FadeIn className="flex flex-col items-center gap-6">
        <Badge variant="secondary" className="uppercase">
          {badge}
        </Badge>
        <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8 text-muted-foreground">
          {description}
        </p>
      </FadeIn>
      <HowItWorksCarousel steps={steps} className="block lg:hidden" />
      <HowItWorksTabs steps={steps} className="hidden lg:block" />
    </div>
  );
}
