/* eslint-disable react/no-unescaped-entities */
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
            CheckMyWarranty provides a secure digital vault and AI-assisted tracking tool that allows users to upload, store, and manage product receipts, manuals, and personal documents. The Service includes automated push notifications and calendar syncing for expiring warranties and deadlines. CheckMyWarranty is a tracking tool; we are not a warranty provider, insurer, or manufacturer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">3. AI Accuracy and Liability</h2>
          <p>
            Our Service utilizes Artificial Intelligence (AI) to extract text, dates, and prices from the receipts and documents you upload. While we strive for high accuracy, the AI is provided for convenience. <strong>You are solely responsible for verifying the accuracy of any extracted dates, prices, or warranty durations.</strong> CheckMyWarranty is not liable for any missed deadlines, denied claims, or financial losses resulting from incorrect AI extraction or missed notifications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">4. End-to-End Encryption & Account Access</h2>
          <p className="mb-4">
            CheckMyWarranty utilizes End-to-End Encryption (E2EE) to secure your digital vault. Because of this security architecture:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not possess the decryption keys to access your vaulted documents.</li>
            <li><strong>If you lose your authentication credentials and account recovery keys, CheckMyWarranty cannot recover your vaulted data.</strong></li>
            <li>You are solely responsible for securely managing your passwords, devices, and recovery phrases.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">5. User Content & Uploads</h2>
          <p>
            You retain all ownership rights to the documents (User Content) you upload to your digital vault. You are solely responsible for the legality and appropriateness of your uploads. You agree not to upload any content that violates copyright laws, contains illegal material, or is designed to interfere with the proper functioning of the Service. We reserve the right to terminate accounts that violate these rules.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">6. Warranty Claims</h2>
          <p>
            We do not process warranty claims on your behalf. Providing a digital copy of a receipt via our app does not guarantee that a manufacturer or retailer will honor a warranty claim. All claims are subject to the original terms provided by the product manufacturer or retailer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
          <p>
            In no event shall CheckMyWarranty, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, denied warranty claims, data loss (including due to lost encryption keys), or other intangible losses, resulting from your access to or use of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact our legal team at: <br/>
            <strong>Email:</strong> legal@checkmywarranty.com
          </p>
        </section>
      </div>
    </main>
  );
}
