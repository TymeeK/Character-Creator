'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Logo from '../../Images/logo.png'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Nav: React.FC = () => {
  return (
    <div className='flex w-screen bg-purple-100'>
      <div className='w-1/2 '>
        <Avatar className=''>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>Logo</AvatarFallback>
        </Avatar>
        <h1 className='inline'>Company Name</h1>
      </div>
      <div className='w-1/2 bg-white'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}

export default Nav
