import React, { useState } from 'react'
import Stats from './stats/stats'
import { Input } from '@/components/ui/input'

const Creator = () => {
  return (
    <>
      <div className='w-screen flex justify-center bg-red-50 h-screen'>
        <div className='w-3/4 bg-red-100'>
          <h1>Agent Creation</h1>
          <Input type='text' placeholder='Character Name' />
          <h2>How would you like to determine your stats?</h2>
          <Stats title='Stats Method' placeholder='Choose Stats Method' />
        </div>
      </div>
    </>
  )
}

export default Creator
