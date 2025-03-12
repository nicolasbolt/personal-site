import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { TemplateSearch } from '@/components/search/TemplateSearch'
import { cardData, SEARCH_OPTIONS } from '@/constants/notionTemplates'
import { notFound } from 'next/navigation'
import { cn, getTagColorClass } from '@/lib/utils'
import { Suspense } from 'react'
import Script from 'next/script'

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
  
  // Create a more descriptive title and description
  const title = `${option.label} Notion Templates | Nicolas Bolt`
  const description = `Find the best ${option.label.toLowerCase()} Notion templates to systemize your workflow and boost productivity. Free downloadable templates for ${option.label.toLowerCase()}.`
  
  // Get related categories for keywords
  const relatedCategories = SEARCH_OPTIONS
    .filter(opt => opt.value !== slug)
    .slice(0, 3)
    .map(opt => opt.label.toLowerCase())
  
  return {
    title,
    description,
    keywords: [
      "notion templates",
      option.label.toLowerCase(),
      "free templates",
      "productivity",
      "organization",
      ...relatedCategories
    ].join(", "),
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.nicolasbolt.com/notion/category/${slug}`,
      images: [
        {
          url: "https://www.nicolasbolt.com/og-notion.svg",
          width: 1200,
          height: 630,
          alt: `${option.label} Notion Templates`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ["https://www.nicolasbolt.com/og-notion.svg"],
    },
    alternates: {
      canonical: `https://www.nicolasbolt.com/notion/category/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
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

  // Count templates by related categories to suggest related content
  const relatedCategories = {}
  filteredTemplates.forEach(template => {
    template.tags.forEach(tag => {
      if (tag !== slug) {
        relatedCategories[tag] = (relatedCategories[tag] || 0) + 1
      }
    })
  })
  
  // Sort related categories by count
  const topRelatedCategories = Object.entries(relatedCategories)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([tag]) => {
      const categoryOption = SEARCH_OPTIONS.find(opt => opt.value === tag)
      return categoryOption ? {
        name: categoryOption.label,
        href: `/notion/category/${tag}`,
        count: relatedCategories[tag]
      } : null
    })
    .filter(Boolean)

  return (
    <>
      {/* Add structured data for enhanced search results */}
      <Script id="category-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "${option.label} Notion Templates",
          "description": "Find the best ${option.label.toLowerCase()} Notion templates to systemize your workflow and boost productivity.",
          "url": "https://www.nicolasbolt.com/notion/category/${slug}",
          "mainEntity": ${JSON.stringify(filteredTemplates.map(template => ({
            "@type": "CreativeWork",
            "name": template.title,
            "description": template.content,
            "image": template.image,
            "url": `https://www.nicolasbolt.com${template.href}`
          })))}
        }
      ` }} />
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
          <Suspense>
            <TemplateSearch templates={filteredTemplates} initialQuery={option.label} />
          </Suspense>
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
    </>
  )
}