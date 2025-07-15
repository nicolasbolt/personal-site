import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: "SaaS Starter App Template",
  description: "Launch your SaaS in days with this SaaS starter app template.",
  keywords: "saas, entrepreneurship, mongodb, stripe",
  openGraph: {
    title: "SaaS Starter App Template",
    description: "Launch your SaaS in days with this SaaS starter app template.",
    type: "website",
    url: "https://www.nicolasbolt.com/saas-starter-app",
    images: [
      {
        url: "https://www.nicolasbolt.com/og-saas.svg",
        width: 1200,
        height: 630,
        alt: "SaaS Starter App Social Image",
      },
    ],
  },
  alternates: {
    canonical: './',
  },
};

const featuresList = [
  {
    title: 'User Management',
    description:
      'User authentication comes included with Google OAuth and email magic links.  You can easily add more authentication providers.',
      icon: '/vision.svg',
    },
  {
    title: 'Stripe Integration',
    description:
      'Effortlessly collect payments with built in Stripe API integration. User access is automatically updated based on their subscription status.',
      icon: '/goals.svg',
    },
  {
    title: 'MongoDB Backend',
    description:
      'Easily manage a scalable backend with MongoDB.  The backend is already setup to handle user authentication and subscription management.',
      icon: '/checklist.svg',
    },
];

const SaasStarterApp = () => {
  return (
    <main>
      <section className='container grid lg:grid-cols-2 place-items-center pt-20 px-10 md:pt-32 gap-10 lg:max-w-[1600px] md:max-w-lg mx-auto'>
        <div className='text-center lg:text-start space-y-6'>
          <main className='text-5xl md:text-6xl font-bold'>
            <h1 className='inline'>
              <span className='inline text-purple-800 bg-clip-text'>
                SaaS Starter
              </span>{' '} <br />
              App Template
            </h1>{' '}
          </main>

          <p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0'>
            Kickstart your SaaS project with this starter app template. It includes essential features to help you build and scale your application quickly.
          </p>

          <div className='space-y-4 md:space-y-0 space-x-4'>
            <Button asChild>
              <Link target='_blank' href='https://github.com/nicolasbolt/app-starter'> Get the Template!</Link>
            </Button>
          </div>
        </div>

        {/* Hero cards sections */}
        <div className='z-10 mx-auto'>
          <img
            src='/home.png'
            alt='SaaS Starter Image'
            className='w-full h-auto rounded shadow-lg mx-auto'
          />
        </div>

        {/* Shadow effect */}
        <div className='shadow'></div>
      </section>

      <section className='bg-neutral-50 md:px-0 px-3'>
        <div id='problem' className='container py-24 sm:py-32 mx-auto'>
          <div className='bg-white border rounded-lg py-12'>
            <div className='px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12'>
              <img
                src='/access-denied.svg'
                alt=''
                className='w-[300px] object-contain rounded-lg'
              />
              <div className='bg-green-0 flex flex-col justify-between md:w-8/12'>
                <div className='pb-6'>
                  <h2 className='text-3xl md:text-4xl font-bold'>
                    <span className='bg-clip-text'>Stop Taking Months </span>
                    to Launch a New Product!
                  </h2>
                  <p className='text-xl text-muted-foreground mt-4'>
                    Don't spend months building out the same core features for your SaaS app.  This takes away valuable time from solving the unique problems your app is meant to address!
                  </p>
                </div>

                <div id='statistics'>
                  <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='space-y-2 text-center'>
                      <h2 className='text-3xl sm:text-4xl font-bold '>Months</h2>
                      <p className='text-xl text-muted-foreground'>to Launch</p>
                    </div>

                    <div className='space-y-2 text-center'>
                      <h2 className='text-3xl sm:text-4xl font-bold '>
                        Avoidable
                      </h2>
                      <p className='text-xl text-muted-foreground'>Frustration</p>
                    </div>
                    <div className='space-y-2 text-center'>
                      <h2 className='text-3xl sm:text-4xl font-bold '>
                        Lost
                      </h2>
                      <p className='text-xl text-muted-foreground'>
                        Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='md:px-0 px-3'>
        <div className='container py-24 sm:py-32 mx-auto'>
          <div className='grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold'>
                <span className='bg-clip-text'>
                Build Your SaaS App{' '}
                </span>
                with Ease!
              </h2>

              <p className='text-muted-foreground text-xl mt-4 mb-8 '>
                This template provides a solid foundation for your SaaS application, allowing you to focus on building features that matter to your users.
              </p>

              <div className='flex flex-col gap-8'>
                {featuresList.map(({ title, description, icon }) => (
                  <Card key={title}>
                    <CardHeader className='space-y-1 flex md:flex-row justify-start items-start gap-4'>
                      <img src={icon} alt={`${title} icon`} className='w-24 h-24' />
                      <div>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription className='text-md mt-2'>
                          {description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <img
              src='/signin-page.png'
              className='md:w-11/12 w-full mx-auto h-auto object-contain rounded-lg shadow-lg'
              alt='SaaS Features Image'
            />
          </div>
        </div>
      </section>

      <section className='bg-neutral-50 md:px-0 px-3'>
        <div id='cta' className='container py-24 sm:py-32 mx-auto'>
          <div className='gap-8 mx-auto md:w-4/12'>
            <Card className='drop-shadow-xl shadow-black/10 dark:shadow-white/10'>
              <CardHeader>
                <h2 className='text-3xl md:text-4xl font-bold text-center'>
                  Get
                  <span className='bg-clip-text'> the Template!</span>
                </h2>
              </CardHeader>
              <CardContent className='mt-5'>
                <Button asChild className='w-full'>
                  <Link
                    target='_blank'
                    href='https://github.com/nicolasbolt/app-starter'
                  >
                    Use This Template!
                  </Link>
                </Button>
              </CardContent>

              <hr className='w-4/5 m-auto mb-4' />

              <CardFooter className='flex'>
                <ul className='space-y-4 list-disc list-inside mx-auto'>
                  <li className='ml-2'>Quick Setup</li>
                  <li className='ml-2'>Scalable Architecture</li>
                  <li className='ml-2'>Secure Authentication</li>
                </ul>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SaasStarterApp