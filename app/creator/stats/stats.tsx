'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React, { useState } from 'react'
import RollStats from './rollstats'

type props = {
  title: string
  placeholder: string
}

const Stats = ({ title, placeholder }: props) => {
  const [options, setOptions] = useState(['Roll Stats', 'Assign Stats'])
  const [rollStats, setRollStats] = useState<boolean | null>(null)

  const determineStatMethod = (e: string) => {
    if (e === 'Roll Stats') {
      setRollStats(true)
    } else {
      setRollStats(false)
    }
  }

  return (
    <>
      <Select onValueChange={determineStatMethod}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{title}</SelectLabel>
            {options.map((option, index) => {
              return (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>

      {rollStats !== null && rollStats && <RollStats />}
      {rollStats !== null && !rollStats && <>Roll stats is false </>}
      {rollStats === null && <>Roll stats is null</>}
    </>
  )
}

export default Stats