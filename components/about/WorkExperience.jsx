'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
	{
		title: 'State Farm',
		description: 'I have been working at State Farm for about 2 1/2 years now. I have built Enterprise software using Python and Javascript.',
		image: '/state_farm_logo.avif',
		// tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
	},
	{
		title: 'myhELO',
		description: 'I worked at myhELO for about 2 1/2 years. I built full-stack software solutions and I designed their website to improve marketing efforts.',
		image: '/myhelo_logo.avif',
		// tags: ['Next.js', 'Socket.io', 'Prisma', 'TailwindCSS'],
	},
];

export default function WorkExperience() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-gray-900"
				>
					My Previous Work Experience
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
							<div className="h-48 flex items-center justify-center p-6 bg-slate-50">
								<div className="w-full max-w-[220px] h-[120px] flex items-center justify-center">
									<img
										src={project.image}
										alt={`${project.title} logo`}
										className="max-w-full max-h-full object-contain rounded-full shadow-md transition-transform duration-300 group-hover:scale-105"
										loading="lazy"
									/>
								</div>
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