import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Add metadata export for Next.js App Router
export const metadata = {
  title: "Content Planner Notion Template | Nicolas Bolt",
  description: "Stop feeling overwhelmed with content creation. Use this free Notion template to plan your content strategy, manage tasks, and grow your audience effectively.",
  keywords: [
    "content planner",
    "notion template",
    "content calendar",
    "content strategy",
    "content management",
    "notion content planner",
    "free notion template",
    "content marketing"
  ].join(", "),
  openGraph: {
    title: "Content Planner Notion Template | Nicolas Bolt",
    description: "Stop feeling overwhelmed with content creation. Use this free Notion template to plan your content strategy, manage tasks, and grow your audience effectively.",
    type: "website",
    url: "https://www.nicolasbolt.com/notion/content-planner",
    images: [
      {
        url: "https://www.nicolasbolt.com/content-planner.png",
        width: 1200,
        height: 630,
        alt: "Content Planner Notion Template Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Content Planner Notion Template",
    description: "Plan your content strategy, manage tasks, and grow your audience with this free Notion template",
    images: ["https://www.nicolasbolt.com/content-planner.png"],
  },
  alternates: {
    canonical: 'https://www.nicolasbolt.com/notion/content-planner',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
}

const featuresList = [
  {
    title: 'Find Your Positioning',
    description:
      'Define your positioning to guide your content creation and distribution to sell more effectively.',
    icon: '/vision.svg',
  },
  {
    title: 'Manage your Daily Tasks',
    description:
      'Keep track of the things you need to do today. Don\'t let things slip through the cracks.',
    icon: '/goals.svg',
  },
  {
    title: 'Plan for the Week or the Month',
    description:
      'Plan out your content into the future. You can plan out a week in advance or go further using a calendar view.',
    icon: '/checklist.svg',
  },
  ];

const ContentPlanner = () => {
  return (
    <main>
      <section className='container grid lg:grid-cols-2 place-items-center pt-20 px-10 md:pt-32 gap-10 lg:max-w-[1400px] md:max-w-lg mx-auto'>
      <div className='text-center lg:text-start space-y-6'>
        <main className='text-5xl md:text-6xl font-bold'>
          <h1 className='inline'>
            <span className='inline text-purple-800 bg-clip-text'>
              Content Planner <br />
            </span>{' '}
            Notion Template{' '}
          </h1>{' '}
        </main>

        <p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0'>
          Put a system in place to manage your content creation process.  This template will help you define your positioning, manage your daily tasks, and plan out your content for the week or the month.
        </p>

        <div className='space-y-4 md:space-y-0 space-x-4'>
          <Button asChild>
            <Link target='_blank' href='https://unmarred-quarter-034.notion.site/Content-Planner-19ea50b66d7280c8a57ddcb9ba724d39?pvs=4'> Get the Template!</Link>
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className='z-10 mx-auto'>
        <img
          src='/content-planner.png'
          alt='Content Planner Image'
          className='w-full h-auto rounded shadow-lg mx-auto'
        />
      </div>

      {/* Shadow effect */}
      <div className='shadow'></div>
    </section>

      <section className='bg-slate-50 md:px-0 px-3'>
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
                          <span className='bg-clip-text'>Stop Feeling Overwhelmed </span>
                          With Your Content Creation Process
                        </h2>
                        <p className='text-xl text-muted-foreground mt-4'>
                        Do you feel ovewhelmed with the idea of creating consistent content for your marketing efforts?
                        </p>
                      </div>
        
                      {/* <Statistics /> */}
                      <div id='statistics'>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                          <div className='space-y-2 text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold '>Missed</h2>
                            <p className='text-xl text-muted-foreground'>Days</p>
                          </div>
        
                          <div className='space-y-2 text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold '>
                              Poor
                            </h2>
                            <p className='text-xl text-muted-foreground'>Content Positioning</p>
                          </div>
                          <div className='space-y-2 text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold '>
                              Lack
                            </h2>
                            <p className='text-xl text-muted-foreground'>
                              of Traction
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
            Actually Build the Audience You Need{' '}
            </span>
            Through A Proven System!
          </h2>

          <p className='text-muted-foreground text-xl mt-4 mb-8 '>
            This template helps you solidify your positioning, manage your daily tasks, and plan out your content for the week or the month.  It will help you build the audience you need to grow your business.
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
          src='/positioning.png'
          className='md:w-11/12 w-full mx-auto h-auto object-contain rounded-lg shadow-lg pb-2'
          alt='Content Positioning Image'
        />
      </div>
    </div>

</section>
<section className='bg-slate-50 md:px-0 px-3'>
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
                      href='https://unmarred-quarter-034.notion.site/Content-Planner-19ea50b66d7280c8a57ddcb9ba724d39?pvs=4'
                    >
                      Use This Template!
                    </Link>
                </Button>
              </CardContent>

              <hr className='w-4/5 m-auto mb-4' />

              <CardFooter className='flex'>
              <ul className='space-y-4 list-disc list-inside mx-auto'>
                      <li className='ml-2'>Define Your Positioning</li>

                      <li className='ml-2'>Task Manager</li>

                      <li className='ml-2'>Plan Out Week or Month</li>
                </ul>
              </CardFooter>
            </Card>
        </div>
      </div>
      </section>

    </main>
  )
}

export default ContentPlanner
