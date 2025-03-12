'use client';

import * as React from 'react';
import Link from 'next/link';

import { Button } from './ui/button';
import { cn } from '../lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

export default function PublicNav() {
  return (
    <header role="banner" className="site-header">
      <div className='flex py-5 justify-between container mx-auto'>
        <NavigationMenu className='flex-grow' aria-label="Main Navigation">
          <NavigationMenuList>
            {/* Home/Logo Link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/'
                className={navigationMenuTriggerStyle()}
                aria-label="Nicolas Bolt - Home Page"
              >
                <span className='text-xl text-purple-800'>Nicolas Bolt</span>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Free Tools Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger aria-expanded="false">Free Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul 
                  className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'
                  role="menu"
                  aria-label="Free Tools Menu"
                >
                  <li className='row-span-3' role="presentation">
                    <NavigationMenuLink asChild>
                      <a
                        className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                        href='/'
                        role="menuitem"
                      >
                        <div className='mb-2 mt-4 text-lg font-medium'>
                          Free Tools
                        </div>
                        <p className='text-sm leading-tight text-muted-foreground'>
                          Discover a variety of resources, blog posts, and
                          guides to help you with your language learning
                          journey.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  
                  <ListItem 
                    href='/notion' 
                    title='Notion Templates'
                    role="menuitem"
                  >
                    Notion Templates to better organize your language learning!
                  </ListItem>
                  
                  <ListItem 
                    href='/marketing-boilerplate' 
                    title='Marketing Boilerplate'
                    role="menuitem"
                  >
                    Marketing landing page to better sell your products
                  </ListItem>
                  
                  <ListItem 
                    href='/saas-starter-app' 
                    title='SaaS Starter App'
                    role="menuitem"
                  >
                    A SaaS starter app to quickly launch complete products
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About Link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/about'
                className={navigationMenuTriggerStyle()}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
              </div>
    </header>
  );
}

const ListItem = ({ className, title, children, role, ...props }) => {
  return (
    <li role="presentation">
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          role={role}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = 'ListItem';