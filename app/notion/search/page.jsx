import Link from 'next/link'
import { TemplateSearch } from '@/components/search/TemplateSearch'
import { cardData, SEARCH_OPTIONS } from '@/constants/notionTemplates'
import QueryCardList from '@/components/search/QueryCardList'
import { Suspense } from 'react'

// Create static metadata that doesn't depend on searchParams
export const metadata = {
  title: 'Search Notion Templates',
  description: 'Search for templates to systemize your life and business and get more done with Notion.',
  keywords: [
    "notion templates",
    "productivity",
    "organization",
  ].join(", "),
  openGraph: {
    title: 'Search Notion Templates',
    description: 'Search for templates to systemize your life and business and get more done with Notion.',
    type: "website",
    url: "https://www.nicolasbolt.com/notion/search",
  },
  alternates: {
    canonical: 'https://www.nicolasbolt.com/notion/search',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    nocache: true,
  },
}

// Make the page static by removing async and parameters
export default function SearchPage() {
  return (
    <div className="p-4">
      <nav className="mb-6">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {[{ name: 'All Templates', href: '/notion' }, ...SEARCH_OPTIONS.map(opt => ({ 
            name: opt.label,
            href: `/notion/category/${opt.value}`
          }))].map((category, index) => (
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
      
      <div className="my-8">
        <Suspense>
          <TemplateSearch templates={cardData} />
        </Suspense>
      </div>
      
      <Suspense>
        <QueryCardList />
      </Suspense>
    </div>
  )
}