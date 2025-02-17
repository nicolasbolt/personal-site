import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const featureList = [
  {
    title: 'Custom Landing Page',
    description: 'Have a product that you need to sell?  I can build you a custom high converting landing page to turn website visitors into customers.',
    icon: '/undraw_building-blocks.svg',
  },
  {
    title: 'Custom Internal Software',
    description: 'Do you have boring repetitive tasks that you wish you could remove?  I can build you custom software solutions to automate workflows.',
    icon: '/undraw_dream-world.svg',
  },
  {
    title: 'Technical SEO Optimization',
    description: 'Do you have your meta tags, robots.txt, canonical links, and other SEO elements in place?  I can help you optimize your website for search engines.',
    icon: '/undraw_design-components.svg',
  },
  
];

const Features = () => {
  return (
    <section id='features' className='bg-slate-50'>
    <div className='container py-24 sm:py-32 mx-auto'>
      <div className='grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold pb-5'>
            <span className='bg-clip-text'>
            How I Can Bring{' '}
            </span>
            You Results
          </h2>

          {/* <p className='text-muted-foreground text-xl mt-4 mb-8 '>
          Receive real-time corrections, practice practical scenarios, and enjoy conversations that adapt to your skill level for a truly personalized language learning experience.
          </p> */}

          <div className='flex flex-col gap-8'>
            {featureList.map(({ title, description, icon }) => (
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
          src='/landing.png'
          className='md:w-full w-full mx-auto h-auto object-contain rounded-lg shadow-lg'
          alt='Pricing Image'
        />
      </div>
    </div>
    </section>
  );
};

export default Features;