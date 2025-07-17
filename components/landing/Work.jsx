// import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '../ui/button';
// import { ChevronRight } from 'lucide-react';
// import Link from 'next/link';
// import { link } from 'fs';

// const featureList = [
//   {
//     title: 'Da Deep Search',
//     description: 'A landing page redesign built for a client to better showcase the product, connect with their ideal customers, and drive conversions.',
//     image: '/da-deep-search.png',
//     classNames: 'mt-24',
//     link: '/da-deep-search'
//   },
//   {
//     title: 'StartAMA',
//     description: 'A landing page for StartAMA to enhance user engagement and streamline the onboarding process.',
//     image: '/startama.png',
//     classNames: 'mt-24',
//     link: '/startama'
//   },
//   // {
//   //   title: 'CleanLine Pressure Washing',
//   //   description: 'A landing page for CleanLine Pressure Washing to showcase their services and attract new customers.',
//   //   image: '/undraw_design-components.svg',
//   //   classNames: 'mt-24',
//   //   link: '/cleanline-pressure-washing'
//   // },
  
// ];

// const Work = () => {
//   return (
//     <section id='features' className='bg-neutral-50'>
//       <div className='container py-24 sm:py-32 mx-auto'>
//         <div className='w-11/12 md:w-full mx-auto flex flex-col gap-16'>
//           {featureList.map(({ title, description, image, classNames, link }, idx) => (
//             <div
//               key={title}
//               className={`grid md:grid-cols-2 gap-8 items-center ${classNames}`}
//             >
//               <CardHeader className="space-y-1 flex flex-col items-center md:items-start gap-4 col-span-1">
//                 <CardTitle className="text-3xl">{title}</CardTitle>
//                 <CardDescription className="text-md mt-2 text-center md:text-left sm:w-8/12">
//                   <div className="mb-4">
//                     {description}
//                   </div>
//                   <Link asChild href={link}>
//                     <Button variant="outline" className="mt-4">See the Design <ChevronRight /></Button>
//                   </Link>
//                 </CardDescription>
//               </CardHeader>
//               <div className="flex justify-center col-span-1">
//                 <img src={image} alt={`${title} icon`} className="rounded shadow-md" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Work;

'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
	{
		title: 'StartAMA',
		description: 'A modern dashboard with dark mode, real-time charts, and responsive design',
		image: '/startama.png',
    link: '/startama'
		// tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
	},
	{
		title: 'Da Deep Search',
		description: 'Full-featured social platform with real-time messaging and notifications',
		image: '/da-deep-search.png',
    link: '/da-deep-search'
		// tags: ['Next.js', 'Socket.io', 'Prisma', 'TailwindCSS'],
	},
];

export default function Work() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center text-gray-900"
				>
					Featured Projects
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
							<div className="aspect-video relative overflow-hidden">
								<img src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent transition-transform duration-300 group-hover:scale-105" />
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
                      View Project
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