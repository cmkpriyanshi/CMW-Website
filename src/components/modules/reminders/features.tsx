'use client';
import { BellRing, Smartphone, ClockAlert, Moon, Zap, CalendarRange } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
	{
		title: 'Custom Notifications',
		icon: BellRing,
		description: 'Set custom warning periods for your warranties. Get notified 30, 60, or 90 days before coverage ends.',
	},
	{
		title: 'Multi-Channel Alerts',
		icon: Smartphone,
		description: 'Receive expiration alerts where you want them: via push notification, email, or direct SMS.',
	},
	{
		title: 'Escalating Urgency',
		icon: ClockAlert,
		description: 'Alerts become increasingly visible as deadlines approach, ensuring you never miss a critical window.',
	},
	{
		title: 'Automated Snooze',
		icon: Moon,
		description: 'Busy right now? Snooze an alert with one tap and have it return when you have time to file a claim.',
	},
	{
		title: 'Actionable Prompts',
		icon: Zap,
		description: 'Every reminder includes a direct link to the stored receipt and manufacturer contact details.',
	},
	{
		title: 'Calendar Sync',
		icon: CalendarRange,
		description: 'Automatically push your warranty expiration dates directly to your Apple, Google, or Outlook calendar.',
	},
];

export function ReminderFeatures() {
	return (
		<section className="py-24" id="features">
			<div className="mx-auto w-full max-w-6xl space-y-12 px-4 md:px-6">
				<AnimatedContainer className="text-center">
					<h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
						Smarter Notifications.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
						Take control of your timelines with our advanced reminder and notification engine.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-l border-t border-dashed border-border"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} className="border-r border-b border-dashed border-border" />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 90%", "start 40%"]
	});

	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
	const y = useTransform(scrollYProgress, [0, 1], [-8, 0]);
	const filter = useTransform(scrollYProgress, [0, 1], ["blur(4px)", "blur(0px)"]);

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			ref={ref}
			style={{ opacity, y, filter }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
