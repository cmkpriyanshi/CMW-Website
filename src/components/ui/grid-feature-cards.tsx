import { cn } from '@/lib/utils';
import React from 'react';
import ShapeGrid from '@/components/ShapeGrid';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardPorps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardPorps) {
	return (
		<div className={cn('relative overflow-hidden p-6 group', className)} {...props}>
			<div className="absolute top-0 left-0 h-full w-full [mask-image:linear-gradient(white,transparent)]">
				<div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top_right,white,transparent)] opacity-100">
					<ShapeGrid
						direction="diagonal"
						speed={0}
						squareSize={20}
						borderColor="rgba(150, 150, 150, 0.25)"
						hoverFillColor="rgba(150, 150, 150, 0.15)"
						hoverTrailAmount={4}
						className="absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>
			<feature.icon className="text-foreground/75 size-6 relative z-20" strokeWidth={1} aria-hidden />
			<h3 className="mt-10 text-sm md:text-base font-semibold relative z-20">{feature.title}</h3>
			<p className="text-muted-foreground relative z-20 mt-2 text-xs font-light leading-relaxed">{feature.description}</p>
		</div>
	);
}
