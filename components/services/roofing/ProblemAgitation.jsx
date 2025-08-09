'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
	{
		title: 'You\'re Paying for Traffic That Doesn’t Convert',
		description: 'Whether it’s SEO, Google Ads, or referrals you\'re sending people to a site that isn’t built to get them to act. No clear calls-to-action? No fast loading? No mobile layout? That traffic is wasted.',
		image: '/access-denied.svg',
		// tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
	},
	// {
	// 	title: 'You’re Invisible to Local Searchers',
	// 	description: 'A roofing company demo website to showcase how to increase conversions and close more sales through effective design and user experience.',
	// 	image: '/summit-shield.avif',
	// 	// tags: ['Next.js', 'Socket.io', 'Prisma', 'TailwindCSS'],
	// },
    {
		title: 'Slow, Cluttered Sites Kill Urgency',
		description: 'People searching for roof repairs or replacements want quick answers. If your site is slow, cluttered, or unclear, they’ll bounce in seconds and book with the next roofer who makes it easy.',
		image: '/undraw_questions.svg',
		// tags: ['Next.js', 'Socket.io', 'Prisma', 'TailwindCSS'],
	},
];

export default function ProblemAgitation() {
	return (
		<section className="py-24 container max-w-[1160px] mx-auto">
			<div className="mx-auto w-full w-11/12">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-gray-900"
				>
					Losing Leads? Your Website Might Be the Problem.
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
