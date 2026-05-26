import { StepDetails } from "@/components/how-it-works/step-details";
import type { Step } from "@/components/how-it-works/how-it-works";
import Image from "next/image";

type StepCardProps = {
  step: Step;
  isActive: boolean;
};

export function StepCard({ step, isActive }: StepCardProps) {
  return (
    <div className="flex w-[var(--carousel-item-width)] flex-col items-center gap-5 px-2 py-6">
      <StepDetails step={step} isActive={isActive} />
      <div className="bg-card w-full rounded-lg border pt-8 px-6 pb-0 overflow-hidden">
        <Image src={step.image} alt="App Image" width={304} height={450} className="w-full aspect-[2/3] object-cover object-top" />
      </div>
    </div>
  );
}
