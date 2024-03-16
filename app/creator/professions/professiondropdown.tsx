'use client'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import React from 'react'
import { professions, Professions } from '@/Delta Green/Types/professions'

const ProfessionDropDown = () => {
  return (
    <>
      <h1 className='text-center'>Professions</h1>
      <div className='flex h-screen w-screen flex-col items-center'>
        <div className='flex w-3/4 bg-purple-100'>
          <Select>
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
          </Select>
        </div>
      </div>
    </>
  )
}

export default ProfessionDropDown
