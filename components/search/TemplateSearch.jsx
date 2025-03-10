'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useRouter, useSearchParams } from 'next/navigation'
import { SEARCH_OPTIONS } from '@/constants/notionTemplates'
import Link from 'next/link'

export const TemplateSearch = ({ templates, initialQuery = '' }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredTemplates, setFilteredTemplates] = useState(templates)
    const [selectedCategory, setSelectedCategory] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)

    // Filter options based on search query
    const filteredOptions = useMemo(() => {
        if (!searchQuery) return SEARCH_OPTIONS
        
        return SEARCH_OPTIONS.filter(option => 
            option.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [searchQuery])

    useEffect(() => {
        const query = searchParams.get('query') || initialQuery
        if (query) {
            setSearchQuery(query)
            const filtered = templates.filter(template => 
                template.title.toLowerCase().includes(query.toLowerCase()) ||
                template.content.toLowerCase().includes(query.toLowerCase()) ||
                template.tags.some(tag => tag.includes(query.toLowerCase()))
            )
            setFilteredTemplates(filtered)
            
            // Hide suggestions if URL query matches input exactly
            setShowSuggestions(false)
        } else {
            setSearchQuery('')
            setFilteredTemplates(templates)
        }
    }, [searchParams, templates, initialQuery])

    const handleSearch = (e) => {
        e.preventDefault()
        
        // If there's just one option and it matches the query, use it as a category
        const exactMatch = SEARCH_OPTIONS.find(
            option => option.label.toLowerCase() === searchQuery.toLowerCase()
        )
        
        if (exactMatch) {
            // For exact category matches, go to category page
            router.push(`/notion/category/${exactMatch.value}`)
        } else if (searchQuery.trim()) {
            // For custom searches, use query parameter
            router.push(`/notion/search?query=${encodeURIComponent(searchQuery.trim())}`)
            // Hide suggestions after search
            setShowSuggestions(false)
        }
    }

    const handleCategorySelect = (value) => {
        const selectedOption = SEARCH_OPTIONS.find(option => option.value === value)
        setSelectedCategory(value)
        setSearchQuery(selectedOption?.label || '')
        router.push(`/notion/category/${value}`)
        // Hide suggestions after selection
        setShowSuggestions(false)
    }

    const handleInputChange = (e) => {
        const value = e.target.value
        setSearchQuery(value)
        
        // Clear selected category when user types
        if (selectedCategory) {
            setSelectedCategory('')
        }
        
        // Check if the current input matches the URL query
        const urlQuery = searchParams.get('query') || ''
        const shouldShowSuggestions = value.toLowerCase() !== urlQuery.toLowerCase()
        
        // Show suggestions if input doesn't match URL query
        setShowSuggestions(shouldShowSuggestions && value.length > 0)
    }

    // Handle focus and blur events
    const handleInputFocus = () => {
        // Only show suggestions on focus if there's input text
        if (searchQuery) {
            const urlQuery = searchParams.get('query') || ''
            const shouldShowSuggestions = searchQuery.toLowerCase() !== urlQuery.toLowerCase()
            setShowSuggestions(shouldShowSuggestions)
        }
    }

    const handleInputBlur = () => {
        // Use setTimeout to allow click events on suggestions to fire first
        setTimeout(() => {
            setShowSuggestions(false)
        }, 200)
    }

    return (
        <div className="w-full max-w-sm mx-auto">
            <form onSubmit={handleSearch} className="relative">
                <div className="flex gap-2">
                    <Input
                        type="text"
                        placeholder="Search templates..."
                        value={searchQuery}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        className="w-full"
                        autoComplete="off"
                    />
                    <Button type="submit" size="icon">
                        <Search className="h-4 w-4" />
                    </Button>
                </div>
                
                {searchQuery && 
                 filteredOptions.length > 0 && 
                 !selectedCategory && 
                 showSuggestions && (
                    <div className="absolute z-10 w-full bg-background border rounded-md shadow-lg mt-1">
                        <ul className="py-1">
                            {filteredOptions.map(option => (
                                <li 
                                    key={option.value}
                                    className="px-3 py-2 hover:bg-accent cursor-pointer"
                                    onClick={() => handleCategorySelect(option.value)}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </form>
        </div>
    )
}