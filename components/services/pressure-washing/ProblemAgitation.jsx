
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
	{
		title: 'Bad First Impressions Are Hurting Your Reputation',
		description: 'Visitors form opinions in seconds. If your site looks outdated, slow, or unprofessional, people assume your services are too. A poor online presence damages trust and kills opportunities before you even get a chance to talk to them.',
		image: '/confused.svg',
		// tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
	},
	// {
	// 	title: 'You’re Invisible to Local Searchers',
	// 	description: 'A roofing company demo website to showcase how to increase conversions and close more sales through effective design and user experience.',
	// 	image: '/summit-shield.avif',
	// 	// tags: ['Next.js', 'Socket.io', 'Prisma', 'TailwindCSS'],
	// },
    {
		title: 'Your Website Isn’t Built to Convert Visitors into Customers',
		description: 'Most pressure washing sites are just digital brochures, they look “fine” but don\'t push visitors to take action. If your site doesn\'t have a strong call to action, clear trust signals, and a mobile-friendly layout, people leave and you lose the lead.',
		image: '/undraw_professional-woman-avatar.svg',
		// tags: ['Next.js', 'Socket.io', 'Prisma', 'TailwindCSS'],
	},
];

export default function ProblemAgitation() {
	return (
		<section className="py-24 container max-w-[1160px] mx-auto">
			<div className="mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-gray-900"
				>
					Your Website Might Be Costing You Customers Without You Even Knowing It
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-white rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200 shadow-lg"
						>
							<div className="aspect-video relative overflow-hidden bg-slate-50 flex items-center justify-center p-4">
								<img 
									src={project.image} 
									alt={project.title} 
									className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
									style={{ maxHeight: "180px" }} 
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
								<p className="text-gray-600 mb-4">{project.description}</p>
								{/* <div className="flex flex-wrap gap-2">
									{project.tags.map((tag, i) => (
										<span key={i} className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
											{tag}
										</span>
									))}
								</div> */}
                
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
