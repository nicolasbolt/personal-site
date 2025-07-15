'use client';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
// import { useSession } from 'next-auth/react';

const pricingList = [
  // {
  //   title: 'Custom Marketing Pages',
  //   recommended: false,
  //   duration: 'month',
  //   price: 29,
  //   paymentLink:
  //     process.env.NODE_ENV === 'development'
  //     // stripe test price link
  //       ? '#'
  //     // stripe live price link
  //       : '#',
  //   paymentPriceId:
  //     process.env.NODE_ENV === 'development'
  //     // stripe test price id
  //       ? ''
  //     // stripe live price id
  //       : '',
  //   description: 'Improve your conversion rate and get more leads to turn visitors into customers!',
  //   benefitList: [
  //     'A proven structure that converts',
  //     'Good website copy to convince your audience',
  //     'SEO optimization',
  //   ],
  // },
  // {
  //   title: 'Custom Sofware as a Service (SaaS)',
  //   recommended: false,
  //   duration: 'year',
  //   price: 200,
  //   paymentLink:
  //     process.env.NODE_ENV === 'development'
  //     // stripe test price link
  //       ? '#'
  //     // stripe live price link
  //       : '#',
  //   paymentPriceId:
  //     process.env.NODE_ENV === 'development'
  //     // stripe test price id
  //       ? ''
  //     // stripe live price id
  //       : '',
  //   description: 'I can build you a custom SaaS solution for either your internal team or to sell to customers.',
  //   benefitList: [
  //     'Automate repetitive tasks',
  //     'Team collaboration',
  //     'User management',
  //   ],
  // },
  {
    title: 'Work With Me',
    recommended: false,
    duration: 'year',
    price: 200,
    paymentLink:
      process.env.NODE_ENV === 'development'
      // stripe test price link
        ? '#'
      // stripe live price link
        : '#',
    paymentPriceId:
      process.env.NODE_ENV === 'development'
      // stripe test price id
        ? ''
      // stripe live price id
        : '',
    description: 'Tell me more about your business to get the process started.',
    benefitList: [
      'A Site That Looks Great and Gets Leads',
      'Done in Weeks, Not Months',
      'Easy Updates & Complete Ownership',
    ],
  },
];

const Pricing = () => {
  // const { data: session } = useSession();
  return (
    <div className='bg-neutral-50 px-3 md:px-0'>
      <section id='pricing' className='container py-24 sm:py-32 mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center'>
          Let's Get
          <span className='bg-clip-text'> Started!</span>
        </h2>
        <h3 className='text-xl text-center text-muted-foreground pt-4 pb-8'>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis. */}
        </h3>
        {/* <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto md:w-11/12'> */}
        <div className='lg:grid-cols-3 gap-8 mx-auto md:w-4/12'>
          {pricingList.map((pricing) => (
            <Card
              key={pricing.title}
              // className={
              //   pricing.recommended
              //     ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10'
              //     : ''
              // }
              className='border-2 border-customTan'
            >
              <CardHeader className='h-fit-content'>
                <CardTitle className='text-xl flex item-center justify-between'>
                  {pricing.title}
                  {pricing.recommended ? (
                    <Badge variant='secondary' className='text-sm text-primary'>
                      Recommended
                    </Badge>
                  ) : null}
                </CardTitle>
                {/* <div>
                  <span className='text-3xl font-bold'>${pricing.price}</span>
                  <span className='text-muted-foreground'>
                    {' '}
                    /{pricing.duration}
                  </span>
                </div> */}

                <CardDescription>{pricing.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <Button asChild className='w-full cursor-pointer'>
                  <Link target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLScO0hCwTeIMUY7MlAf3K74_UZ7DCI8lqHNy_syXOAGACE4zbg/viewform?usp=dialog'>Get Started!</Link>
                </Button>
              </CardContent>

              <hr className='w-4/5 m-auto mb-4' />

              <CardFooter className='flex'>
                <div className='space-y-4'>
                  {pricing.benefitList.map((benefit) => (
                    <span key={benefit} className='flex'>
                      <Check className='text-customBrown' />{' '}
                      <h3 className='ml-2'>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
