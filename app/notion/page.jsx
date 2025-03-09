import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
    title: "Notion Templates",
    description: "Systemtize your life and business and get more done with these Notion templates.",
    keywords: "notion, productivity, templates",
    openGraph: {
      title: "Notion Templates",
      description: "Systemtize your life and business and get more done with these Notion templates.",
      type: "website",
      url: "https://www.nicolasbolt.com/notion",
      images: [
        {
          url: "https://www.nicolasbolt.com/og-notion.svg",
          width: 1200,
          height: 630,
          alt: "Notion Templates Social Image",
        },
      ],
    },
    alternates: {
      canonical: './',
    },
  };

const cardData = [
    {
        image: '/notion.png',
        title: 'Yearly Goals Template',
        content: 'This is a simple template to help you set your yearly goals. It is a good idea to have a clear vision of what you want to achieve in the upcoming year. This template will help you set your goals, break them down into smaller goals, and track your progress.',
        href: '/notion/notion-yearly-goals'
    },

    {
        image: '/notion-software.png',
        title: 'Software Project Management',
        content: 'This template helps you manage your software projects effectively. It includes sections for project planning, task management, and progress tracking to ensure your projects are completed on time and within budget.',
        href: '/notion/software-project-management'
    },
    {
        image: '/notion-outreach.png',
        title: 'Cold Outreach',
        content: 'This template is designed to help you with your cold outreach efforts. It includes sections for contact information, outreach scripts, follow-up schedules, and tracking responses to ensure you can effectively manage your outreach campaigns.',
        href: '/notion/cold-outreach'
    },
    {
        image: '/content-planner.png',
        title: 'Content Planner',
        content: 'Manage your process for creating content better with this template.  It gives you a process for determining your positioning, handling daily tasks, planning for the week and planning out months in advance.',
        href: '/notion/content-planner'
    },
    {
        image: '/language-learning-cover.png',
        title: 'Language Learning',
        content: 'Easily organize your learning across multiple languages and track your progress with ease. Use this template to master a new language with this comprehensive language learning template.',
        href: '/notion/language-learning'
    }
];

const Notion = () => {
return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-4 md:mb-0 pb-4'>
        {cardData.map((card, index) => (
            <Card key={index}>
                <CardHeader>
                    <img src={card.image} alt={card.title} className='rounded w-3/4 mx-auto' />
                    <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{card.content}</p>
                </CardContent>

                <CardFooter>
                    <Button asChild className='mt-auto'><Link href={card.href}>Get the Template!</Link></Button>
                </CardFooter>
            </Card>
        ))}
    </div>
)
}

export default Notion
