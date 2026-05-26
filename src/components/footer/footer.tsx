import { FooterBlur } from "@/components/footer/footer-blur";
import { XIcon, LinkedInIcon, GithubIcon } from "@/components/footer/icons";
import Link from "next/link";

const links = [
  {
    title: "CheckMyWarranty",
    links: [
      {
        label: "About Us",
        href: "/about",
        title: "Learn more about CheckMyWarranty",
      },
      {
        label: "Features",
        href: "/#features",
        title: "See our features",
      },
    ],
  },
  {
    title: "Modules",
    links: [
      {
        label: "Warranty Tracking",
        href: "/modules/warranty",
        title: "Explore Warranty Tracking",
      },
      {
        label: "Digital Vault",
        href: "/modules/vault",
        title: "Explore Digital Vault",
      },
      {
        label: "Reminders",
        href: "/modules/reminders",
        title: "Explore Reminders",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
        title: "Read our Terms & Conditions",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        title: "Read our Privacy Policy",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Blog",
        href: "/blog",
        title: "Read our Blog",
      },
      {
        label: "Case Studies",
        href: "/case-study",
        title: "Read our Case Studies",
      },
      {
        label: "Contact Us",
        href: "mailto:hello@checkmywarranty.com",
        title: "Contact Us",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 flex flex-col items-center justify-center overflow-hidden py-12 pt-37 md:py-25 md:pt-37 min-h-[500px]">
      <FooterBlur />

      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 opacity-10">
        <span className="text-[40vw] leading-none font-bold tracking-tighter text-foreground select-none">
          CMW
        </span>
      </div>

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
