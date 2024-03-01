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

  const incrementStat = (
    button: HTMLButtonElement,
    element: keyof Statistics<number>,
    deltaValue: number
  ) => {
    if (button.name !== 'increment') {
      return
    }
    isMax(statNums[element])
      ? setStatPoints(prev => prev)
      : setStatPoints(subtract(statPoints, deltaValue))

    setStatNums(prevState => ({
      ...prevState,
      [element]: isMax(prevState[element])
        ? prevState[element]
        : add(prevState[element], deltaValue),
    }))
  }
  const decrementStat = (
    button: HTMLButtonElement,
    element: keyof Statistics<number>,
    deltaValue: number
  ) => {
    if (button.name !== 'decrement') {
      return
    }

    isGreaterThanZero(statNums[element])
      ? setStatPoints(add(statPoints, deltaValue))
      : setStatPoints(prev => prev)

    setStatNums(prevState => ({
      ...prevState,
      [element]: isGreaterThanZero(prevState[element])
        ? subtract(prevState[element], deltaValue)
        : prevState[element],
    }))
  }

  const changeStats = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const button = e.target as HTMLButtonElement
    const element = button.dataset.element as keyof Statistics<number>
    let deltaValue = 1
    let greaterThanMax = 0
    let lessThanZero = statNums[element]

    if (e.shiftKey) {
      deltaValue = 5
      greaterThanMax = add(statNums[element], deltaValue)
      lessThanZero = subtract(statNums[element], deltaValue)
    }
    if (isMax(greaterThanMax) && button.name === 'increment') {
      const difference = subtract(statNums[element], 18)
      setStatPoints(prevState => add(prevState, difference))
      setStatNums(prevState => ({
        ...prevState,
        [element]: 18,
      }))
      return
    }
    if (!isGreaterThanZero(lessThanZero) && button.name === 'decrement') {
      const sum = add(statNums[element], 0)
      setStatPoints(prevState => add(prevState, sum))
      setStatNums(prevState => ({ ...prevState, [element]: 0 }))
      return
    }
    incrementStat(button, element, deltaValue)
    decrementStat(button, element, deltaValue)
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
              statPoints={statPoints}
            />
          )
        })}
      </div>
    </>
  )
}

export default AssignStats
