"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu-1";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, BellRing } from "lucide-react";

export function DesktopNav({ className }: { className?: string }) {
  return (
    <nav className={cn("mx-auto flex w-full max-w-7xl items-center justify-between gap-4", className)}>
      <Link href="/">
        <Image src="/logos/cmw_transparent.png" alt="logo" width={150} height={150} />
      </Link>
      
      <NavigationMenu>
        <NavigationMenuList className="gap-2">
          {/* Home Link */}
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="/" className={navigationMenuTriggerStyle()} />}>
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Modules Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Modules</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                {/* Warranty Module */}
                <ListItem 
                  title="Warranty" 
                  href="/modules/warranty" 
                  icon={<ShieldCheck className="h-4 w-4" />}
                  imgSrc="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=300&auto=format&fit=crop"
                >
                  Protect your assets with comprehensive warranty tracking.
                </ListItem>
                
                {/* Vault Module */}
                <ListItem 
                  title="Vault" 
                  href="/modules/vault" 
                  icon={<Lock className="h-4 w-4" />}
                  imgSrc="https://images.unsplash.com/photo-1581445731737-142dbb9abf87?q=80&w=300&auto=format&fit=crop"
                >
                  Secure storage for all your important digital documents.
                </ListItem>
                
                {/* Reminder Module */}
                <ListItem 
                  title="Reminder" 
                  href="/modules/reminder" 
                  icon={<BellRing className="h-4 w-4" />}
                  imgSrc="https://images.unsplash.com/photo-1614032840902-6019a3fa2e9a?q=80&w=300&auto=format&fit=crop"
                >
                  Never miss an important date or expiration again.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* About Us Link */}
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="/about" className={navigationMenuTriggerStyle()} />}>
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Positioner and Popup for dropdowns */}
        <NavigationMenuPositioner>
          <NavigationMenuPopup />
        </NavigationMenuPositioner>
      </NavigationMenu>

      <Button asChild>
        <Link href="/pricing">Get Started</Link>
      </Button>
    </nav>
  );
}

function ListItem({ title, children, href, icon, imgSrc, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string; icon?: React.ReactNode; imgSrc?: string; }) {
  return (
    <li {...props}>
      <NavigationMenuLink render={<Link href={href} className="group flex h-full flex-col p-3 rounded-md transition-opacity hover:opacity-80" />}>
        {imgSrc && (
          <div className="relative mb-3 h-24 w-full overflow-hidden rounded-md bg-muted">
            <img src={imgSrc} alt={title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
        )}
        <div className="flex items-center gap-2 mb-1 text-foreground transition-colors group-hover:text-accent">
          {icon}
          <div className="text-sm leading-none font-medium">{title}</div>
        </div>
        <p className="text-muted-foreground line-clamp-2 text-xs leading-snug">{children}</p>
      </NavigationMenuLink>
    </li>
  );
}
