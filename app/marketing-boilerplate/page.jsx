import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: "Marketing Landing Page Template",
  description: "Easily convert visitors into customers with this marketing boilerplate page.  Take the visitor on a journey to connect with their emotions, justify purchasing, and build trust.",
  keywords: "marketing, landing page, template, sell, sales",
  openGraph: {
    title: "Marketing Landing Page Template",
    description: "Easily convert visitors into customers with this marketing boilerplate page.  Take the visitor on a journey to connect with their emotions, justify purchasing, and build trust.",
    type: "website",
    url: "https://www.nicolasbolt.com/marketing-boilerplate",
    images: [
      {
        url: "https://www.nicolasbolt.com/og-marketing.svg",
        width: 1200,
        height: 630,
        alt: "Marketing Landing Page Social Image",
      },
    ],
  },
  alternates: {
    canonical: './',
  },
};

const featuresList = [
  {
    title: 'Problem Agitation',
    description:
      'Spend time really expressing the problem your visitors are facing.  This will help them emotionally connect with your message.',
    icon: '/vision.svg',
  },
  {
    title: 'Testimonials',
    description:
      'Build social proof by showing testimonials from previous customers.  This will help justify the purchase and build trust with your visitors.',
    icon: '/goals.svg',
  },
  {
    title: 'Call to Action',
    description:
      'After making an emotional connection, introducing your solution, and building trust, it is time to ask for the sale.  Make it easy for your visitors to take the next step.',
    icon: '/checklist.svg',
  },
  
];

const MarketingBoilerplate = () => {
  return (
    <main>
      <section className='container grid lg:grid-cols-2 place-items-center pt-20 px-10 md:pt-32 gap-10 lg:max-w-[1400px] md:max-w-lg mx-auto'>
      <div className='text-center lg:text-start space-y-6'>
        <main className='text-5xl md:text-6xl font-bold'>
          <h1 className='inline'>
            <span className='inline text-purple-800 bg-clip-text'>
              Marketing
            </span>{' '} <br />
            Boilerplate Page
          </h1>{' '}
        </main>

        <p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0'>
          Convert visitors into customers by using this marketing boilerplate page with a proven structure.  Take the visitor on a journey to connect with their emotions, justify purchasing, and build trust.
        </p>

        <div className='space-y-4 md:space-y-0 space-x-4'>
          <Button asChild>
            <Link target='_blank' href='https://github.com/nicolasbolt/marketing-boilerplate'> Get the Template!</Link>
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className='z-10 mx-auto'>
        <img
          src='/marketing.png'
          alt='Marketing Image'
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
                          <span className='bg-clip-text'>Losing Visitors to a Bad Experience </span>
                          Decreases Your Potential!
                        </h2>
                        <p className='text-xl text-muted-foreground mt-4'>
                            Visitors are leaving your site because they are not connecting with your message.  A bad experience can lead to a loss in potential customers.
                        </p>
                      </div>
        
                      {/* <Statistics /> */}
                      <div id='statistics'>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                          <div className='space-y-2 text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold '>High</h2>
                            <p className='text-xl text-muted-foreground'>Bounce Rate</p>
                          </div>
        
                          <div className='space-y-2 text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold '>
                              Low
                            </h2>
                            <p className='text-xl text-muted-foreground'>Conversion Rate</p>
                          </div>
                          <div className='space-y-2 text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold '>
                              Missed
                            </h2>
                            <p className='text-xl text-muted-foreground'>
                              Customers
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
        {/* solution */}

    <div className='container py-24 sm:py-32 mx-auto'>
      <div className='grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold'>
            <span className='bg-clip-text'>
            Take Your Visitors On{' '}
            </span>
            A Journey!
          </h2>

          <p className='text-muted-foreground text-xl mt-4 mb-8 '>
            Using proven structures like problem agitation, solution introduction, and social proof can help you connect with your visitors and convert them into customers.  This template makes this incredibly easy!
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
          src='/testimonials.png'
          className='md:w-11/12 w-full mx-auto h-auto object-contain rounded-lg shadow-lg'
          alt='Testimonials Image'
        />
      </div>
    </div>

</section>
<section className='bg-neutral-50 md:px-0 px-3'>

      <div id='cta' className='container py-24 sm:py-32 mx-auto'>
        <div className='gap-8 mx-auto md:w-4/12'>
            <Card
              className='drop-shadow-xl shadow-black/10 dark:shadow-white/10'
            >
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
                      href='https://github.com/nicolasbolt/marketing-boilerplate'
                    >
                      Use This Template!
                    </Link>
                </Button>
              </CardContent>

              <hr className='w-4/5 m-auto mb-4' />

              <CardFooter className='flex'>
              <ul className='space-y-4 list-disc list-inside mx-auto'>
                      <li className='ml-2'>Build an Emotional Connection</li>

                      <li className='ml-2'>Clearly Explain Why Your Solution Works</li>

                      <li className='ml-2'>Build Trust and Make the Sale</li>
                </ul>
              </CardFooter>
            </Card>
        </div>
      </div>
      </section>

    </main>
  )
}

export default MarketingBoilerplate
