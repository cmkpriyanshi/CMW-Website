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

export function WarrantyFAQs() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      <FadeIn className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 w-fit uppercase">
          Warranty FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Warranty
          <br />
          Tracker <span className="text-muted-foreground">Questions</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Get answers to commonly asked questions about our warranty tracker.
        </p>
        <Button className="w-fit" size="lg" asChild>
          <Link href="mailto:hello@checkmywarranty.com">Contact Us</Link>
        </Button>
      </FadeIn>
      <Accordion type="single" collapsible defaultValue="products" className="w-full">
        <AccordionItemFAQs value="products">
          <AccordionTriggerFAQs>What types of products can I track warranties for?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              You can track warranties for any product appliances, electronics, vehicles, furniture, and more. Our AI automatically handles the details regardless of the item type.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="claims">
          <AccordionTriggerFAQs>How do I claim a warranty using the app?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              While we don't process claims directly, CheckMyWarranty instantly provides you with all the necessary documents, purchase dates, and customer care info so you can confidently file a claim in seconds with the manufacturer.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="resale">
          <AccordionTriggerFAQs>Can I share a warranty with a buyer if I sell the item?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Yes! You can easily export or transfer the digital warranty record and receipt. Providing complete warranty history significantly increases the resale value of your electronics and appliances.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="faded">
          <AccordionTriggerFAQs>What happens if my paper store receipt fades over time?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Fading receipts are exactly why we built CheckMyWarranty! Once you scan your receipt using our app, a high-quality digital copy is permanently stored and backed up in your encrypted vault.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}
