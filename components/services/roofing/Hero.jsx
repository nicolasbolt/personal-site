'use client';

import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<section className="relative min-h-screen items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-50" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="container mx-auto max-w-[1160px] relative z-10 text-center px-12 pt-48">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
					<h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">Roofing Web Design in Indianapolis</h1>
					<p className="text-xl md:text-2xl text-gray-600 mb-8 px-16 pt-8">I build high-converting websites for roofing companies in the Indianapolis area to help them attract more customers and generate leads.</p>
					<div className="flex flex-wrap justify-center gap-4 text-sm">
						<span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">Indianapolis</span>
						<span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">Brownsburg</span>
						<span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">Avon</span>
						<span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">Westfield</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">Carmel</span>
					</div>
				</motion.div>
			</div>

			<div className="absolute sm:bottom-10 bottom-5 left-1/2 transform -translate-x-1/2">
				<motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-gray-500">
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</motion.div>
			</div>
		</section>
	);
}