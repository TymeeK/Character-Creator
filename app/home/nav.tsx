import Logo from '../../Images/logo.png'
import React from 'react'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const Nav: React.FC = () => {
  return (
    <div className='flex w-screen'>
      <div className='w-1/2 '>
        <Image
          className='inline rounded-full'
          src={Logo}
          height={50}
          width={50}
          alt='logo'
        />
        <h1 className='inline p-0 m-0'>Gameplay Tabletop</h1>
      </div>
      <div className='text-right w-1/2 bg-white'>
        <a>
          <Label>Home |</Label>
        </a>
        <a>
          <Label> About |</Label>
        </a>
        <a>
          <Label> Contact</Label>
        </a>
        <Label> Login </Label>
        <Button>Signup </Button>
      </div>
    </div>
  )
}

export default Nav
