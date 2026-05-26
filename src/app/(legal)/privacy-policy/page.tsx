import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CheckMyWarranty",
  description: "Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto w-full max-w-3xl mt-12 md:mt-20 pb-24 px-4 text-left">
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl text-foreground mb-4">
        Privacy Policy
      </h1>
      <p className="text-muted-foreground mb-12">Last Updated: May 26, 2026</p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
          <p>
            Welcome to CheckMyWarranty. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our application, and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">2. The Data We Collect About You</h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Asset Data:</strong> includes information about the products you register, warranty details, uploaded receipts, and expiration dates.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Personal Data</h2>
          <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing our warranty tracking services).</li>
            <li>To send you intelligent notifications and push alerts regarding warranty expirations.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures, including bank-grade encryption for your digital vault, to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. You may request the deletion of your account and all associated vault documents at any time through the application settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at: <br/>
            <strong>Email:</strong> privacy@checkmywarranty.com
          </p>
        </section>
      </div>
    </main>
  );
}
