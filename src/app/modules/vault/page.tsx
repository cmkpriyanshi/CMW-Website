import { VaultHero } from "@/components/modules/vault/hero";
import { HowItWorks, Step } from "@/components/how-it-works/how-it-works";
import { VaultFeatures } from "@/components/modules/vault/features";
import { VaultBenefits } from "@/components/modules/vault/benefits";
import { FAQs } from "@/components/faqs/faqs";
import { Footer } from "@/components/footer/footer";
import { Metadata } from "next";
import { UploadCloud, Cpu, Lock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Vault | CheckMyWarranty",
  description: "Securely store and organize your receipts and documents with bank-grade encryption.",
};

const vaultSteps = [
  {
    icon: <UploadCloud size={20} />,
    title: "Upload Documents",
    description: "Add receipts and manuals via camera or direct upload.",
    image: "/how-it-works/warranty/step-1.png",
  },
  {
    icon: <Cpu size={20} />,
    title: "AI Processing",
    description: "Our AI instantly reads and tags your document details.",
    image: "/how-it-works/warranty/step-2.png",
  },
  {
    icon: <Lock size={20} />,
    title: "Secure Storage",
    description: "Everything is encrypted and stored safely in the cloud.",
    image: "/how-it-works/warranty/step-4.png",
  },
  {
    icon: <Globe size={20} />,
    title: "Access Anywhere",
    description: "Retrieve your documents instantly from any device.",
    image: "/how-it-works/warranty/step-3.png",
  },
] satisfies Step[];

export default function VaultPage() {
  return (
    <>
      <VaultHero />
      <HowItWorks 
        badge="THE VAULT"
        title="Digitization made simple"
        description="Transform your physical clutter into a perfectly organized digital archive in three simple steps."
        steps={vaultSteps}
      />
      <VaultFeatures />
      <VaultBenefits />
      <FAQs />
      <Footer />
    </>
  );
}
