'use client'
import { Statistics } from '@/Delta Green/Types/types'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { StatLabel } from './statlabel'

export const subtract = (statPoints: number, num: number): number => {
  return statPoints - num
}

export const add = (statPoints: number, num: number): number => {
  return statPoints + num
}

export const isLessThanDefault = (statPoints: number): boolean => {
  return statPoints <= 72 ? true : false
}

export const isGreaterThanZero = (statPoints: number): boolean => {
  return statPoints > 0 ? true : false
}

const AssignStats = () => {
  const [statPoints, setStatPoints] = useState(72)
  const [statNums, setStatNums] = useState<Statistics<number>>({
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Power: 0,
    Charisma: 0,
  })
  const [str, setStr] = useState<number>(0)
  const [dex, setDex] = useState<number>(0)
  const [con, setCon] = useState<number>(0)
  const [pow, setPow] = useState<number>(0)
  const [cha, setCha] = useState<number>(0)

  const changeStats = (e) => {
    e.preventDefault()
    const decrement = subtract(statPoints, 1)
    console.log('Hello!!!!')
    setStatPoints(decrement)
  }

  return (
    <>
      <div>
        <Label>{statPoints} points remaining</Label>
        {Object.keys(statNums).map((element, index) => {
          return (
            <StatLabel
              key={index}
              element={element}
              stats={statNums[element as keyof Statistics<number>]}
              isAssigned={true}
              changeStats={changeStats}
            />
          )
        })}
      </div>
    </>
  )
}

export default AssignStats
