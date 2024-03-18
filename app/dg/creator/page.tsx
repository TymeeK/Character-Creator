import React, { useState } from 'react'
import Stats from './stats/stats'
import { Input } from '@/components/ui/input'
import ProfessionDropDown from './professions/page'

const Creator = () => {
  return (
    <>
      <div className='flex h-screen w-screen justify-center'>
        <div className='w-3/4'>
          <h1 className='text-center'>Agent Creation</h1>
          <Input type='text' placeholder='Character Name' />
          <h2>How would you like to determine your stats?</h2>
          <Stats title='Stats Method' placeholder='Choose Stats Method' />
        </div>
      </div>
    </>
  )
}

export default Creator
