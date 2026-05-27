'use client';
import { Scan, Bell, Lock, WifiOff, Cloud, Calendar, PieChart, MapPin, FileText } from 'lucide-react';
import React from 'react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { FadeIn } from '@/components/ui/fade-in';

const features = [
	{
		title: 'AI Receipt Scanning',
		icon: Scan,
		description: 'Let our AI instantly extract product details, purchase dates, and warranty lengths from a simple photo of your receipt.',
	},
	{
		title: 'Smart Expiry Alerts',
		icon: Bell,
		description: "Get timely pre-alerts before your warranties expire. We'll send you a heads-up exactly when you need it.",
	},
	{
		title: 'Centralized Warranty Vault',
		icon: Lock,
		description: 'Safely store all your product warranties, user manuals, and purchase receipts in a single secure, encrypted folder.',
	},
	{
		title: 'Offline-First Access',
		icon: WifiOff,
		description: "No internet? No problem. Add and view your warranties offline; we'll sync everything automatically once you're back online.",
	},
	{
		title: 'Seamless Cloud Sync',
		icon: Cloud,
		description: 'Your warranty data is safely backed up to the cloud. Log in on any device and access your entire portfolio instantly.',
	},
	{
		title: 'Device Calendar Sync',
		icon: Calendar,
		description: "Easily sync your warranty expirations and renewal reminders directly to your phone's native calendar.",
	},
	{
		title: 'Warranty Analytics',
		icon: PieChart,
		description: "Visualize the total value of your protected assets and quickly identify which warranties are expiring soon.",
	},
	{
		title: 'Location & Placement Tags',
		icon: MapPin,
		description: "Log exactly where your physical products are stored (e.g., 'Garage') so you never have to hunt for an appliance.",
	},
	{
		title: 'Manuals & PDF Scanner',
		icon: FileText,
		description: "Need to store a long contract or manual? Use our built-in scanner to capture and merge multiple pages into a single PDF.",
	},
];

export function WarrantyFeatures() {
	return (
		<section className="py-24" id="features">
			<div className="mx-auto w-full max-w-6xl space-y-12 px-4 md:px-6">
				<FadeIn className="text-center">
					<h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
						Everything You Need for Total Peace of Mind.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
						Discover how CheckMyWarranty's powerful features take the hassle out of tracking product warranties, organizing receipts, and making claims.
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

