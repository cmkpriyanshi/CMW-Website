import { WarrantyHero } from "@/components/modules/warranty/hero";
import { HowItWorks } from "@/components/how-it-works/how-it-works";
import { WarrantyFeatures } from "@/components/modules/warranty/features";
import { WarrantyBenefits } from "@/components/modules/warranty/benefits";
import { FAQs } from "@/components/faqs/faqs";
import { Footer } from "@/components/footer/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warranty Tracking | CheckMyWarranty",
  description: "Securely store and manage all your warranties in one centralized digital vault.",
};

export default function WarrantyPage() {
  return (
    <>
      <WarrantyHero />
      <HowItWorks />
      <WarrantyFeatures />
      <WarrantyBenefits />
      <FAQs />
      <Footer />
    </>
  );
}
