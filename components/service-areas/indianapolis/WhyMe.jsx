'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function WhyMe() {
    return (
        <section className="py-48 bg-white">
            <div className="container max-w-[1160px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="w-full"
                    >
                        <div className="relative">
                            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-30"></div>
                            <img 
                                src="/indy.avif" 
                                alt="Indianapolis skyline - Local Web Design Services" 
                                className="relative w-full sm:mx-0 mx-auto sm:max-w-md max-w-xs h-auto rounded-xl shadow-2xl border border-gray-200" 
                            />
                        </div>
                    </motion.div>

                    <div className="sm:w-full w-11/12 mx-auto sm:mx-0 flex flex-col">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-6 text-gray-900"
                        >
                            Why am I The Right Choice for Your Indianapolis Web Design Needs?
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-lg leading-relaxed mb-8"
                        >
                            <p>
                                I have 5 years of vast industry experience ranging from small local companies to large enterprises. My expertise lies in creating tailored web design solutions that drive results and enhance user experiences. I understand the business side of web design including how to increase your conversion rate, how to show up in Google Search, and how to display your business as a trustworthy authority in your industry.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
