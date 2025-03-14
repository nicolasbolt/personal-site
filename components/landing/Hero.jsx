import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { Speech } from 'lucide-react'

const Hero = () => {
  return (
    <section className='container grid lg:grid-cols-2 place-items-center pt-20 px-10 md:pt-32 gap-10 lg:max-w-[1400px] md:max-w-lg mx-auto'>
      <div className='text-center lg:text-start space-y-6'>
        <main className='text-5xl md:text-6xl font-bold'>
          <h1 className='inline'>
            <span className='inline text-purple-800 bg-clip-text'>
              Nicolas Bolt <br />
            </span>{' '}
            Software Engineer{' '}
          </h1>{' '}
          {/* <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2> */}
        </main>

        <p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0'>
          I have been solving problems with software for 5 years.  I work with companies to solve challenges with software and acheive business results.
        </p>

        <div className='space-y-4 md:space-y-0 space-x-4'>
          <Button asChild size="lg">
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
          src='https://res.cloudinary.com/douwvycai/image/upload/f_auto,q_auto/q0nosbkix2z9xfkqwajc'
          alt='Nicolas Bolt Profile Image'
          className='w-[60%] h-auto rounded-full shadow-lg mx-auto'
        />
      </div>

      {/* Shadow effect */}
      <div className='shadow'></div>
    </section>
  )
}

export default Hero
