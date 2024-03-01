'use client'
import { Statistics } from '@/Delta Green/Types/types'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { StatLabel } from './statlabel'

export const isLessThanDefault = (statPoints: number): boolean => {
  return statPoints < 72 ? true : false
}

export const isGreaterThanZero = (statPoints: number): boolean => {
  return statPoints > 0 ? true : false
}

export const subtract = (statPoints: number, num: number): number => {
  return isGreaterThanZero(statPoints) ? statPoints - num : statPoints
}

export const add = (statPoints: number, num: number): number => {
  return isLessThanDefault(statPoints) ? statPoints + num : statPoints
}

export const isMax = (stat: number): boolean => {
  return stat >= 18 ? true : false
}

const AssignStats = () => {
  const [statPoints, setStatPoints] = useState(72)
  const [statNums, setStatNums] = useState<Statistics<number>>({
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Power: 0,
    Charisma: 0,
  })

  const changeStats = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const button = e.target as HTMLButtonElement
    const element = button.dataset.element as keyof Statistics<number>

    if (button.name === 'increment') {
      isMax(statNums[element])
        ? setStatPoints(prev => prev)
        : setStatPoints(subtract(statPoints, 1))

      setStatNums(prevState => ({
        ...prevState,
        [element]: isMax(prevState[element])
          ? prevState[element]
          : prevState[element] + 1,
      }))
    } else {
      isGreaterThanZero(statNums[element])
        ? setStatPoints(add(statPoints, 1))
        : setStatPoints(prev => prev)

      setStatNums(prevState => ({
        ...prevState,
        [element]: isGreaterThanZero(prevState[element])
          ? prevState[element] - 1
          : prevState[element],
      }))
    }
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
