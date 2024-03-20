'use client'
import React, { Key, useState } from 'react'
import { professions, Professions } from '@/Delta Green/Types/professions'
import ProfessionSkills from './professionskills'
import OptionalSkills from './optionalskills'
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  Button,
  DropdownMenu,
} from '@nextui-org/react'

const ProfessionSelection = () => {
  const [currentProfession, setCurrentProfession] = useState<Professions>()

  const selectProfession = (e: Key) => {
    console.log(e)
    const selected: Professions | undefined = professions.find(
      (profession: Professions) => profession.name === e
    )

    setCurrentProfession(selected)
  }

  return (
    <>
      <h1 className='text-center'>Professions</h1>
      <div className='flex h-screen flex-col items-center'>
        <div className='w-3/4 bg-purple-100'>
          <h2>Select your Profession</h2>
          <Dropdown>
            <DropdownTrigger>
              <Button variant='bordered'>Professions</Button>
            </DropdownTrigger>
            <DropdownMenu
              onAction={selectProfession}
              aria-label='Profession List'
              items={professions}
            >
              {item => <DropdownItem key={item.name}>{item.name}</DropdownItem>}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className='flex w-3/4'>
          <div className='w-1/2'>
            <ProfessionSkills profession={currentProfession} />
          </div>
          <div className='w-1/2'>
            <OptionalSkills profession={currentProfession} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfessionSelection
