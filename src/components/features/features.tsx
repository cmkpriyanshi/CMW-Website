'use client';
import { Scan, Bell, Lock, Users, Cloud, Send } from 'lucide-react';
import React from 'react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { FadeIn } from '@/components/ui/fade-in';

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

export function Features() {
	return (
		<section className="py-24" id="features">
			<div className="mx-auto w-full max-w-6xl space-y-12 px-4 md:px-6">
				<FadeIn className="text-center">
					<h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
						Explore Our Powerful Features.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
						Everything you need to track warranties, secure documents, and manage important dates.
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

