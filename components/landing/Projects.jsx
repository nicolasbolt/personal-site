import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const features = [
  {
    image: '/notion.png',
    title: 'Notion Templates',
    description: 'Clean and simple Notion templates for Project Management, Personal Goals, and more.',
    href: '/notion'
  },
//   {
//     image: '',
//     title: 'Notion Blog CMS Package',
//     description: 'A package using the Notion API to use a Notion database as a CMS for a Next.js blog.  Includes a ContentRenderer to render Notion content as JSX.',
//   },
//   {
//     image: '',
//     title: 'Marketing Website Boilerplate Code - Next.js',
//     description:'A Nextjs Marketing Website built to convert traffic.  Includes a hero section, a problem agitation section, a features section, a pricing section, and a FAQ.',
//   }
];

const Projects = () => {
return (
    <div className='bg-slate-50'>
        <section id='howItWorks' className='container text-center py-24 sm:py-32 mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold '>
                What <span className='bg-clip-text'>I've Built</span>
            </h2>
            <p className='md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground'></p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {features.map(({ title, description, image, href }) => (
                    <Link key={title} href={href || '#'} className='no-underline cursor-pointer transform hover:scale-105 transition-transform'>
                        <Card className='bg-white h-full'>
                            <CardHeader>
                                <CardTitle className='grid gap-4 place-items-center'>
                                    <img src={image} alt={`${title} image`} className='w-24 h-24 rounded-full' />
                                    {title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>{description}</CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    </div>
);
};

export default Projects;
