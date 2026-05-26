'use client';
import { Files, Shield, Tags, Search, Cloud, Download } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
	{
		title: 'Zero Paper Clutter',
		icon: Files,
		description: 'Digitize your entire physical archive instantly. Snap a photo of any document and toss the paper.',
	},
	{
		title: 'Bank-Grade Encryption',
		icon: Shield,
		description: 'Rest easy knowing your most sensitive receipts and documents are secured with end-to-end encryption.',
	},
	{
		title: 'Instant Categorization',
		icon: Tags,
		description: 'Our AI automatically tags, sorts, and folders your uploads by retailer, category, and date.',
	},
	{
		title: 'Smart Search',
		icon: Search,
		description: 'Find that one receipt from three years ago in seconds using our powerful, AI-driven search engine.',
	},
	{
		title: 'Cross-Device Sync',
		icon: Cloud,
		description: 'Your vault is automatically backed up and synced seamlessly across all your mobile and desktop devices.',
	},
	{
		title: 'Export Anytime',
		icon: Download,
		description: 'Never get locked in. Generate beautiful PDF reports or bulk export your entire vault in one click.',
	},
];

export function VaultFeatures() {
	return (
		<section className="py-24" id="features">
			<div className="mx-auto w-full max-w-6xl space-y-12 px-4 md:px-6">
				<AnimatedContainer className="text-center">
					<h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
						Your Ultimate Digital Archive.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
						Discover the powerful tools that make organizing your digital life effortless.
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
