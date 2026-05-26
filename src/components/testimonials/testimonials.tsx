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
    text: "CheckMyWarranty completely changed how I manage my appliances. I never miss an expiration date now!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Aisha Malik",
    role: "Homeowner",
  },
  {
    text: "I used to lose track of receipts all the time. Now everything is in one secure vault. Absolutely love it.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Jordan Lee",
    role: "Small Business Owner",
  },
  {
    text: "The reminder system is so smart. I got notified before my laptop warranty expired and saved hundreds on repairs.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Priya Sharma",
    role: "Freelance Designer",
  },
  {
    text: "As someone who buys a lot of electronics, this app is a lifesaver. Everything is organized perfectly.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Carlos Mendes",
    role: "Tech Enthusiast",
  },
  {
    text: "The digital vault for documents is incredibly secure. I store all my product receipts there without worry.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Sophie Turner",
    role: "Office Manager",
  },
  {
    text: "Setting up was super quick. Within minutes I had all my warranties tracked and organized.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Ameer Hassan",
    role: "Product Manager",
  },
  {
    text: "I recommended CheckMyWarranty to everyone in my family. It's simple yet incredibly powerful.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Layla Johnson",
    role: "Teacher",
  },
  {
    text: "The intelligent reminders work perfectly. I always know when something needs attention before it's too late.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "David Kim",
    role: "Engineer",
  },
  {
    text: "Best warranty management app out there. The UI is clean, fast, and easy to navigate.",
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
            What our users say
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            Join thousands of users who never miss a warranty expiry again.
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
