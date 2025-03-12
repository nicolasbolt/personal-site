import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TemplateSearch } from '@/components/search/TemplateSearch'
import { cardData, popularCategories } from '@/constants/notionTemplates'
import { cn, getTagColorClass } from '@/lib/utils'
import { Suspense } from 'react'

export const metadata = {
  title: "Notion Templates",
  description: "Systemtize your life and business and get more done with these Notion templates.",
  keywords: [
    "notion templates",
    "productivity",
    "digital organization",
    "project management",
    "content planning",
    "goal tracking",
  ].join(", "),
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
    canonical: 'https://www.nicolasbolt.com/notion',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Notion Templates",
    description: "Systemtize your life and business and get more done with these Notion templates.",
    images: ["https://www.nicolasbolt.com/og-notion.svg"],
  },
}

export default function Notion() {
    return (
        <div className="p-4">
            <nav className="mb-6">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                    {popularCategories.map((category, index) => (
                        <Link 
                            key={index} 
                            href={category.href}
                            className="px-3 py-1.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full text-sm font-medium transition-colors"
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </nav>
            
            {/* Search component */}
            <div className="my-8" role="search" aria-label="Search templates">
                <Suspense>
                    <TemplateSearch templates={cardData} />
                </Suspense>
            </div>
            
            <h1 className="text-4xl font-bold text-center my-8">Top Notion Templates</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:mb-0 pb-4 mt-6'>
                {cardData.map((template, index) => (
                    <Card key={index} className="flex flex-col h-full">
                        <CardHeader>
                            <img src={template.image} alt={template.title} className='rounded w-3/4 mx-auto' />
                            <h2 className='text-xl font-bold pt-3'>{template.title}</h2>
                            {/* <div className="flex flex-wrap gap-1 mt-2">
                            {template.tags.map((tag, tagIndex) => {
                                return (
                                    <div 
                                    key={tagIndex}
                                    className={cn(
                                        "px-2 py-0.5 text-xs rounded-full transition-colors",
                                        getTagColorClass(tag)
                                    )}
                                    >
                                    {tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </div>
                                );
                            })}
                            </div> */}
                        </CardHeader>
                        <CardContent>
                            <p>{template.content}</p>
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <Button asChild className='w-full'>
                                <Link href={template.href}>Get the Template!</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
