import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: 'undraw_organize-photos.svg',
    title: 'Conversion-Focused Web Design',
    description: 'Layouts built to guide visitors toward calling, booking, or requesting a quote.'
  },
  {
    icon: 'undraw_document-analysis.svg',
    title: 'Mobile Optimization',
    description: 'Most visitors are on their phone. Your site will look and work great on any device.'
  },
  {
    icon: 'undraw_powerful.svg',
    title: 'Fast Turnaround',
    description: 'You\'ll have a fully functional site in weeks, not months.'
  }
];

const Solution = () => {
  return (
    <section id='solution' className='container text-center py-24 sm:py-32 mx-auto'>
      <h2 className='text-3xl md:text-4xl font-bold '>
        How I <span className='bg-clip-text'>Can Bring You More Customers</span>
      </h2>
      <p className='md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground'></p>

      <div className='md:w-full w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {benefits.map(({ title, description, icon }) => (
          <Card key={title} className='bg-muted/20 border-2 border-customTan'>
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

