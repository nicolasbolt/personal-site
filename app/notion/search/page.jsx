import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TemplateSearch } from '@/components/search/TemplateSearch'
import { cardData, SEARCH_OPTIONS } from '@/constants/notionTemplates'
import QueryCardList from '@/components/search/QueryCardList'
import { Suspense } from 'react'

export function generateMetadata() {
  return {
    title: 'Search Notion Templates',
    description: 'Search for templates to systemize your life and business and get more done with Notion.',
    keywords: [
      "notion templates",
      "productivity",
      "organization",
    ].filter(Boolean).join(", "),
  }
}

// Loading component for the Suspense fallback
const LoadingResults = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-muted rounded w-3/4 mx-auto mb-8"></div>
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border rounded-lg p-6 flex flex-col">
          <div className="w-3/4 h-40 bg-muted rounded mx-auto mb-4"></div>
          <div className="h-6 bg-muted rounded mb-4"></div>
          <div className="h-24 bg-muted rounded mb-4"></div>
          <div className="h-10 bg-muted rounded mt-auto"></div>
        </div>
      ))}
    </div>
  </div>
)

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
        <TemplateSearch templates={cardData} />
      </div>
      
      <Suspense fallback={<LoadingResults />}>
        <QueryCardList />
      </Suspense>
    </div>
  )
}