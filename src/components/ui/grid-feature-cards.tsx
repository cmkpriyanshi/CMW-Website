import { cn } from '@/lib/utils';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardPorps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

type HoveredSquare = { col: number; row: number; id: number };

export function FeatureCard({ feature, className, ...props }: FeatureCardPorps) {
	const p = React.useMemo(() => genRandomPattern(), []);
	const [hoveredSquares, setHoveredSquares] = React.useState<HoveredSquare[]>([]);
	const hoveredRef = React.useRef<[number, number] | null>(null);
	const counterRef = React.useRef(0);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		
		const col = Math.floor((x + 12) / 20);
		const row = Math.floor((y - 4) / 20);
		
		if (!hoveredRef.current || hoveredRef.current[0] !== col || hoveredRef.current[1] !== row) {
			hoveredRef.current = [col, row];
			counterRef.current += 1;
			setHoveredSquares((prev) => [...prev, { col, row, id: counterRef.current }].slice(-5));
		}
	};

	const handleMouseLeave = () => {
		hoveredRef.current = null;
		setHoveredSquares([]);
	};

	return (
		<div className={cn('relative overflow-hidden p-6 group', className)} {...props}>
			<div 
				className="absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]"
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
			>
				<div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={p}
						hoveredSquares={hoveredSquares}
						className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>
			<feature.icon className="text-foreground/75 size-6 relative z-20" strokeWidth={1} aria-hidden />
			<h3 className="mt-10 text-sm md:text-base font-semibold relative z-20">{feature.title}</h3>
			<p className="text-muted-foreground relative z-20 mt-2 text-xs font-light leading-relaxed">{feature.description}</p>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	hoveredSquares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][], hoveredSquares?: HoveredSquare[] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([sqX, sqY], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={sqX * width} y={sqY * height} />
					))}
				</svg>
			)}
			{hoveredSquares && (
				<svg x={x} y={y} className="overflow-visible">
					<AnimatePresence>
						{hoveredSquares.map((sq) => (
							<motion.rect
								key={sq.id}
								initial={{ opacity: 0.8 }}
								animate={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5, ease: "easeOut" }}
								strokeWidth="0"
								width={width + 1}
								height={height + 1}
								x={sq.col * width}
								y={sq.row * height}
								className="fill-foreground/20"
							/>
						))}
					</AnimatePresence>
				</svg>
			)}
		</svg>
	);
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
		Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
	]);
}
