'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-50" />
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="relative z-10 text-center px-4 pt-48 pb-12">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                    <img src="/indianapolis.jpg" alt="Indianapolis" className="lg:w-4/12 md:w-3/12 w-10/12 rounded-lg mx-auto mb-6 shadow-lg" />
                </motion.div>
            </div>

            <div className="relative z-10 text-center px-4 sm:pb-0 pb-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">Indianapolis Web Design</h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8">I work with local Indianapolis service companies to provide website design services.</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">Downtown</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">Fountain Square</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">Broad Ripple</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">Castleton</span>
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full border border-blue-200">Meridian-Kessler</span>
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