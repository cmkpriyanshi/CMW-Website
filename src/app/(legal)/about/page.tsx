import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "About Us | CheckMyWarranty",
  description: "Learn more about our mission and the team behind CheckMyWarranty.",
};

export default function AboutUs() {
  return (
    <main className="mx-auto w-full max-w-3xl mt-12 md:mt-20 pb-24 px-4 text-left">
      <FadeIn>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl text-foreground mb-4">
          About Us
        </h1>
        <p className="text-muted-foreground mb-12">Building the future of warranty tracking</p>
      </FadeIn>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
          <p>
            At CheckMyWarranty, we believe that tracking warranties and securing digital assets shouldn't be a hassle. Our mission is to provide individuals and businesses with a seamless, intelligent platform that completely eliminates the headache of managing paper receipts and expired claims.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">The Problem We Solve</h2>
          <p className="mb-4">
            Every year, consumers and businesses lose millions of dollars because they fail to claim warranties before they expire, or simply because they lost the physical receipt. We built this platform to tackle:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Clutter:</strong> Eliminating the need to store physical receipts.</li>
            <li><strong>Missed Deadlines:</strong> Providing intelligent reminders before warranties expire.</li>
            <li><strong>Inaccessibility:</strong> Ensuring your important documents are available anywhere via our secure digital vault.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Our Values</h2>
          <p className="mb-4">We are driven by a set of core values that shape everything we build:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Security First:</strong> We employ bank-grade encryption to ensure your data is always safe.</li>
            <li><strong>Simplicity:</strong> We design intuitive experiences that require zero learning curve.</li>
            <li><strong>Reliability:</strong> We make sure our notifications and vault access are dependable 24/7.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Join Us</h2>
          <p>
            We are a growing team of passionate designers, engineers, and customer advocates. If you believe in our mission and want to help us shape the future of digital asset management, we'd love to hear from you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
          <p>
            Have a question or want to learn more? Reach out to us at: <br/>
            <strong>Email:</strong> hello@checkmywarranty.com
          </p>
        </section>
      </div>
    </main>
  );
}
