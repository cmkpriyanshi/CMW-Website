import { MobileNav } from "@/components/hero/mobile-nav";
import { DesktopNav } from "@/components/hero/desktop-nav";

export function Nav() {
  return (
    <>
      <MobileNav className="flex md:hidden" />
      <DesktopNav className="hidden md:flex" />
    </>
  );
}
