'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
	{
		title: 'Mobile-Optimized, Fast, and Built to Rank',
		description: 'Your landing page will look great on phones, load fast, and follow best practices for local SEO. That means more visibility and more calls.',
		image: '/undraw_search.svg',
		// tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
	},
	// {
	// 	title: 'You’re Invisible to Local Searchers',
	// 	description: 'A roofing company demo website to showcase how to increase conversions and close more sales through effective design and user experience.',
	// 	image: '/summit-shield.avif',
	// 	// tags: ['Next.js', 'Socket.io', 'Prisma', 'TailwindCSS'],
	// },
    {
		title: 'Conversion-Focused Landing Pages That Book You More Jobs',
		description: 'We design pages that focus on what homeowners care about: trust, speed, and clear action. Every section is built to guide visitors toward booking a quote or calling you now.',
		image: '/undraw_bull-market.svg',
		// tags: ['Next.js', 'Socket.io', 'Prisma', 'TailwindCSS'],
	},
];

export default function Solution() {
	return (
		<section className="py-24 container max-w-[1160px] mx-auto">
			<div className="mx-auto sm:w-full w-11/12">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-gray-900"
				>
					Custom Websites That Turn Website Visitors into Roofing Leads
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
