"use client";

import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import DotField from "@/components/DotField";

export function ReminderHero() {
  return (
    <div className="z-1 relative grid w-full place-items-center p-8 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 65%)"
        }}
      >
        <DotField
          dotRadius={2.3}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#2563EB"
          gradientTo="#60A5FA"
          glowColor="transparent"
        />
      </div>
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav />
      
      <div className="mt-16 flex flex-col items-center gap-6">
        <h1 className="text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-7xl">
          Never Miss <br className="hidden lg:block"/>
          <span className="text-muted-foreground block">A Deadline.</span>
        </h1>
        <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
          Intelligent push notifications and automated schedules ensure you never let a valuable warranty expire unnoticed again.
        </p>
        
        <div className="mb-10 flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="px-6 py-8 w-[240px]" asChild>
            <Link href="/download/ios" className="flex items-center justify-center gap-4">
              <svg viewBox="0 0 384 512" className="!h-9 !w-9 shrink-0 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
              <div className="flex flex-col items-start text-left">
                <span className="text-[0.7rem] tracking-wide uppercase leading-none opacity-80">Download on the</span>
                <span className="text-xl font-semibold leading-none mt-1.5">App Store</span>
              </div>
            </Link>
          </Button>

          <Button size="lg" className="px-6 py-8 w-[240px]" asChild>
            <Link href="/download/android" className="flex items-center justify-center gap-4">
              <svg viewBox="0 0 512 512" className="!h-7 !w-7 shrink-0 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
              <div className="flex flex-col items-start text-left">
                <span className="text-[0.65rem] tracking-wide uppercase leading-none opacity-80">GET IT ON</span>
                <span className="text-xl font-semibold leading-none mt-1.5">Google Play</span>
              </div>
            </Link>
          </Button>
        </div>

        {/* Single Device Hero */}
        <div className="relative flex w-full justify-center items-start pb-32 px-4">
          <div className="z-10 shrink-0">
            <Image src="/mockups/reminder.png" alt="Reminder Mockup" width={400} height={585} />
          </div>
        </div>
      </div>
    </div>
  );
}
