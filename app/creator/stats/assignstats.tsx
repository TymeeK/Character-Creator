'use client'
import { Statistics } from '@/Delta Green/Types/types'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { StatLabel } from './statlabel'

export const subtract = (statPoints: number, numToSubtract: number): number => {
  return statPoints - numToSubtract
}

export const add = (statPoints: number, numToSubtract: number): number => {
  return statPoints + numToSubtract
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
            />
          )
        })}
      </div>
    </>
  )
}

export default AssignStats
