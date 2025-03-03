import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const featuresList = [
  {
    title: 'Daily Journal',
    description:
      'Make journaling in your target language part of your daily routine.  Build your vocabulary and practice writing.',
    icon: '/undraw_writing-down-ideas.svg',
  },
  {
    title: 'Task Tracker',
    description:
      'While learning multiple languages, it can be hard to keep track of your progress. Use this task tracker to stay organized.',
    icon: '/checklist.svg',
  },
  {
    title: 'Language Resource Tracker',
    description:
      'Keep track of all the resources you use to learn a new language.  This will help you stay organized and focused.',
    icon: '/undraw_organize-resume.svg',
  },
];

const LanguageLearningTemplatePage = () => {
  return (
    <main>
      <section className='container grid lg:grid-cols-2 place-items-center pt-20 px-10 md:pt-32 gap-10 lg:max-w-[1400px] md:max-w-lg mx-auto'>
        <div className='text-center lg:text-start space-y-6'>
          <main className='text-5xl md:text-6xl font-bold'>
            <h1 className='inline'>
              <span className='inline text-purple-800 bg-clip-text'>
                Language
              </span>{' '} <br />
              Learning Template
            </h1>{' '}
          </main>

          <p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0'>
            Master a new language with this comprehensive language learning template. Easily organize your learning across multiple languages and track your progress with ease.
          </p>

          <div className='space-y-4 md:space-y-0 space-x-4'>
            <Button asChild>
              <Link target='_blank' href='https://unmarred-quarter-034.notion.site/Language-Learning-Study-Tracker-17ea50b66d7280b180cdd61844a7b7bc?pvs=4'> Get the Template!</Link>
            </Button>
          </div>
        </div>

        {/* Hero cards sections */}
        <div className='z-10 mx-auto'>
          <img
            src='/language-learning.png'
            alt='Language Learning Image'
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
                src='/undraw_heavy-box.svg'
                alt='Disorganized Learning'
                className='w-[300px] object-contain rounded-lg'
              />
              <div className='bg-green-0 flex flex-col justify-between md:w-8/12'>
                <div className='pb-6'>
                  <h2 className='text-3xl md:text-4xl font-bold'>
                    <span className='bg-clip-text'>Struggling with Disorganization </span>
                    and Tracking Progress?
                  </h2>
                  <p className='text-xl text-muted-foreground mt-4'>
                    Learning a new language can be overwhelming, especially when you don't have a structured approach. Many learners struggle with keeping their studies organized and tracking their progress effectively. Without a clear plan, it's easy to lose motivation and feel like you're not making any progress.
                  </p>
                </div>

                <div id='statistics'>
                  <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='space-y-2 text-center'>
                      <h2 className='text-3xl sm:text-4xl font-bold '>Lack</h2>
                      <p className='text-xl text-muted-foreground'>of Clarity</p>
                    </div>

                    <div className='space-y-2 text-center'>
                      <h2 className='text-3xl sm:text-4xl font-bold '>
                        Unable
                      </h2>
                      <p className='text-xl text-muted-foreground'>to stay consistent</p>
                    </div>
                    <div className='space-y-2 text-center'>
                      <h2 className='text-3xl sm:text-4xl font-bold '>
                        Struggles
                      </h2>
                      <p className='text-xl text-muted-foreground'>
                        with losing motivation
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
                Learn a New Language{' '}
                </span>
                with Confidence!
              </h2>

              <p className='text-muted-foreground text-xl mt-4 mb-8 '>
                Our template provides a structured approach to language learning, helping you build your vocabulary, improve your grammar, and practice effectively.
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
              src='/languages.png'
              className='md:w-11/12 w-full mx-auto h-auto object-contain rounded-lg shadow-lg pb-2'
              alt='Language Learning Details Image'
            />
          </div>
        </div>
      </section>

      <section className='bg-slate-50 md:px-0 px-3'>
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
                    href='https://unmarred-quarter-034.notion.site/Language-Learning-Study-Tracker-17ea50b66d7280b180cdd61844a7b7bc?pvs=4'
                  >
                    Use This Template!
                  </Link>
                </Button>
              </CardContent>

              <hr className='w-4/5 m-auto mb-4' />

              <CardFooter className='flex'>
                <ul className='space-y-4 list-disc list-inside mx-auto'>
                  <li className='ml-2'>Daily Journal</li>
                  <li className='ml-2'>Resource Tracker</li>
                  <li className='ml-2'>Task Manager</li>
                </ul>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LanguageLearningTemplatePage