"use client";

import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Home,
  ShieldCheck,
  Lock,
  BellRing,
  BookOpen,
  Briefcase,
  User,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type SubItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  description: string;
};

type NavGroup = {
  label: string;
  icon: React.ReactNode;
  href?: string;
  children?: SubItem[];
};

const navGroups: NavGroup[] = [
  {
    label: "Home",
    icon: <Home className="h-4 w-4" />,
    href: "/",
  },
  {
    label: "Modules",
    icon: <ShieldCheck className="h-4 w-4" />,
    children: [
      {
        label: "Warranty Tracking",
        href: "/modules/warranty",
        icon: <ShieldCheck className="h-4 w-4" />,
        description: "Protect your assets with comprehensive tracking.",
      },
      {
        label: "Digital Vault",
        href: "/modules/vault",
        icon: <Lock className="h-4 w-4" />,
        description: "Secure storage for all your important documents.",
      },
      {
        label: "Reminders",
        href: "/modules/reminders",
        icon: <BellRing className="h-4 w-4" />,
        description: "Never miss an important date or expiration.",
      },
    ],
  },
  {
    label: "Resources",
    icon: <BookOpen className="h-4 w-4" />,
    children: [
      {
        label: "Blog",
        href: "/blog",
        icon: <BookOpen className="h-4 w-4" />,
        description: "Articles, guides, and industry news.",
      },
      {
        label: "Case Studies",
        href: "/case-study",
        icon: <Briefcase className="h-4 w-4" />,
        description: "How leading companies protect their assets.",
      },
    ],
  },
  {
    label: "About Us",
    icon: <User className="h-4 w-4" />,
    href: "/about",
  },
];

function AccordionGroup({
  group,
  onClose,
}: {
  group: NavGroup;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (group.href) {
    return (
      <Link
        href={group.href}
        onClick={onClose}
        className="flex items-center gap-3 rounded-xl px-4 py-3 text-foreground font-medium transition-all duration-200 hover:bg-muted/60 group"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted border border-border/50 text-muted-foreground group-hover:text-foreground transition-colors">
          {group.icon}
        </span>
        <span className="text-base">{group.label}</span>
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-foreground font-medium transition-all duration-200 hover:bg-muted/60 group"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted border border-border/50 text-muted-foreground group-hover:text-foreground transition-colors">
            {group.icon}
          </span>
          <span className="text-base">{group.label}</span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mt-1 ml-4 flex flex-col gap-1 border-l border-border/50 pl-4">
          {group.children?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-muted/60"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-background border border-border/50 text-muted-foreground group-hover:text-foreground group-hover:border-foreground/20 transition-colors">
                {item.icon}
              </span>
              <div>
                <div className="text-sm font-medium text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={cn("flex w-full max-w-7xl items-center justify-between gap-4", className)}>
      <Link href="/">
        <Image src="/logos/cmw_transparent.png" alt="logo" width={130} height={130} />
      </Link>

      <Drawer open={open} onOpenChange={setOpen} direction="top">
        <DrawerTrigger asChild>
          <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-background/80 backdrop-blur-sm text-foreground shadow-sm transition-all hover:bg-muted">
            <span className="sr-only">Open menu</span>
            <Menu className="h-4 w-4" />
          </button>
        </DrawerTrigger>

        <DrawerContent className="!rounded-none border-0 bg-background/95 backdrop-blur-xl p-0 shadow-2xl">
          <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>

          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/50 px-6 py-4">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image src="/logos/cmw_transparent.png" alt="logo" width={120} height={120} />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-muted text-muted-foreground transition-all hover:bg-muted/80 hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Nav items */}
          <div className="flex flex-col gap-1 px-4 py-4">
            {navGroups.map((group) => (
              <AccordionGroup
                key={group.label}
                group={group}
                onClose={() => setOpen(false)}
              />
            ))}
          </div>

          {/* Footer divider */}
          <div className="border-t border-border/50 px-6 py-4">
            <p className="text-xs text-center text-muted-foreground">
              © 2026 CheckMyWarranty. All rights reserved.
            </p>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
