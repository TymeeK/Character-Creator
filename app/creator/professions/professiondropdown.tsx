'use client'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import React from 'react'
import { professions } from '@/Delta Green/Types/professions'

const ProfessionDropDown = () => {
  return (
    <>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder='Professions' />
        </SelectTrigger>
        <SelectContent>
          {professions.map((profession, index: number) => {
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
    </>
  )
}

export default ProfessionDropDown
