'use client';
import { Scan, Bell, Lock, Users, Cloud, Send } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
	{
		title: 'AI Receipt Scanning',
		icon: Scan,
		description: 'Automatically extract product details, purchase dates, and warranty length from any receipt photo.',
	},
	{
		title: 'Smart Expiry Alerts',
		icon: Bell,
		description: 'Receive intelligent notifications before your warranties expire, giving you time to act or extend.',
	},
	{
		title: 'Secure Digital Vault',
		icon: Lock,
		description: 'Store all your important receipts and documents with bank-grade encryption in one secure place.',
	},
	{
		title: 'Family Sharing',
		icon: Users,
		description: 'Share access to your warranty vault seamlessly with household members for joint asset management.',
	},
	{
		title: 'Global Cloud Sync',
		icon: Cloud,
		description: 'Access your receipts and warranty data securely from any device, anywhere in the world.',
	},
	{
		title: 'Instant Claims',
		icon: Send,
		description: 'Initiate warranty claims directly with manufacturers through our streamlined built-in process.',
	},
];

export function WarrantyFeatures() {
	return (
		<section className="py-24" id="features">
			<div className="mx-auto w-full max-w-6xl space-y-12 px-4 md:px-6">
				<AnimatedContainer className="text-center">
					<h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
						Explore Our Powerful Features.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
						Everything you need to track warranties, secure documents, and manage important dates.
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
