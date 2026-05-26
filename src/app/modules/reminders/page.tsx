import { ReminderHero } from "@/components/modules/reminders/hero";
import { HowItWorks, Step } from "@/components/how-it-works/how-it-works";
import { ReminderFeatures } from "@/components/modules/reminders/features";
import { ReminderBenefits } from "@/components/modules/reminders/benefits";
import { FAQs } from "@/components/faqs/faqs";
import { Footer } from "@/components/footer/footer";
import { Metadata } from "next";
import { CalendarClock, ListTodo, BellRing, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Reminders | CheckMyWarranty",
  description: "Receive intelligent notifications before your warranties and return windows expire.",
};

const reminderSteps = [
  {
    icon: <CalendarClock size={20} />,
    title: "Set Reminders",
    description: "Assign expiration dates manually or let our AI extract them.",
    image: "/how-it-works/warranty/step-2.png",
  },
  {
    icon: <ListTodo size={20} />,
    title: "Choose Schedule",
    description: "Pick when you want to be notified (e.g. 30, 60, 90 days out).",
    image: "/how-it-works/warranty/step-4.png",
  },
  {
    icon: <BellRing size={20} />,
    title: "Get Notified",
    description: "Receive timely push alerts when deadlines approach.",
    image: "/how-it-works/warranty/step-3.png",
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "Take Action",
    description: "Extend the warranty or file a claim instantly from the app.",
    image: "/how-it-works/warranty/step-1.png",
  },
] satisfies Step[];

export default function ReminderPage() {
  return (
    <>
      <ReminderHero />
      <HowItWorks 
        badge="REMINDERS"
        title="Never forget a date"
        description="Our intelligent notification engine keeps track of your timelines so you don't have to."
        steps={reminderSteps}
      />
      <ReminderFeatures />
      <ReminderBenefits />
      <FAQs />
      <Footer />
    </>
  );
}
