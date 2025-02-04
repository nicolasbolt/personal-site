import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
    }
];

const Notion = () => {
return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-4 md:mb-0 mb-4'>
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
