import { ReminderHero } from "@/components/modules/reminders/hero";
import { HowItWorks, Step } from "@/components/how-it-works/how-it-works";
import { ReminderFeatures } from "@/components/modules/reminders/features";
import { ReminderBenefits } from "@/components/modules/reminders/benefits";
import { ReminderFAQs } from "@/components/modules/reminders/faqs";
import { Footer } from "@/components/footer/footer";
import { Metadata } from "next";
import { BellRing } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Reminders | CheckMyWarranty",
  description: "Receive intelligent notifications before your warranties and return windows expire.",
};

const reminderSteps = [
  {
    icon: <BellRing size={20} />,
    title: "Set Your Expiry Alert",
    description: "Simply select your warranty, pick when you want a heads-up (like 30 or 60 days before), and we'll automatically notify you right on time.",
    image: "/how-it-works/warranty/step-3.png",
  },
] satisfies Step[];

export default function ReminderPage() {
  return (
    <>
      <ReminderHero />
      <HowItWorks 
        badge="SMART ALERTS"
        title="How Our Smart Reminders Work"
        description="Setting up intelligent warranty notifications takes just a few seconds. Let our app keep track of your deadlines so you don't have to."
        steps={reminderSteps}
      />
      <ReminderFeatures />
      <ReminderBenefits />
      <ReminderFAQs />
      <Footer />
    </>
  );
}
