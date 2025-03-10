import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TemplateSearch } from '@/components/search/TemplateSearch'
import { cardData, SEARCH_OPTIONS } from '@/constants/notionTemplates'
import { notFound } from 'next/navigation'
import { cn, getTagColorClass } from '@/lib/utils'

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

export default async function SearchPage({ searchParams }) {
  const query = await searchParams.query || ''
  
  // If no query provided, show all templates
  if (!query) {
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
        
        <h1 className="text-4xl font-bold text-center my-8">
          Search Notion Templates
        </h1>
        
        <div className="text-center mb-8">
          <p>Enter a search term to find templates that match your needs.</p>
        </div>
      </div>
    )
  }
  
  const filteredTemplates = cardData.filter(template => 
    template.title.toLowerCase().includes(query.toLowerCase()) ||
    template.content.toLowerCase().includes(query.toLowerCase()) ||
    template.tags.some(tag => tag.includes(query.toLowerCase()))
  )
  
  if (filteredTemplates.length === 0) {
    return (
      <div className="p-4">
        <div className="my-8">
          <TemplateSearch templates={cardData} initialQuery={query} />
        </div>
        
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <h1 className="text-4xl font-bold mb-2">No Templates Found</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Sorry, we couldn't find any templates matching "{query}".
          </p>
          
          <Button asChild>
            <Link href="/notion">Browse All Templates</Link>
          </Button>
        </div>
      </div>
    )
  }

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
        <TemplateSearch templates={filteredTemplates} initialQuery={query} />
      </div>
      
      <h1 className="text-4xl font-bold text-center my-8">
        Top {filteredTemplates.length} Free Notion Templates For "{query}"
      </h1>
      
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:mb-0 pb-4 mt-6'>
        {filteredTemplates.map((template, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <img src={template.image} alt={template.title} className='rounded w-3/4 mx-auto' />
              <CardTitle className='text-xl pt-3'>{template.title}</CardTitle>
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