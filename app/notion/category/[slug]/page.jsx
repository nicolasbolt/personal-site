import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TemplateSearch } from '@/components/search/TemplateSearch'
import { cardData, SEARCH_OPTIONS } from '@/constants/notionTemplates'
import { notFound } from 'next/navigation'
import { cn, getTagColorClass } from '@/lib/utils'

export function generateStaticParams() {
  // Generate static pages for all category options
  return SEARCH_OPTIONS.map((option) => ({
    slug: option.value
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const option = SEARCH_OPTIONS.find(opt => opt.value === slug)

  if (!option) {
    return {
      title: "Category Not Found",
      description: "Could not find the requested category."
    }
  }

  return {
    title: `${option.label} Notion Templates`,
    description: `Find the best ${option.label.toLowerCase()} Notion templates to systemize your workflow and boost productivity.`,
    keywords: [
      "notion templates",
      option.label.toLowerCase(),
      "productivity",
      "organization",
    ].join(", "),
  }
}

export default async function CategoryPage({ params }) {
  const { slug } = await params
  const option = SEARCH_OPTIONS.find(opt => opt.value === slug)
  
  if (!option) {
    notFound()
  }

  const filteredTemplates = cardData.filter(template => 
    template.title.toLowerCase().includes(slug) ||
    template.content.toLowerCase().includes(slug) ||
    template.tags.some(tag => tag.includes(slug))
  )

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
              className={`px-3 py-1.5 ${category.href === `/notion/category/${slug}` ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'} hover:bg-secondary/80 rounded-full text-sm font-medium transition-colors`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="my-8">
        <TemplateSearch templates={filteredTemplates} initialQuery={option.label} />
      </div>
      
      <h1 className="text-4xl font-bold text-center my-8">
        Top {filteredTemplates.length} {option.label} Templates
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