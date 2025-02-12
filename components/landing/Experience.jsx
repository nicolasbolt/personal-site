import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

const features = [
  {
    icon: '/noblesville-schools.jpeg',
    title: 'Technical Assistant - Noblesville Schools',
    description:
'Resolved complex technical challenges, ensured smooth system operations, managed device inventory in MDM, and created JavaScript-based forms to streamline workflows and reduce errors.'  },
  {
    icon: '/myhelo_logo.jpeg',
    title: 'Software Engineer - myhELO',
    description: 'Created JavaScript and PHP solutions to improve health outcomes, boosted frontend performance by 90%, and built a user-friendly marketing website with a designer.',
  },
  {
    icon: '/state_farm_logo.jpeg',
    title: 'Software Engineer - State Farm',
    description:
      'Migrated legacy code to AWS, built services with Lambda and API Gateway, managed infrastructure with Terraform, ensured 90% test coverage, set up CI/CD pipelines, and monitored performance using Splunk.',
  }
];

const Experience = () => {
  return (
    <div className='md:px-0 px-3'>
    <section id='howItWorks' className='container text-center py-24 sm:py-32 mx-auto'>
      <h2 className='text-3xl md:text-4xl font-bold '>
        What <span className='bg-clip-text'>I've Done</span>
      </h2>
      <p className='md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground'></p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map(({ title, description, icon }) => (
          <Card key={title} className='bg-muted/50'>
            <CardHeader>
              <CardTitle className='grid gap-4 place-items-center'>
                <img src={icon} alt={`${title} icon`} className='w-24 h-24 rounded-full' />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Experience;
