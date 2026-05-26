'use client';
import { Files, Shield, Tags, Search, Cloud, Download } from 'lucide-react';
import React from 'react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { FadeIn } from '@/components/ui/fade-in';

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
				<FadeIn className="text-center">
					<h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
						Your Ultimate Digital Archive.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
						Discover the powerful tools that make organizing your digital life effortless.
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
