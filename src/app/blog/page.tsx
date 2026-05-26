import { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/BorderGlow";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | CheckMyWarranty",
  description: "Read our latest insights, guides, and industry news.",
};

const articles = [
  {
    title: "5 Hidden Manufacturer Warranty Clauses You Need to Know",
    category: "Guides",
    date: "May 24, 2026",
    gradient: "from-blue-500/20 to-cyan-500/20",
    href: "/blog/hidden-warranty-clauses"
  },
  {
    title: "The Death of the Paper Receipt: What it Means for Consumers",
    category: "Industry News",
    date: "May 15, 2026",
    gradient: "from-purple-500/20 to-pink-500/20",
    href: "/blog/death-of-paper-receipt"
  },
  {
    title: "How to Maximize Your Electronics Lifespan",
    category: "Tips",
    date: "May 10, 2026",
    gradient: "from-amber-500/20 to-orange-500/20",
    href: "/blog/maximize-electronics-lifespan"
  },
  {
    title: "Understanding Consumer Rights: A 2026 Perspective",
    category: "Guides",
    date: "May 02, 2026",
    gradient: "from-indigo-500/20 to-violet-500/20",
    href: "/blog/consumer-rights-2026"
  },
  {
    title: "Why Hardware Depreciation Matters for Small Businesses",
    category: "Business",
    date: "April 28, 2026",
    gradient: "from-emerald-500/20 to-green-500/20",
    href: "/blog/hardware-depreciation"
  },
  {
    title: "Top 10 Appliances Most Likely to Fail After Warranty",
    category: "Insights",
    date: "April 20, 2026",
    gradient: "from-rose-500/20 to-red-500/20",
    href: "/blog/top-10-appliances-fail"
  }
];

export default function BlogPage() {
  return (
    <main className="flex flex-col pt-24 pb-24 mx-auto w-full max-w-6xl px-4 md:px-6">
      
      <div className="mb-16 flex flex-col items-center text-center gap-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-foreground">
          All Articles
        </h1>
        <p className="max-w-2xl text-muted-foreground md:text-xl mt-2">
          Dive into our full archive of guides, industry news, and tips to protect your assets.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, idx) => (
          <div key={idx} className="h-full">
            <Link href={article.href} className="group block h-full">
              <BorderGlow 
                className="h-full flex flex-col"
                glowColor="221 83 53"
                colors={['#2563EB', '#60A5FA', '#3B82F6']}
                backgroundColor="var(--muted)"
                borderRadius={24}
                coneSpread={2}
              >
                <div className="flex flex-col h-full relative z-10 rounded-[24px] overflow-hidden">
                  <div className={`h-48 w-full bg-gradient-to-br ${article.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px]"></div>
                    <div className="absolute top-4 left-4 inline-flex items-center rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
                      {article.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-3">{article.date}</p>
                      <h3 className="text-xl font-bold tracking-tight text-foreground leading-snug transition-colors duration-300">
                        {article.title}
                      </h3>
                    </div>
                    
                    <div className="mt-6 flex items-center text-sm font-medium text-muted-foreground transition-colors duration-300">
                      Read Article 
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
