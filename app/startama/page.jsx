'use client';

import React from 'react'
import { useRouter } from 'next/navigation'
import Pricing from '@/components/landing/CTA';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

function DaDeepSearch() {
    const router = useRouter();

    return (
        <>
        <div className="bgImg min-h-screen">
            <div className="container mx-auto pt-16 pb-24 max-w-4xl mx-auto px-6 py-24">
                <Button
                    variant="outline"
                    onClick={() => router.back()}
                    className='mb-12'
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                
                <div>
                    <div className="text-center lg:text-start space-y-6 mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold">
                            <span className="inline bg-clip-text">StartAMA</span>
                        </h1>
                        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 pb-8">
                            A landing page for StartAMA to enhance user engagement and streamline the onboarding process.
                        </p>
                    </div>
                    
                    <div className="z-10 mx-auto">
                        <img
                            src="/startama-full.png"
                            alt="StartAMA Landing Page Preview"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>

        

        <Pricing />
        </>
    )
}

export default DaDeepSearch;
