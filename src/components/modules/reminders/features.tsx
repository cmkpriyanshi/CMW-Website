'use client';
import { BellRing, Smartphone, ClockAlert, Moon, Zap, CalendarRange, Repeat, Globe, Layers } from 'lucide-react';
import React from 'react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { FadeIn } from '@/components/ui/fade-in';

const features = [
	{
		title: 'Custom Notification Schedules',
		icon: BellRing,
		description: 'Set personalized warning periods for any deadline. Get notified exactly 30, 60, or 90 days before an expiration date.',
	},
	{
		title: 'Multi-Channel Alerts',
		icon: Smartphone,
		description: 'Receive critical expiration alerts wherever you prefer: via app push notifications, email, or direct SMS text messages.',
	},
	{
		title: 'Escalating Urgency',
		icon: ClockAlert,
		description: 'Smart alerts become increasingly persistent as deadlines approach, ensuring you never miss a crucial date.',
	},
	{
		title: 'Automated Snooze',
		icon: Moon,
		description: 'Busy right now? Snooze an alert with a single tap and have it return when you actually have time to deal with it.',
	},
	{
		title: 'Actionable Alerts',
		icon: Zap,
		description: 'Every reminder includes direct links to any attached documents or files, so you have all the context you need when it triggers.',
	},
	{
		title: 'Native Calendar Sync',
		icon: CalendarRange,
		description: 'Automatically push your upcoming deadlines and expiration dates directly to your Apple, Google, or Outlook calendar.',
	},
	{
		title: 'Smart Recurring Alerts',
		icon: Repeat,
		description: 'Set up repeating notifications for monthly bills, annual software subscriptions, or quarterly maintenance tasks effortlessly.',
	},
	{
		title: 'Timezone Aware',
		icon: Globe,
		description: 'Traveling? Our notification engine automatically adjusts to your current timezone so you get alerts exactly when you expect them.',
	},
	{
		title: 'Grouped Notifications',
		icon: Layers,
		description: 'Prevent notification fatigue. Multiple alerts occurring on the same day are cleanly bundled into a single, organized digest.',
	},
];

export function ReminderFeatures() {
	return (
		<section className="py-24" id="features">
			<div className="mx-auto w-full max-w-6xl space-y-12 px-4 md:px-6">
				<FadeIn className="text-center">
					<h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
						Smarter Notifications, Zero Missed Deadlines.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
						Take complete control of your timelines with our advanced reminder engine. Track expirations, renewals, and deadlines effortlessly.
					</p>
				</FadeIn>

				<FadeIn
					delay={0.4}
					className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-l border-t border-dashed border-border"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} className="border-r border-b border-dashed border-border" />
					))}
				</FadeIn>
			</div>
		</section>
	);
}
