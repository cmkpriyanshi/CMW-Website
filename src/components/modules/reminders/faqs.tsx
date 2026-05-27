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

export function ReminderFAQs() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      <FadeIn className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 w-fit uppercase">
          Reminders FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Notification
          <br />
          <span className="text-muted-foreground">Questions</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Get answers to commonly asked questions about our smart reminder engine.
        </p>
        <Button className="w-fit" size="lg" asChild>
          <Link href="mailto:hello@checkmywarranty.com">Contact Us</Link>
        </Button>
      </FadeIn>
      <Accordion type="single" collapsible defaultValue="how-it-works" className="w-full">
        <AccordionItemFAQs value="how-it-works">
          <AccordionTriggerFAQs>How do the smart expiry reminders work?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              It's incredibly simple. You choose a custom alert period (such as 30 or 60 days before an expiration date), and our app will automatically send you a timely push notification on your device so you never miss a deadline.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="calendar">
          <AccordionTriggerFAQs>Can I sync these reminders with my personal calendar?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Yes! You can automatically export and sync your expiration dates and deadlines directly to your native Apple, Google, or Outlook calendar for seamless tracking.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="warranties-only">
          <AccordionTriggerFAQs>Are the reminders only for product warranties?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Not at all. While our alerts are perfect for warranties, you can set custom reminders for subscription renewals, passport expirations, bill payments, and even store return windows.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="missed">
          <AccordionTriggerFAQs>What happens if I accidentally dismiss a notification?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Don't worry. The app maintains a persistent log of your upcoming and missed deadlines right on your main dashboard. You can also configure multi-channel alerts (like email or SMS) as a reliable backup.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}
