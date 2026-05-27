/* eslint-disable @typescript-eslint/no-unused-vars */
import { FooterBlur } from "@/components/footer/footer-blur";
import { XIcon, LinkedInIcon, GithubIcon } from "@/components/footer/icons";
import Link from "next/link";

const links = [
  {
    title: "About CMW",
    links: [
      {
        label: "Our Story",
        href: "/about",
        title: "Learn about CheckMyWarranty",
      },
      {
        label: "App Features",
        href: "/#features",
        title: "Discover our AI receipt scanner and vault features",
      },
    ],
  },
  {
    title: "Core Features",
    links: [
      {
        label: "Warranty Tracker",
        href: "/modules/warranty",
        title: "Automate your product warranty tracking",
      },
      {
        label: "Secure Digital Vault",
        href: "/modules/vault",
        title: "Securely store your personal documents and IDs",
      },
      {
        label: "Expiry Reminders",
        href: "/modules/reminders",
        title: "Set smart reminders for renewals and expiring warranties",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Digital Life Blog",
        href: "/blog",
        title: "Tips on personal document security and warranty tracking",
      },
      {
        label: "Customer Stories",
        href: "/case-study",
        title: "Read how others organize their digital life",
      },
    ],
  },
  {
    title: "Legal & Support",
    links: [
      {
        label: "Contact Support",
        href: "mailto:hello@checkmywarranty.com",
        title: "Get in touch with the CheckMyWarranty team",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        title: "How we protect your personal data",
      },
      {
        label: "Terms of Service",
        href: "/terms-and-conditions",
        title: "CheckMyWarranty Terms of Service",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 flex flex-col items-center justify-center overflow-hidden py-12 pt-37 md:py-25 md:pt-37 min-h-[500px]">
      <FooterBlur />

      {/* Footer Links */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 tracking-tight md:grid-cols-4">
        {links.map((link) => (
          <div key={link.title} className="mb-10 text-center">
            <h3 className="text-muted-foreground mb-8">{link.title}</h3>
            <ul className="flex flex-col items-center gap-8">
              {link.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    title={link.title}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
