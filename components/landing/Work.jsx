import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { link } from 'fs';

const featureList = [
  {
    title: 'Da Deep Search',
    description: 'A landing page redesign built for a client to better showcase the product, connect with their ideal customers, and drive conversions.',
    image: '/da-deep-search.png',
    classNames: 'mt-24',
    link: '/da-deep-search'
  },
  {
    title: 'StartAMA',
    description: 'A landing page for StartAMA to enhance user engagement and streamline the onboarding process.',
    image: '/startama.png',
    classNames: 'mt-24',
    link: '/startama'
  },
  // {
  //   title: 'CleanLine Pressure Washing',
  //   description: 'A landing page for CleanLine Pressure Washing to showcase their services and attract new customers.',
  //   image: '/undraw_design-components.svg',
  //   classNames: 'mt-24',
  //   link: '/cleanline-pressure-washing'
  // },
  
];

const Work = () => {
  return (
    <section id='features' className='bg-neutral-50'>
      <div className='container py-24 sm:py-32 mx-auto'>
        <div className='w-11/12 md:w-full mx-auto flex flex-col gap-16'>
          {featureList.map(({ title, description, image, classNames, link }, idx) => (
            <div
              key={title}
              className={`grid md:grid-cols-2 gap-8 items-center ${classNames}`}
            >
              <CardHeader className="space-y-1 flex flex-col items-center md:items-start gap-4 col-span-1">
                <CardTitle className="text-3xl">{title}</CardTitle>
                <CardDescription className="text-md mt-2 text-center md:text-left sm:w-8/12">
                  <div className="mb-4">
                    {description}
                  </div>
                  <Link asChild href={link}>
                    <Button variant="outline" className="mt-4">See More <ChevronRight /></Button>
                  </Link>
                </CardDescription>
              </CardHeader>
              <div className="flex justify-center col-span-1">
                <img src={image} alt={`${title} icon`} className="rounded shadow-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;