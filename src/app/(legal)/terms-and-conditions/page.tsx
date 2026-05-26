/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | CheckMyWarranty",
  description: "Read our terms of service and conditions for using CheckMyWarranty.",
};

export default function TermsAndConditions() {
  return (
    <main className="mx-auto w-full max-w-3xl mt-12 md:mt-20 pb-24 px-4 text-left">
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl text-foreground mb-4">
        Terms and Conditions
      </h1>
      <p className="text-muted-foreground mb-12">Last Updated: May 26, 2026</p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the CheckMyWarranty website, mobile application, and related services (collectively, the "Service"), you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
          <p>
            CheckMyWarranty provides a digital platform that allows users to upload, store, and manage product receipts, manuals, and warranty expiration dates. The Service includes automated notifications and reminders regarding expiring warranties. We reserve the right to modify or discontinue, temporarily or permanently, the Service with or without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
          <p className="mb-4">When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You are responsible for safeguarding the password that you use to access the Service.</li>
            <li>You agree not to disclose your password to any third party.</li>
            <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Content & Uploads</h2>
          <p>
            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material (including receipts and manuals). You retain all of your ownership rights in your User Content. However, you are solely responsible for the legality, reliability, and appropriateness of any content you upload to your digital vault. You agree not to upload any content that is illegal, abusive, or designed to interfere with the proper functioning of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding User Content), features, and functionality are and will remain the exclusive property of CheckMyWarranty and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
          <p>
            In no event shall CheckMyWarranty, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service, or any conduct or content of any third party on the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <br/>
            <strong>Email:</strong> support@checkmywarranty.com
          </p>
        </section>
      </div>
    </main>
  );
}
