import React from 'react'
import Hero from '@/components/landing/Hero'
import InfoBar from '@/components/landing/InfoBar'
import MoreInfo from '@/components/landing/MoreInfo'
import Experience from '@/components/landing/Experience'
import About from '@/components/landing/About'
import Projects from '@/components/landing/Projects'

const LandingPage = () => {
  return (
    <>
      <Hero />
      <InfoBar />
      <MoreInfo />
      <Experience />
      <Projects />
      <About />
    </>
  )
}

export default LandingPage
