'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const services = [
	{
		title: 'Pressure Washing Web Design in Indianapolis',
		description: 'I build high-converting websites for pressure washing companies in the Indianapolis area to help them attract more customers and generate leads.',
		image: '/Group 10.png',
    	link: '/services/pressure-washing-web-design-indianapolis',
		buttonText: 'See My Pressure Washing Web Design',
		// tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
	},
	{
		title: 'Roofing Web Design in Indianapolis',
		description: 'I build high-converting websites for roofing companies in the Indianapolis area to help them attract more customers and generate leads.',
		image: '/summit-shield.png',
    	link: '/services/roofing-web-design-indianapolis',
		buttonText: 'See My Roofing Web Design',
		// tags: ['Next.js', 'Socket.io', 'Prisma', 'TailwindCSS'],
	},
];

export default function ServiceList() {
	return (
		<section className="container max-w-[1160px] mx-auto py-20">
			<div className="mx-auto">
				

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{services.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-white rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200 shadow-lg"
						>
							<div className="aspect-video relative overflow-hidden">
								<img src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
								{/* <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent transition-transform duration-300 group-hover:scale-105" /> */}
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
                
                  <Button asChild className="mt-4" variant='outline'>
                    <Link href={`${project.link}`}>
                      {project.buttonText}
                      <ChevronRight className='ml-2' />
                    </Link>
                  </Button>
                
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}