import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Article | CheckMyWarranty",
  description: "Read our latest insights.",
};

export default function BlogArticle({ params }: { params: { slug: string } }) {
  // Normally we would fetch the article by slug here.
  // Using generic mock content for demonstration.
  const title = "5 Hidden Manufacturer Warranty Clauses You Need to Know";
  const date = "May 24, 2026";
  const category = "Guides";

  return (
    <main className="flex flex-col pt-24 pb-24 mx-auto w-full max-w-3xl px-4 md:px-6 text-left">
      
      <div className="mb-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 size-4" />
          Back to all articles
        </Link>
        
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
          {title}
        </h1>
      </div>

      <article className="space-y-8 text-muted-foreground leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4 mt-12">1. The Void-if-Removed Sticker Myth</h2>
          <p>
            It is a common belief that breaking the warranty seal or removing a "warranty void if removed" sticker immediately invalidates your hardware warranty. However, under the Magnuson-Moss Warranty Act, companies cannot legally void your warranty simply for opening the device. They must prove that your specific actions caused the damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">2. Third-Party Repair Clauses</h2>
          <p className="mb-4">
            Similar to the sticker myth, many manufacturers will state that using third-party repair shops will void your warranty. This is also largely unenforceable. You are allowed to seek independent repairs without forfeiting your warranty rights, provided the repair itself did not cause the component failure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">3. Requirement of Original Packaging</h2>
          <p className="mb-4">
            Some brands try to reject claims by demanding you ship the product back in its original packaging. Legally, as long as the product is packaged securely to prevent shipping damage, you are not required to keep the cardboard boxes for years.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">4. Commercial vs. Consumer Use</h2>
          <p>
            If you bought a consumer-grade laptop but used it heavily for your small business, the manufacturer might try to classify this as "commercial use" and void the standard consumer warranty. Always check the acceptable use policies in the fine print if you are buying equipment for your LLC.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">5. The "Act of God" Loophole</h2>
          <p>
            Power surges, lightning strikes, and floods are often classified as "Acts of God" and are not covered under standard manufacturer defects. This is why having secondary insurance or an extended warranty that specifically covers accidental damage and electrical surges is critical for expensive home appliances.
          </p>
        </section>

        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="font-semibold text-foreground mb-2">Protect your investments</p>
          <p className="text-base">
            Don't let these clauses catch you off guard. Register your assets with CheckMyWarranty today to keep track of every detail.
          </p>
        </div>
      </article>
    </main>
  );
}
