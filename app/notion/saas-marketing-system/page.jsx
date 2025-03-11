import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const featuresList = [
  {
    title: 'Manage Multiple Projects',
    description:
      'Don\'t get overwhelmed with posting on multiple platforms. Manage all of your marketing projects in one place.',
    icon: '/vision.svg',
  },
  {
    title: 'Research Successful Content',
    description:
      'Within each Platform, you can research successful content and use it as inspiration for your own posts.',
    icon: '/goals.svg',
  },
  {
    title: 'Task Board with Status',
    description:
      'Create tasks for each of your marketing projects and track their status from start to finish.  All in one place.',
    icon: '/checklist.svg',
  },
  
];

const SaaSMarketing = () => {
  return (
    <main>
      <section className='container grid lg:grid-cols-2 place-items-center pt-20 px-10 md:pt-32 gap-10 lg:max-w-[1400px] md:max-w-lg mx-auto'>
      <div className='text-center lg:text-start space-y-6'>
        <main className='text-5xl md:text-6xl font-bold'>
          <h1 className='inline'>
            <span className='inline text-purple-800 bg-clip-text'>
              SaaS <br />
            </span>{' '}
            Marketing System{' '}
          </h1>{' '}
        </main>

        <p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0'>
          Stop watching your marketing efforts fall flat. This Notion template gives you the structure you need to research content ideas, task tracker for your marketing, and structure for each platform.
        </p>

        <div className='space-y-4 md:space-y-0 space-x-4'>
          <Button asChild>
            <Link target='_blank' href='https://unmarred-quarter-034.notion.site/SaaS-Marketing-System-17da50b66d7280dba93fd624d10febec?pvs=4'> Get the Template!</Link>
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className='z-10 mx-auto'>
        <img
          src='/saas-marketing.png'
          alt='SaaS Marketing Image'
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
                          <span className='bg-clip-text'>Stop Feeling Overwhelmed With </span>
                          Your Marketing Efforts
                        </h2>
                        <p className='text-xl text-muted-foreground mt-4'>
                        Does marketing make you feel overwhelmed?  It can be challenging marketing a SaaS product on multiple platforms                        </p>
                      </div>
        
                      {/* <Statistics /> */}
                      <div id='statistics'>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                          <div className='space-y-2 text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold '>Hours</h2>
                            <p className='text-xl text-muted-foreground'>wasted</p>
                          </div>
        
                          <div className='space-y-2 text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold '>
                              Missed
                            </h2>
                            <p className='text-xl text-muted-foreground'>Customers</p>
                          </div>
                          <div className='space-y-2 text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold '>
                              Low
                            </h2>
                            <p className='text-xl text-muted-foreground'>
                              Engagement
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
            Improve your Marketing Efforts{' '}
            </span>
            With An Organized System!
          </h2>

          <p className='text-muted-foreground text-xl mt-4 mb-8 '>
            Manage your marketing tasks, research successful content, and track your progress all in one place.  This template will help you stay organized and focused on your marketing goals.
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
          src='/platform-image.png'
          className='md:w-11/12 w-full mx-auto h-auto object-contain rounded-lg shadow-lg pb-2'
          alt='SaaS Marketing Example Image'
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
                      href='https://unmarred-quarter-034.notion.site/SaaS-Marketing-System-17da50b66d7280dba93fd624d10febec?pvs=4'
                    >
                      Use This Template!
                    </Link>
                </Button>
              </CardContent>

              <hr className='w-4/5 m-auto mb-4' />

              <CardFooter className='flex'>
              <ul className='space-y-4 list-disc list-inside mx-auto'>
                      <li className='ml-2'>Workflow Organized by Platform</li>

                      <li className='ml-2'>Task Manager with Status Tracker</li>

                      <li className='ml-2'>Content Research</li>
                </ul>
              </CardFooter>
            </Card>
        </div>
      </div>
      </section>

    </main>
  )
}

export default SaaSMarketing
