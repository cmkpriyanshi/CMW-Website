import { Footer } from "@/components/footer/footer";
import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col justify-between">
      <div className="isolate flex w-full flex-col p-8">
        <BackgroundBlur className="-top-40 md:-top-0" />
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
}
