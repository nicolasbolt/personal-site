'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cardData } from '@/constants/notionTemplates'
import { useSearchParams } from 'next/navigation'
import { cn, getTagColorClass } from '@/lib/utils'

const QueryCardList = ({ initialQuery = '' }) => {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(initialQuery)
  const [filteredTemplates, setFilteredTemplates] = useState([])
  const [hasResults, setHasResults] = useState(true)

  useEffect(() => {
    // Get query from URL or from initialQuery
    const currentQuery = searchParams.get('query') || initialQuery
    setQuery(currentQuery)
    
    if (currentQuery) {
      const filtered = cardData.filter(template => 
        template.title.toLowerCase().includes(currentQuery.toLowerCase()) ||
        template.content.toLowerCase().includes(currentQuery.toLowerCase()) ||
        template.tags.some(tag => tag.includes(currentQuery.toLowerCase()))
      )
      setFilteredTemplates(filtered)
      setHasResults(filtered.length > 0)
    } else {
      setFilteredTemplates([])
      setHasResults(false)
    }
  }, [searchParams, initialQuery])

  if (!query) {
    return (
        <>
        <div>
        <h1 className="text-3xl font-bold text-center my-8">
          Search Notion Templates
        </h1>
        
        <div className="text-center mb-8">
          <p>Enter a search term to find templates that match your needs.</p>
        </div>
        
        {/* Show some featured templates */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-6">Popular Templates</h2>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:mb-0 pb-4 mt-6'>
            {cardData.slice(0, 3).map((template, index) => (
              <Link href={template.href} key={index} className="block">
                <div className="border rounded-lg p-4 hover:bg-accent/30 transition-colors h-full">
                  <img src={template.image} alt={template.title} className='rounded w-3/4 mx-auto mb-3' />
                  <h3 className="font-bold">{template.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </>
    )
  }
  
  if (!hasResults) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-4xl font-bold mb-2">No Templates Found</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Sorry, we couldn't find any templates matching "{query}".
        </p>
        
        <Button asChild>
          <Link href="/notion">Browse All Templates</Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">
        Top {filteredTemplates.length} Free Notion Templates For "{query}"
      </h1>
      
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:mb-0 pb-4 mt-6'>
        {filteredTemplates.map((template, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <img src={template.image} alt={template.title} className='rounded w-3/4 mx-auto' />
              <CardTitle className='text-xl pt-3'>{template.title}</CardTitle>
              {/* <div className="flex flex-wrap gap-1 mt-2"> */}
                {/* {template.tags.map((tag, tagIndex) => (
                  <Link 
                    key={tagIndex}
                    href={`/notion/category/${tag}`}
                    className={cn(
                      "px-2 py-0.5 text-xs rounded-full transition-colors",
                      getTagColorClass(tag)
                    )}
                  >
                    {tag.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Link>
                ))} */}
              {/* </div> */}
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
    </>
  )
}

export default QueryCardList
