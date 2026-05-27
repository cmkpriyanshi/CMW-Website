import { VaultHero } from "@/components/modules/vault/hero";
import { HowItWorks, Step } from "@/components/how-it-works/how-it-works";
import { VaultFeatures } from "@/components/modules/vault/features";
import { VaultBenefits } from "@/components/modules/vault/benefits";
import { VaultFAQs } from "@/components/modules/vault/faqs";
import { Footer } from "@/components/footer/footer";
import { Metadata } from "next";
import { UploadCloud, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Vault | CheckMyWarranty",
  description: "Securely store and organize your receipts and documents with bank-grade encryption.",
};

const vaultSteps = [
  {
    icon: <UploadCloud size={20} />,
    title: "Scan or Upload Document",
    description: "Easily scan a physical receipt or select a digital document directly from your device's gallery.",
    image: "/how-it-works/warranty/step-1.png",
  },
  {
    icon: <Cpu size={20} />,
    title: "Smart AI Extraction",
    description: "Let our AI instantly extract the important data and fill in the fields for you, or quickly enter them manually.",
    image: "/how-it-works/warranty/step-2.png",
  },
] satisfies Step[];

export default function VaultPage() {
  return (
    <>
      <VaultHero />
      <HowItWorks 
        badge="SECURE VAULT"
        title="How the Digital Vault Works"
        description="Transforming your physical clutter into a perfectly organized, highly secure digital archive is incredibly easy."
        steps={vaultSteps}
      />
      <VaultFeatures />
      <VaultBenefits />
      <VaultFAQs />
      <Footer />
    </>
  );
}
