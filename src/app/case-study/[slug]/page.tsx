import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";

export const metadata: Metadata = {
  title: "Case Study | CheckMyWarranty",
  description: "Read our success stories.",
};

export default function CaseStudyArticle({ params }: { params: { slug: string } }) {
  // Normally we would fetch the case study by slug here.
  // Using generic mock content for demonstration.
  const title = "Global Retailer Saves $4.2M in Expired Claims";
  const image = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxfHx8fHx8fHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080";

  return (
    <main className="flex flex-col pt-24 pb-24 mx-auto w-full max-w-3xl px-4 md:px-6 text-left">
      
      <div className="mb-12">
        <Link 
          href="/#case-study" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 size-4" />
          Back to home
        </Link>
        
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground mb-8">
          {title}
        </h1>

          <div className="w-full h-64 md:h-96 relative overflow-hidden rounded-[24px]">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent mix-blend-multiply" />
          </div>
      </div>

      <article className="space-y-8 text-muted-foreground leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">The Challenge</h2>
          <p>
            With thousands of physical stores and a massive logistics network, our enterprise client was purchasing millions of dollars worth of hardware, from point-of-sale systems to warehouse scanners. Unfortunately, the asset tracking was completely decentralized. When a device broke, store managers rarely knew if it was under warranty, resulting in the company paying out-of-pocket for repairs or replacements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">The Solution</h2>
          <p className="mb-4">
            The client integrated the CheckMyWarranty enterprise API into their existing procurement software. Instantly, every piece of hardware purchased was automatically registered in our digital vault. We aggregated their physical receipts and digitized them, mapping them to the precise hardware serial numbers.
          </p>
          <p>
            More importantly, we set up intelligent notification pipelines. 30 days before a fleet of scanners was set to expire, the IT team received automated alerts, allowing them to audit the equipment and submit bulk claims for any degraded batteries or malfunctioning screens before the warranty window closed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">The Results</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>$4.2 Million Recovered:</strong> By catching expiring warranties just in time, the company avoided $4.2M in replacement costs over a 12-month period.</li>
            <li><strong>100% Paperless:</strong> The physical filing cabinets previously used to store receipts and warranty booklets were entirely eliminated.</li>
            <li><strong>Streamlined Operations:</strong> Store managers were given a simple dashboard to instantly verify the warranty status of any broken device in their store, cutting resolution times from weeks to minutes.</li>
          </ul>
        </section>

        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="font-semibold text-foreground mb-2">Ready to transform your asset management?</p>
          <p className="text-base">
            Contact our enterprise sales team to see how CheckMyWarranty can automate your claims process.
          </p>
        </div>
      </article>
    </main>
  );
}
