/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "About CheckMyWarranty | Our Mission & Story",
  description: "Discover how CheckMyWarranty uses AI scanning and a secure digital vault to help you track warranties and manage personal documents.",
};

export default function AboutUs() {
  return (
    <main className="mx-auto w-full max-w-3xl mt-12 md:mt-20 pb-24 px-4 text-left">
      <FadeIn>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl text-foreground mb-4">
          About CheckMyWarranty
        </h1>
        <p className="text-muted-foreground text-lg mb-12">Building the ultimate operating system for your physical assets.</p>
      </FadeIn>

      <div className="space-y-12 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">The Story Behind the App</h2>
          <p className="mb-4">
            We've all been there. Your expensive coffee maker breaks down just months after you bought it. You know you have a warranty somewhere, but finding that tiny, faded slip of paper in a messy junk drawer is impossible. By the time you finally locate the receipt, the repair window has expired.
          </p>
          <p>
            At CheckMyWarranty, we realized that managing warranties, tracking return windows, and storing important personal documents shouldn't feel like a part-time job. We set out to build a seamless, intelligent platform that completely eliminates the headache of paper clutter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">An Intelligent, All-in-One Platform</h2>
          <p className="mb-4">
            We didn't just build a digital filing cabinet—we built a proactive assistant that works for you. CheckMyWarranty is powered by three core pillars:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-foreground">AI Receipt Scanner:</strong> Simply snap a photo of any receipt or manual. Our AI instantly extracts the purchase date, product name, and warranty length, saving you from tedious data entry.
            </li>
            <li>
              <strong className="text-foreground">Secure Digital Vault:</strong> A bank-grade encrypted storage system for all your personal IDs, property deeds, and documents. Access everything you own from one beautifully organized dashboard.
            </li>
            <li>
              <strong className="text-foreground">Smart Expiry Reminders:</strong> Never miss a deadline again. We push timely alerts directly to your phone and calendar right before a warranty expires or a store return window closes.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Built for Privacy & Reliability</h2>
          <p className="mb-4">
            Your personal data is your business, not ours. That's why CheckMyWarranty is built with an uncompromising commitment to security:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>End-to-End Encryption:</strong> We employ military-grade encryption to ensure your receipts and IDs are safe from prying eyes.</li>
            <li><strong>Offline-First Design:</strong> Need an insurance card in a dead zone? Our app caches your critical files so you can access your vault anytime, completely offline.</li>
            <li><strong>Seamless Cross-Device Sync:</strong> Your vault is automatically backed up to the cloud and synced seamlessly across your mobile devices and desktop.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment</h2>
          <p>
            Every year, consumers lose millions of dollars simply because they forget to use the warranties they already paid for. Our goal is to put that money back in your pocket by giving you total peace of mind. We handle the timelines, the organization, and the alerts, so you can focus on living your life.
          </p>
        </section>

        <section className="bg-muted p-6 sm:p-8 rounded-2xl border">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Get in Touch</h2>
          <p className="mb-2">
            Have questions, feedback, or want to partner with us? Our team is always here to help.
          </p>
          <p>
            <strong className="text-foreground">Email:</strong> <a href="mailto:hello@checkmywarranty.com" className="text-blue-600 hover:underline">hello@checkmywarranty.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
