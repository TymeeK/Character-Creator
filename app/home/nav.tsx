import Logo from '../../Images/logo.png'
import React from 'react'
import Image from 'next/image'

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
          <label>Home |</label>
        </a>
        <a>
          <label> About |</label>
        </a>
        <a>
          <label> Contact</label>
        </a>
        <label> Login </label>
        <button>Signup </button>
      </div>
    </div>
  )
}

export default Nav
