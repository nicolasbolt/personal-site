'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function LocalSection() {
    return (
        <section className="py-48 bg-gray-50">
            <div className="container max-w-[1160px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    <div className="sm:w-full w-11/12 mx-auto sm:mx-0 flex flex-col">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-6 text-gray-900"
                        >
                            Your Local Indy Web Design Partner
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-lg leading-relaxed mb-8"
                        >
                            <p>
                                I help local Indianapolis businesses get more leads through effective digital marketing. I follow a standardized process for determining what is working currently and what is causing leads to be lost. Through SEO, the customer journey, and analytics, I can identify areas for improvement and implement strategies to drive more traffic and conversions.
                            </p>
                        </motion.div>

                    </div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center items-center"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-30"></div>
                            <img 
                                src="/profile.avif" 
                                alt="Nicolas Bolt - Indianapolis Web Designer" 
                                className="relative w-full sm:mx-0 mx-auto sm:max-w-md max-w-xs h-auto rounded-xl shadow-2xl border border-gray-200" 
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
