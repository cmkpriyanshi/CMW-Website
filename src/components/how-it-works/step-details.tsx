import type { Step } from "@/components/how-it-works/how-it-works";
import { cn } from "@/lib/utils";

type StepDetailsProps = {
  step: Step;
  isActive: boolean;
};

export function StepDetails({ step, isActive }: StepDetailsProps) {
  const { icon, title, description } = step;

  return (
    <>
      <div
        className={cn(
          "bg-secondary text-foreground w-fit rounded-sm p-3 transition-colors",
          isActive && "bg-foreground text-background",
        )}
      >
        {icon}
      </div>
      <div className="text-center">
        <p className="mb-2 text-base font-medium">{title}</p>
        <p className="text-muted-foreground text-sm text-wrap">{description}</p>
      </div>
    </>
  );
}
