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
      className={cn("[&[data-state=open]>svg]:text-foreground text-base lg:text-lg", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-muted-foreground lg:text-base", props.className)} />;
}

export function FAQs() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      <FadeIn className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 uppercase">
          FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Frequently
          <br />
          Asked <span className="text-muted-foreground">Questions</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Get answers to commonly asked questions.
        </p>
        <Button className="w-fit" size="lg" asChild>
          <Link href="mailto:hello@checkmywarranty.com">Contact Us</Link>
        </Button>
      </FadeIn>
      <Accordion type="single" collapsible defaultValue="scanner" className="w-full">
        <AccordionItemFAQs value="scanner">
          <AccordionTriggerFAQs>How does the AI receipt scanner work?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Simply take a photo of your receipt or warranty card. Our AI automatically extracts the purchase date, product name, and warranty length, saving you from manual data entry.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="security">
          <AccordionTriggerFAQs>Is my personal data safe in the digital vault?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Absolutely. We use bank-grade encryption to secure your IDs, property deeds, and personal documents. Plus, your data is synced securely so you can safely access it anywhere.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="offline">
          <AccordionTriggerFAQs>Can I use the app without an internet connection?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Yes! CheckMyWarranty is built with an offline-first design. You can add warranties and view your digital vault completely offline. The app will automatically sync your changes to the cloud once you&apos;re back online.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="reminders">
          <AccordionTriggerFAQs>How do the smart expiry reminders work?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              You can customize timely pre-alerts for any expiring warranty or subscription. We&apos;ll send you a push notification exactly when you need it, ensuring you never miss a renewal date or claim window.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}
