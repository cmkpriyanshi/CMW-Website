/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { FadeIn } from "@/components/ui/fade-in";

// Legacy type kept for backward compatibility
export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
};

const testimonials = [
  {
    text: "CheckMyWarranty is the best warranty tracker app I've used. I simply scan my receipts, and it automatically organizes all my appliance warranties in one place.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Aisha Malik",
    role: "Homeowner",
  },
  {
    text: "I used to lose paper receipts all the time. Now, everything is safely stored in this secure digital vault. It's an absolute must-have.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Jordan Lee",
    role: "Small Business Owner",
  },
  {
    text: "The smart expiry reminders are a lifesaver! I got notified exactly a month before my laptop warranty expired and saved hundreds on a free repair.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Priya Sharma",
    role: "Freelance Designer",
  },
  {
    text: "As someone who buys a lot of electronics, having an offline-first app to track product warranties gives me so much peace of mind.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Carlos Mendes",
    role: "Tech Enthusiast",
  },
  {
    text: "I love the AI receipt scanner. It pulls out the purchase dates and warranty lengths instantly. No more manual data entry!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Sophie Turner",
    role: "Office Manager",
  },
  {
    text: "The device calendar sync is genius. All my subscription renewals and warranty expiry dates show up right next to my meetings.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Ameer Hassan",
    role: "Product Manager",
  },
  {
    text: "This is so much more than a receipt scanner app. The personal document vault securely holds my IDs and property deeds.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Layla Johnson",
    role: "Teacher",
  },
  {
    text: "I recommended this digital warranty organizer to my entire family. It completely eliminates paper clutter and is incredibly easy to use.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "David Kim",
    role: "Engineer",
  },
  {
    text: "Finally, a reliable way to track expirations and manage important documents. The seamless cloud sync works flawlessly across all my devices.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Nadia Rahman",
    role: "UX Researcher",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="bg-background my-20 relative">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 z-10">
        <FadeIn
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-sm text-muted-foreground">
              Testimonials
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter mt-5 text-center">
            Loved by Thousands
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            Join the community of users who rely on the ultimate warranty tracker and personal digital vault.
          </p>
        </FadeIn>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
