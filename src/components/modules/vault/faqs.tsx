import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "border-b border-border py-2 last:border-0",
        props.className,
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("[&[data-state=open]>svg]:text-foreground text-base lg:text-lg text-left", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-muted-foreground lg:text-base", props.className)} />;
}

export function VaultFAQs() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      <FadeIn className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 w-fit uppercase">
          Vault FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Digital Vault
          <br />
          <span className="text-muted-foreground">Questions</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Get answers to commonly asked questions about our secure digital archive.
        </p>
        <Button className="w-fit" size="lg" asChild>
          <Link href="mailto:hello@checkmywarranty.com">Contact Us</Link>
        </Button>
      </FadeIn>
      <Accordion type="single" collapsible defaultValue="security" className="w-full">
        <AccordionItemFAQs value="security">
          <AccordionTriggerFAQs>Is my personal data safe in the digital vault?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Absolutely. We use bank-grade end-to-end encryption to secure your personal IDs, property deeds, and important documents. Only you have the keys to access your data.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="offline">
          <AccordionTriggerFAQs>Can I access my vault documents if I don&apos;t have internet?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Yes! CheckMyWarranty is built with an offline-first design. You can view your securely cached documents, such as insurance cards or warranties, anywherecompletely offline.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="limits">
          <AccordionTriggerFAQs>Is there a limit to how many receipts I can upload?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              No, you can upload unlimited receipts and multi-page documents. Our intelligent digital vault will automatically categorize and tag everything for you so you never lose track of a file.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="sharing">
          <AccordionTriggerFAQs>How do I share a document with someone else?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              You can easily generate a secure, temporary read-only link or export the file directly as a PDF. This lets you share documents with your family or accountant without giving them full access to your vault.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}
