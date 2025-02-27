import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const featureList = [
  {
    title: 'Custom Landing Page',
    description: 'Have a product that you need to sell?  You need a high performing landing page to make those sales!',
    icon: '/undraw_building-blocks.svg',
  },
  {
    title: 'Custom Internal Software',
    description: 'Replace your manual processes with custom software solutions.  Automate your business processes to save time and money.',
    icon: '/undraw_dream-world.svg',
  },
  {
    title: 'Technical SEO Optimization',
    description: 'Do you have your meta tags, robots.txt, canonical links, and other SEO elements in place?  If you get these right, you can rank higher in search engines.',
    icon: '/undraw_design-components.svg',
  },
  
];

const Features = () => {
  return (
    <section id='features' className='bg-slate-50'>
    <div className='container py-24 sm:py-32 mx-auto'>
      <div className='w-11/12 md:w-full mx-auto grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center'>
        <div>
          <h2 className='text-3xl md:text-4xl font-bold pb-5'>
            <span className='bg-clip-text'>
            How I Can Bring{' '}
            </span>
            You Results
          </h2>

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