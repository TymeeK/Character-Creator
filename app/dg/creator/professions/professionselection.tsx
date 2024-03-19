'use client'
import React, { useState } from 'react'
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

  const selectProfession = (e: string) => {
    const selected: Professions | undefined = professions.find(
      (profession: Professions) => profession.name === e
    )
    setCurrentProfession(selected)
  }

  return (
    <>
      <h1 className='text-center'>Professions</h1>
      <div className='flex h-screen w-screen flex-col items-center'>
        <div className='w-3/4 bg-purple-100'>
          <h2>Select your Profession</h2>
          <Dropdown>
            <DropdownTrigger>
              <Button variant='bordered'>Professions</Button>
            </DropdownTrigger>
            <DropdownMenu>
              {professions.map((profession: Professions, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <DropdownItem key={profession.name}>
                      {profession.name}
                    </DropdownItem>
                  </React.Fragment>
                )
              })}
            </DropdownMenu>
          </Dropdown>
          {/* <Select onValueChange={selectProfession}>
            <SelectTrigger>
              <SelectValue placeholder='Professions' />
            </SelectTrigger>
            <SelectContent>
              {professions.map((profession: Professions, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <SelectItem value={profession.name}>
                      {profession.name}
                    </SelectItem>
                  </React.Fragment>
                )
              })}
            </SelectContent>
          </Select> */}
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
