import React from 'react'
import Hero from '@/components/landing/Hero'
import Skills from '@/components/landing/Skills'
import ProblemAgitation from '@/components/landing/ProblemAgitation'
import Solution from '@/components/landing/Solution'
import Work from '@/components/landing/Work'
import About from '@/components/landing/About'
import CTA from '@/components/landing/CTA'
const LandingPage = () => {
  return (
    <>
      <Hero />
      <Skills />
      {/* <ProblemAgitation /> */}
      {/* <Solution /> */}
      <Work />
      <About />
      <CTA />
      {/* <FAQ /> */}
    </>
  )
}

export default LandingPage
