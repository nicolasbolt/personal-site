import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: 'undraw_organize-photos.svg',
    title: 'Improve Your Digital Marketing',
    description: 'Getting customers to your website is only half the battle.  I can help make your website more effective at converting visitors into customers.'
  },
  {
    icon: 'undraw_organize-resume.svg',
    title: 'Streamline Internal Workflows',
    description: 'Still using Excel or pen and paper to run your business?  I can help you automate these processes and make your business run more efficiently with custom software.'
  },
  {
    icon: 'undraw_powerful.svg',
    title: 'Rank Better in Google Search',
    description: 'Is your current website not ranking well in Google search?  I can help you optimize your website to rank better and get more organic traffic.'
  }
];

const Solution = () => {
  return (
    <section id='solution' className='container text-center py-24 sm:py-32 mx-auto'>
      <h2 className='text-3xl md:text-4xl font-bold '>
        How Can <span className='bg-clip-text'>I Help You?</span>
      </h2>
      <p className='md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground'></p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {benefits.map(({ title, description, icon }) => (
          <Card key={title} className='bg-muted/50'>
            <CardHeader>
              <CardTitle className='grid gap-4 place-items-center'>
                <img src={icon} alt={`${title} icon`} className='w-24 h-24' />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Solution;

