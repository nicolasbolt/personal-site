import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const featuresList = [
  {
    title: 'Set a Vivid Vision',
    description:
      'Define your vivid vison to guide your goals and actions.',
    icon: '/vision.svg',
  },
  {
    title: 'Break Down Goals into Manageable Steps',
    description:
      'Break down your yearly goals into manageable steps into quarterly, monthly, and weekly goals.',
    icon: '/goals.svg',
  },
  {
    title: 'Track Daily Actions',
    description:
      'Create a daily action plan to track your progress and stay on track.',
    icon: '/checklist.svg',
  },
  
];

const NotionTemplatePage = () => {
  return (
    <main>
      <section className='container grid lg:grid-cols-2 place-items-center pt-20 px-10 md:pt-32 gap-10 lg:max-w-[1400px] md:max-w-lg mx-auto'>
      <div className='text-center lg:text-start space-y-6'>
        <main className='text-5xl md:text-6xl font-bold'>
          <h1 className='inline'>
            <span className='inline text-purple-800 bg-clip-text'>
              Yearly Goals <br />
            </span>{' '}
            Notion Template{' '}
          </h1>{' '}
        </main>

        <p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0'>
          Stop watching your goals slip away. This Notion template gives you the structure you need to stay on track, build momentum, and finally achieve what you set out to do.
        </p>

        <div className='space-y-4 md:space-y-0 space-x-4'>
          <Button asChild>
            <Link target='_blank' href='https://unmarred-quarter-034.notion.site/Yearly-Goals-17ca50b66d728001b8cae2f487af98eb?pvs=4'> Get the Template!</Link>
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className='z-10 mx-auto'>
        <img
          src='/notion.png'
          alt='Yearly Goals Image'
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
                          <span className='bg-clip-text'>Stop Making New Years Resoutions </span>
                          That You Don't Keep!
                        </h2>
                        <p className='text-xl text-muted-foreground mt-4'>
                        Are you tired of watching your ambitious yearly goals crumble by February, leaving you overwhelmed with scattered plans, unmet targets, and the constant gap between your dreams and daily actions?                        </p>
                      </div>
        
                      {/* <Statistics /> */}
                      <div id='statistics'>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                          <div className='space-y-2 text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold '>12</h2>
                            <p className='text-xl text-muted-foreground'>months wasted</p>
                          </div>
        
                          <div className='space-y-2 text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold '>
                              100%
                            </h2>
                            <p className='text-xl text-muted-foreground'>potential unrealized</p>
                          </div>
                          <div className='space-y-2 text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold '>
                              365
                            </h2>
                            <p className='text-xl text-muted-foreground'>
                              missed opportunities
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
            Actually Achieve Your Dreams{' '}
            </span>
            Through A Proven System!
          </h2>

          <p className='text-muted-foreground text-xl mt-4 mb-8 '>
            This template helps you set your yearly goals, break them down into manageable steps, and track your daily actions to ensure you stay on track and achieve your dreams.
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
          src='/yearly-goals.png'
          className='md:w-11/12 w-full mx-auto h-auto object-contain rounded-lg shadow-lg pb-2'
          alt='Yearly Goals Example Image'
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
                      href='https://unmarred-quarter-034.notion.site/Yearly-Goals-17ca50b66d728001b8cae2f487af98eb?pvs=4'
                    >
                      Use This Template!
                    </Link>
                </Button>
              </CardContent>

              <hr className='w-4/5 m-auto mb-4' />

              <CardFooter className='flex'>
              <ul className='space-y-4 list-disc list-inside mx-auto'>
                      <li className='ml-2'>Define your vision</li>

                      <li className='ml-2'>Break down your goals</li>

                      <li className='ml-2'>Track your daily actions</li>
                </ul>
              </CardFooter>
            </Card>
        </div>
      </div>
      </section>

    </main>
  )
}

export default NotionTemplatePage
