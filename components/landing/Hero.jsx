import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { Speech } from 'lucide-react'

const Hero = () => {
  return (
    <div className='bgImg h-screen'>
    <section className='container grid lg:grid-cols-2 place-items-center pt-20 md:pt-32 gap-10 mx-auto text-primary'>
      <div className='text-center lg:text-start space-y-6'>
        <main className='text-5xl md:text-6xl font-bold'>
          <h1 className='animate__animated animate__bounce'>
            <span className='text-customBrown'>
              Nicolas Bolt <br />
            </span>{' '}
            Web Developer{' '}
          </h1>{' '}
          {/* <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2> */}
        </main>

        <p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 pb-8 animate__animated animate__fadeInLeft'>
          I design and build fast, mobile-friendly websites that help service businesses like yours get more quote requests, phone calls, and customers.
        </p>

        <div className='space-y-4 md:space-y-0 space-x-4'>
          <Button asChild size="lg" className='bg-primary animate__animated animate__bounceInLeft'>
            <Link target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLScO0hCwTeIMUY7MlAf3K74_UZ7DCI8lqHNy_syXOAGACE4zbg/viewform?usp=dialog'><Speech /> Work With Me</Link>
          </Button>

          {/* <Button variant='outline'>
          <Link target='_blank' href='https://github.com/nicolasbolt'><ion-icon name="logo-github"></ion-icon> My Code on Github</Link>
            
          </Button> */}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className='z-10 mx-auto'>
        <img
          src='profile.png'
          alt='Nicolas Bolt Profile Image'
          className='lg:max-w-[60%] max-w-[50%] h-auto rounded-full shadow-lg mx-auto animate__animated animate__bounceInRight'
          width={642}
          height={642}
        />
      </div>

      {/* Shadow effect */}
      <div className='shadow'></div>
    </section>
    </div>
  )
}

export default Hero
