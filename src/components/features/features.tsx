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
		description: "Get timely pre-alerts before your warranties expire. We'll send you a heads-up exactly when you need it, so you never miss out.",
	},
	{
		title: 'Secure Digital Vault',
		icon: Lock,
		description: 'Safely store your personal IDs, property deeds, and insurance papers in a secure, encrypted digital folder.',
	},
	{
		title: 'Offline-First Access',
		icon: WifiOff,
		description: "No internet? No problem. Add warranties and access your vault offline; we'll sync everything automatically once you're back online.",
	},
	{
		title: 'Seamless Cloud Sync',
		icon: Cloud,
		description: 'Your data is safely backed up to the cloud. Log in on any device and access your entire warranty portfolio instantly.',
	},
	{
		title: 'Device Calendar Sync',
		icon: Calendar,
		description: "Easily sync your warranty expirations and renewal reminders directly to your phone's native calendar for a unified view.",
	},
	{
		title: 'Insightful Analytics',
		icon: PieChart,
		description: "Visualize your total asset value by category and see a snapshot of exactly which warranties are expiring soon.",
	},
	{
		title: 'Location Tracking',
		icon: MapPin,
		description: "Log exactly where your physical items are stored (e.g., 'Office' or 'Garage') so you never have to hunt for a warranty card again.",
	},
	{
		title: 'Multi-Page PDF Scanner',
		icon: FileText,
		description: "Need to store a long contract or manual? Use our built-in scanner to capture and merge multiple pages into a single PDF.",
	},
];

export function Features() {
	return (
		<section className="py-24" id="features">
			<div className="mx-auto w-full max-w-6xl space-y-12 px-4 md:px-6">
				<FadeIn className="text-center">
					<h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl">
						Built to Simplify Your Digital Life.
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
						Discover how CheckMyWarranty uses smart AI and offline access to take the hassle out of managing your warranties and personal documents.
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

