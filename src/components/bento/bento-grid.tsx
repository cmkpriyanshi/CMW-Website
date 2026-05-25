import Image from "next/image";
import BorderGlow from "@/components/BorderGlow";
import { cn } from "@/lib/utils";

export function BentoGrid() {
  return (
    <section className="py-24" id="features">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">Meet the App That Does It All.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Powerful, intuitive, and ready to make your life easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">
          <BorderGlow 
            className="group col-span-1 md:row-span-2 transition-transform hover:-translate-y-1 h-full"
            glowColor="221 83 53"
            colors={['#2563EB', '#60A5FA', '#3B82F6']}
            backgroundColor="var(--muted)"
            borderRadius={24}
          >
            <div className="p-8 md:p-12 pb-0">
              <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">Comprehensive Warranty Tracking</h3>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Protect your assets with comprehensive warranty tracking. Easily upload receipts, set expiration dates, and never lose track of a warranty again.
              </p>
            </div>
            <div className="relative mt-8 w-[85%] mx-auto flex-1 min-h-[250px]">
              <div className="absolute inset-x-0 top-0">
                <Image 
                  src="/mockups/warranty.png" 
                  alt="Warranty Tracking Mockup" 
                  width={800}
                  height={1600}
                  className="w-full h-auto transition-transform duration-500 group-hover:-translate-y-2"
                />
              </div>
            </div>
          </BorderGlow>

          {/* Vault Card - Half Width */}
          <BorderGlow 
            className="group col-span-1 transition-transform hover:-translate-y-1 h-full"
            glowColor="221 83 53"
            colors={['#2563EB', '#60A5FA', '#3B82F6']}
            backgroundColor="var(--muted)"
            borderRadius={24}
          >
            <div className="p-8 pb-0">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">Secure Digital Vault</h3>
              <p className="mt-4 text-muted-foreground">
                Secure storage for all your important digital documents. Keep your files encrypted and accessible anytime, anywhere.
              </p>
            </div>
            <div className="relative mt-8 w-[85%] mx-auto flex-1 min-h-[250px]">
              <div className="absolute inset-x-0 top-0">
                <Image 
                  src="/mockups/vault.png" 
                  alt="Secure Vault Mockup" 
                  width={800}
                  height={1600}
                  className="w-full h-auto transition-transform duration-500 group-hover:-translate-y-2"
                />
              </div>
            </div>
          </BorderGlow>

          {/* Reminder Card - Half Width */}
          <BorderGlow 
            className="group col-span-1 transition-transform hover:-translate-y-1 h-full"
            glowColor="221 83 53"
            colors={['#2563EB', '#60A5FA', '#3B82F6']}
            backgroundColor="var(--muted)"
            borderRadius={24}
          >
            <div className="p-8 pb-0">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">Intelligent Reminders</h3>
              <p className="mt-4 text-muted-foreground">
                Never miss an important date or expiration again. Receive context-aware notifications tailored to your schedule.
              </p>
            </div>
            <div className="relative mt-8 w-[85%] mx-auto flex-1 min-h-[250px]">
              <div className="absolute inset-x-0 top-0">
                <Image 
                  src="/mockups/reminder.png" 
                  alt="Intelligent Reminders Mockup" 
                  width={800}
                  height={1600}
                  className="w-full h-auto transition-transform duration-500 group-hover:-translate-y-2"
                />
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
}
