import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CheckMyWarranty",
  description: "Learn how we collect, process, and secure your personal documents and warranty data.",
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
          <h2 className="text-2xl font-semibold text-foreground mb-4">1. Our Privacy Philosophy</h2>
          <p>
            Welcome to CheckMyWarranty. Your personal documents, receipts, and warranties are strictly your business. We built this platform to give you a secure, private way to organize your physical assets digitally. Our core philosophy is simple: we do not sell your data to marketers, and we implement the highest level of security to ensure nobody but you can read your vaulted documents.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            To provide our intelligent tracking and vault services, we collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account Data:</strong> Your name, email address, and authentication credentials.</li>
            <li><strong>Document & Asset Data:</strong> Images of receipts, warranties, and personal IDs you choose to upload to the Vault.</li>
            <li><strong>Extracted Metadata:</strong> Text automatically extracted by our AI from your uploads (e.g., purchase dates, store names, prices, warranty durations).</li>
            <li><strong>Device & Sync Data:</strong> Push notification tokens, timezone settings, and device identifiers to enable offline caching and cross-device syncing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Process Your Data (including AI)</h2>
          <p className="mb-4">
            CheckMyWarranty uses Artificial Intelligence (AI) to make document organization effortless. Here is exactly how that works:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>When you scan a receipt, the image is temporarily processed by our secure AI engine solely to extract relevant text (dates, prices).</li>
            <li><strong>We do not use your personal documents to train public AI models.</strong></li>
            <li>Once the metadata is extracted, the raw text and image are encrypted and locked in your digital vault.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">4. Vault Security & Encryption</h2>
          <p className="mb-4">
            Your Digital Vault is protected by <strong>End-to-End Encryption (E2EE)</strong>. 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your sensitive documents are encrypted on your device before they ever reach our servers.</li>
            <li>CheckMyWarranty employees, engineers, and automated systems cannot read or view the contents of your encrypted vault files.</li>
            <li>For offline access, encrypted files may be cached securely on your local device. If your device is lost or stolen, your data remains encrypted behind your OS-level biometric security.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">5. Third-Party Integrations</h2>
          <p>
            With your explicit permission, we may sync reminder dates to your native Apple, Google, or Outlook calendars. We only transmit the specific event details (e.g., &quot;Coffee Maker Warranty Expiring&quot;) and never share the underlying document images or your full account profile with these calendar providers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention and Deletion</h2>
          <p>
            You have complete control over your data. You may export or delete individual documents at any time. If you decide to close your CheckMyWarranty account, a single click will instantly initiate a permanent wipe of all your profile data, uploaded files, and metadata from our active servers and backups.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, how our AI processes data, or our encryption standards, please contact our Data Protection Officer at: <br/>
            <strong>Email:</strong> privacy@checkmywarranty.com
          </p>
        </section>
      </div>
    </main>
  );
}
