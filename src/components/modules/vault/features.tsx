'use client';
import { Files, Shield, Tags, Search, Cloud, Download, WifiOff, FileText, Share2 } from 'lucide-react';
import React from 'react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { FadeIn } from '@/components/ui/fade-in';

const features = [
	{
		title: 'Zero Paper Clutter',
		icon: Files,
		description: 'Digitize your entire physical archive instantly. Snap a photo of any receipt or document and safely toss the paper.',
	},
	{
		title: 'Bank-Grade Encryption',
		icon: Shield,
		description: 'Rest easy knowing your most sensitive receipts, IDs, and property deeds are secured with industry-leading encryption.',
	},
	{
		title: 'Smart Custom Tagging',
		icon: Tags,
		description: 'Go beyond simple folders. Apply custom tags to your documents so you can cross-reference items by brand, location, or year.',
	},
	{
		title: 'Full-Text AI Search',
		icon: Search,
		description: 'Stop hunting for lost paperwork. Instantly locate any receipt from years ago by simply searching for the retailer or product name.',
	},
	{
		title: 'Seamless Cloud Backup',
		icon: Cloud,
		description: 'Your personal vault is automatically backed up in real-time, ensuring you never lose a document even if you lose your phone.',
	},
	{
		title: 'Universal Exporting',
		icon: Download,
		description: 'Never get locked in. Generate beautiful PDF reports for your accountant or bulk export your entire vault in one click.',
	},
	{
		title: 'Offline Accessibility',
		icon: WifiOff,
		description: 'Need your insurance card in a dead zone? Access your encrypted digital vault anytime, anywhere, with complete offline support.',
	},
	{
		title: 'Multi-Page Scanner',
		icon: FileText,
		description: 'Easily scan and merge multi-page user manuals, contracts, or tax documents into a single, perfectly cropped PDF file.',
	},
	{
		title: 'Secure File Sharing',
		icon: Share2,
		description: 'Share a secure link of a receipt or warranty with a family member or buyer, without giving them full access to your vault.',
	},
];

export function VaultFeatures() {
	return (
		<section className="py-24" id="features">
			<div className="mx-auto w-full max-w-6xl space-y-12 px-4 md:px-6">
				<FadeIn className="text-center">
					<h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
						Everything You Need for a Clutter-Free Life.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
						Discover the powerful tools that make securing your personal documents and organizing your digital life completely effortless.
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
