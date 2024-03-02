'use client'
import { Statistics } from '@/Delta Green/Types/types'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { StatLabel } from './statlabel'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

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
  const [statPool, setStatPool] = useState(72)
  const [statPoint, setStatPoint] = useState<Statistics<number>>({
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Power: 0,
    Charisma: 0,
  })

  const removeFromStatPool = (
    element: keyof Statistics<number>,
    delta: number
  ) => {
    isMax(statPoint[element])
      ? setStatPool(prev => prev)
      : setStatPool(() => {
          const total = subtract(statPool, delta)
          if (!isGreaterThanZero(total)) return 0
          return total
        })
  }

  const addToStatPoints = (
    element: keyof Statistics<number>,
    delta: number
  ) => {
    setStatPoint(prevState => ({
      ...prevState,
      [element]: isMax(prevState[element])
        ? prevState[element]
        : add(prevState[element], delta),
    }))
  }

  const incrementStat = (
    button: HTMLButtonElement,
    element: keyof Statistics<number>,
    delta: number
  ) => {
    if (button.name !== 'increment') {
      return
    }
    removeFromStatPool(element, delta)
    addToStatPoints(element, delta)
  }

  const addToStatPool = (element: keyof Statistics<number>, delta: number) => {
    isGreaterThanZero(statPoint[element])
      ? setStatPool(add(statPool, delta))
      : setStatPool(prev => prev)
  }

  const removeStatPoints = (
    element: keyof Statistics<number>,
    delta: number
  ) => {
    setStatPoint(prevState => ({
      ...prevState,
      [element]: isGreaterThanZero(prevState[element])
        ? subtract(prevState[element], delta)
        : prevState[element],
    }))
  }
  const decrementStat = (
    button: HTMLButtonElement,
    element: keyof Statistics<number>,
    delta: number
  ) => {
    if (button.name !== 'decrement') {
      return
    }
    addToStatPool(element, delta)
    removeStatPoints(element, delta)
  }

  const checkUpperStatBounds = (element: keyof Statistics<number>) => {
    const difference = subtract(statPoint[element], 18)
    setStatPool(prevState => add(prevState, difference))
    setStatPoint(prevState => ({
      ...prevState,
      [element]: 18,
    }))
  }

  const checkLowerStatBounds = (element: keyof Statistics<number>) => {
    const sum = add(statPoint[element], 0)
    setStatPool(prevState => add(prevState, sum))
    setStatPoint(prevState => ({ ...prevState, [element]: 0 }))
  }

  const changeStats = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const button = e.target as HTMLButtonElement
    const element = button.dataset.element as keyof Statistics<number>
    let delta = 1
    let greaterThanMax = 0
    let lessThanZero = statPoint[element]

    if (e.shiftKey) {
      delta = 5
      greaterThanMax = add(statPoint[element], delta)
      lessThanZero = subtract(statPoint[element], delta)
    }
    if (isMax(greaterThanMax) && button.name === 'increment') {
      checkUpperStatBounds(element)
      return
    }
    if (!isGreaterThanZero(lessThanZero) && button.name === 'decrement') {
      checkLowerStatBounds(element)
      return
    }

    incrementStat(button, element, delta)
    decrementStat(button, element, delta)
  }

  return (
    <>
      <div>
        <Label>{statPool} points remaining</Label>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Stats</TableHead>
              <TableHead>Stat Points</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.keys(statPoint).map((element, index) => {
              return (
                <TableRow key={index}>
                  <StatLabel
                    element={element}
                    stats={statPoint[element as keyof Statistics<number>]}
                    isAssigned={true}
                    changeStats={changeStats}
                    statPoints={statPool}
                  />
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default AssignStats
