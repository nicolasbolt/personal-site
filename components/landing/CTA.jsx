// 'use client';
// import Link from 'next/link';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { Check } from 'lucide-react';
// // import { useSession } from 'next-auth/react';

// const pricingList = [
//   // {
//   //   title: 'Custom Marketing Pages',
//   //   recommended: false,
//   //   duration: 'month',
//   //   price: 29,
//   //   paymentLink:
//   //     process.env.NODE_ENV === 'development'
//   //     // stripe test price link
//   //       ? '#'
//   //     // stripe live price link
//   //       : '#',
//   //   paymentPriceId:
//   //     process.env.NODE_ENV === 'development'
//   //     // stripe test price id
//   //       ? ''
//   //     // stripe live price id
//   //       : '',
//   //   description: 'Improve your conversion rate and get more leads to turn visitors into customers!',
//   //   benefitList: [
//   //     'A proven structure that converts',
//   //     'Good website copy to convince your audience',
//   //     'SEO optimization',
//   //   ],
//   // },
//   // {
//   //   title: 'Custom Sofware as a Service (SaaS)',
//   //   recommended: false,
//   //   duration: 'year',
//   //   price: 200,
//   //   paymentLink:
//   //     process.env.NODE_ENV === 'development'
//   //     // stripe test price link
//   //       ? '#'
//   //     // stripe live price link
//   //       : '#',
//   //   paymentPriceId:
//   //     process.env.NODE_ENV === 'development'
//   //     // stripe test price id
//   //       ? ''
//   //     // stripe live price id
//   //       : '',
//   //   description: 'I can build you a custom SaaS solution for either your internal team or to sell to customers.',
//   //   benefitList: [
//   //     'Automate repetitive tasks',
//   //     'Team collaboration',
//   //     'User management',
//   //   ],
//   // },
//   {
//     title: 'Work With Me',
//     recommended: false,
//     duration: 'year',
//     price: 200,
//     paymentLink:
//       process.env.NODE_ENV === 'development'
//       // stripe test price link
//         ? '#'
//       // stripe live price link
//         : '#',
//     paymentPriceId:
//       process.env.NODE_ENV === 'development'
//       // stripe test price id
//         ? ''
//       // stripe live price id
//         : '',
//     description: 'Tell me more about your business to get the process started.',
//     benefitList: [
//       'A Site That Looks Great and Gets Leads',
//       'Done in Weeks, Not Months',
//       'Easy Updates & Complete Ownership',
//     ],
//   },
// ];

// const Pricing = () => {
//   // const { data: session } = useSession();
//   return (
//     <div className='bg-neutral-50 px-3 md:px-0'>
//       <section id='pricing' className='container py-24 sm:py-32 mx-auto'>
//         <h2 className='text-3xl md:text-4xl font-bold text-center'>
//           Let's Get
//           <span className='bg-clip-text'> Started!</span>
//         </h2>
//         <h3 className='text-xl text-center text-muted-foreground pt-4 pb-8'>
//           {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
//         reiciendis. */}
//         </h3>
//         {/* <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto md:w-11/12'> */}
//         <div className='gap-8 mx-auto lg:w-4/12 md:w-7/12 w-full'>
//           {pricingList.map((pricing) => (
//             <Card
//               key={pricing.title}
//               // className={
//               //   pricing.recommended
//               //     ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10'
//               //     : ''
//               // }
//               className='border-2 border-customTan'
//             >
//               <CardHeader className='h-fit-content'>
//                 <CardTitle className='text-xl flex item-center justify-between'>
//                   {pricing.title}
//                   {pricing.recommended ? (
//                     <Badge variant='secondary' className='text-sm text-primary'>
//                       Recommended
//                     </Badge>
//                   ) : null}
//                 </CardTitle>
//                 {/* <div>
//                   <span className='text-3xl font-bold'>${pricing.price}</span>
//                   <span className='text-muted-foreground'>
//                     {' '}
//                     /{pricing.duration}
//                   </span>
//                 </div> */}

//                 <CardDescription>{pricing.description}</CardDescription>
//               </CardHeader>

//               <CardContent>
//                 <Button asChild className='w-full cursor-pointer'>
//                   <Link target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLScO0hCwTeIMUY7MlAf3K74_UZ7DCI8lqHNy_syXOAGACE4zbg/viewform?usp=dialog'>Get Started!</Link>
//                 </Button>
//               </CardContent>

//               <hr className='w-4/5 m-auto mb-4' />

//               <CardFooter className='flex'>
//                 <div className='space-y-4'>
//                   {pricing.benefitList.map((benefit) => (
//                     <span key={benefit} className='flex'>
//                       <Check className='text-customBrown' />{' '}
//                       <h3 className='ml-2'>{benefit}</h3>
//                     </span>
//                   ))}
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Pricing;

'use client';

import { motion } from 'framer-motion';

export default function CTA() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="relative p-12 rounded-3xl overflow-hidden backdrop-blur-xl border border-gray-200 bg-white shadow-lg"
				>
					<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
					<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
					<div className="relative z-10">
						<motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
							<h2 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
								Let&apos;s Connect
							</h2>
							<p className="text-gray-600 text-center mb-4">Ready to collaborate or have a project in mind? Let&apos;s make something amazing together.</p>
							<div className="flex items-center justify-center gap-2 text-gray-600 mb-8">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<span>Indianapolis, IN</span>
							</div>
						</motion.div>
						<div className="flex flex-col items-center gap-6 mb-8">
							<motion.a
								href="mailto:nick@nickboltdesign.com"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-white"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								Get in Touch
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

