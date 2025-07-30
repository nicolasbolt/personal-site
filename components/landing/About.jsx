// import { buttonVariants } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { Twitter, Linkedin } from 'lucide-react';

// const teamList = [
//   {
//     imageUrl:
//       'https://res.cloudinary.com/douwvycai/image/upload/f_auto,q_auto/q0nosbkix2z9xfkqwajc',
//     name: 'Nick Bolt',
//     socialNetworks: [
//       {
//         name: 'Linkedin',
//         url: 'https://www.linkedin.com/in/nicolas-bolt-59a523131/',
//       },
//       // {
//       //   name: 'Twitter',
//       //   url: 'https://x.com/_nbolt',
//       // },
//     ],
//     content: [
//         `I’ve been helping businesses fix tech headaches and build better websites for over 5 years.`,
//         `Most business owners are juggling everything: sales, operations, customers. You don’t have time to deal with a slow, outdated site.`,
//         `So I take the website off your plate. Fast, mobile-friendly, and built to bring in more calls and quote requests.`,
//         `No templates. No learning curves. Just tell me what you do, and I’ll build a site that shows it clearly, professionally, and earns trust.`,
//         `Let me handle your website so you can focus on running your business.`,
//       ],
//   },
// ];

// const About = () => {
//   const socialIcon = (iconName) => {
//     switch (iconName) {
//       case 'Linkedin':
//         return <Linkedin size='20' />;

//       //   case 'Twitter':
//       //     return <Twitter size='20' />;
//     }
//   };

//   return (
//     <div className='md:px-0 px-3'>
//     <section id='team' className='container py-24 sm:py-32 mx-auto'>
//       <h2 className='text-3xl md:text-4xl font-bold mx-auto text-center'>
//         <span className='bg-clip-text'></span>
//         More About Me!{/* Crew */}
//       </h2>

//       <p className='mt-4 mb-10 text-xl text-muted-foreground'>
//         {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
//         dolor pariatur sit! */}
//       </p>

//       <div className='lg:w-5/12 md:w-7/12 w-full mx-auto gap-8 gap-y-10 pt-10'>
//         {teamList.map(
//           ({ imageUrl, name, socialNetworks, content }) => (
//             <Card
//               key={name}
//               className='bg-muted/20 relative mt-8 flex flex-col justify-center items-center border-2 border-customTan'
//             >
//               <CardHeader className='mt-8 flex justify-center items-center pb-2'>
//                 <img
//                   src={imageUrl}
//                   alt={`${name}`}
//                   className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover border-2 border-customTan shadow-lg'
//                 />
//                 <CardTitle className='text-center pb-8'>{name}</CardTitle>
//               </CardHeader>

//               <CardContent className='text-center pb-2 sm:w-8/12 w-full'>
//                 {content.map((paragraph, index) => (
//                   <p key={index} className='mb-7'>
//                     {paragraph}
//                   </p>
//                 ))}
//               </CardContent>

//               <CardFooter>
//                 {socialNetworks.map(({ name, url }) => (
//                   <div key={name}>
//                     <a
//                       rel='noreferrer noopener'
//                       href={url}
//                       target='_blank'
//                       className={buttonVariants({
//                         variant: 'ghost',
//                         size: 'sm',
//                       })}
//                     >
//                       <span className='sr-only'>{name} icon</span>
//                       {socialIcon(name)}
//                     </a>
//                   </div>
//                 ))}
//               </CardFooter>
//             </Card>
//           )
//         )}
//       </div>
//     </section>
//     </div>
//   );
// };

// export default About;

'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { buttonVariants } from '@/components/ui/button';
import { Twitter, Linkedin } from 'lucide-react';


const teamList = [
  {
    imageUrl:
      'https://res.cloudinary.com/douwvycai/image/upload/f_auto,q_auto/q0nosbkix2z9xfkqwajc',
    name: 'Nick Bolt',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/nicolas-bolt-59a523131/',
      },
      // {
      //   name: 'Twitter',
      //   url: 'https://x.com/_nbolt',
      // },
    ],
    content: [
        `I’ve been helping businesses fix tech headaches and build better websites for over 5 years.`,
        `Most business owners are juggling everything: sales, operations, customers. You don’t have time to deal with a slow, outdated site.`,
        `So I take the website off your plate. Fast, mobile-friendly, and built to bring in more calls and quote requests.`,
        `No templates. No learning curves. Just tell me what you do, and I’ll build a site that shows it clearly, professionally, and earns trust.`,
        `Let me handle your website so you can focus on running your business.`,
      ],
  },
];

export default function About() {
    const socialIcon = (iconName) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin size='20' />;

      //   case 'Twitter':
      //     return <Twitter size='20' />;
    }
  };

	return (
		<section className="py-24 bg-gray-50">
			<div className="container max-w-[1160px] mx-auto ">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 pb-12 text-center text-gray-900"
				>
					About Me
				</motion.h2>

				<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className="group relative bg-white rounded-xl backdrop-blur-sm border border-gray-200 shadow-lg lg:w-8/12 md:w-10/12 w-full mx-auto"
						>
							<div className="p-6">
								{teamList.map(
          ({ imageUrl, name, socialNetworks, content }) => (
            <div
              key={name}
            >
              <div className='mt-8 flex justify-center items-center pb-2'>
                <img
                  src={imageUrl}
                  alt={`${name}`}
                  className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover border-2 border shadow-xl'
                />
                <div className='text-center pb-8 pt-2 text-gray-700 font-md'>{name}</div>
              </div>

              <div className='text-center pb-2 sm:w-8/12 w-full mx-auto '>
                {content.map((paragraph, index) => (
                  <p key={index} className='mb-7 text-md leading-8'>
                    {paragraph}
                  </p>
                ))}
              </div>

                <div className="flex gap-4 w-6/12 mx-auto justify-center">
								<motion.a
									href="https://www.linkedin.com/in/nicolas-bolt-59a523131/"
                  target="_blank"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group flex items-center justify-center p-4 bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-200 transition-all duration-300"
								>
									<svg className="w-6 h-6 text-purple-600 group-hover:text-purple-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
								</motion.a>
								<motion.a
									href="https://github.com/nicolasbolt"
                  target="_blank"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group flex items-center justify-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-all duration-300"
								>
									<svg className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</motion.a>
								
								{/* <motion.a
									href="#"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="group flex items-center justify-center p-4 bg-pink-50 hover:bg-pink-100 rounded-xl border border-pink-200 transition-all duration-300"
								>
									<svg className="w-6 h-6 text-pink-600 group-hover:text-pink-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
										<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
									</svg>
								</motion.a> */}
							</div>
            </div>
          )
        )}
                
							</div>
						</motion.div>
			</div>
		</section>
	);
}
