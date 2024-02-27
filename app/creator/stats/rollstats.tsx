'use client'
import { Button } from '@/components/ui/button'
import React, { useRef, useState } from 'react'
import { Statistics } from '@/Delta Green/Types/types'
import { StatLabel } from './statlabel'

export const rollValues = (startingValues: number[]) => {
  return startingValues.map(() => Math.floor(Math.random() * 6) + 1)
}
export const areAllElementsSame = (values: number[]) => {
  const firstElement = values[0]
  while (values.every((element) => element === firstElement)) {
    values = rollValues([0, 0, 0, 0])
  }
  return values
}
export const removeSmallest = (values: number[]) => {
  return values.filter((element) => element !== Math.min(...values))
}

export const calculateTotal = (values: number[]) => {
  return values.reduce((sum, current) => sum + current)
}

const RollStats = () => {
  const [statsNum, setStatsNum] = useState<Statistics<number>>({
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Power: 0,
    Charisma: 0,
  })
  const numRolls = useRef(3)

  const rollStats = () => {
    const stats: Statistics<number> = {
      Strength: 0,
      Dexterity: 0,
      Constitution: 0,
      Power: 0,
      Charisma: 0,
    }
    const startingValues = [0, 0, 0, 0]
    for (const key in stats) {
      const rolledValues = rollValues(startingValues)
      const newValues = areAllElementsSame(rolledValues)
      const removeLowest = removeSmallest(newValues)
      const total = calculateTotal(removeLowest)
      stats[key as keyof Statistics<number>] = total
    }
    setStatsNum(stats)
    numRolls.current -= 1
  }

  return (
    <>
      <div className='flex h-screen flex-col'>
        {numRolls.current <= 0 ? (
          <Button onClick={rollStats} disabled>
            Roll Stats ({numRolls.current} tries left)
          </Button>
        ) : (
          <Button onClick={rollStats}>
            Roll Stats ({numRolls.current} tries left)
          </Button>
        )}

        {Object.keys(statsNum).map((element, index) => {
          return (
            <StatLabel
              key={index}
              element={element}
              stats={statsNum[element as keyof Statistics<number>]}
            />
          )
        })}
      </div>
    </>
  )
}

export default RollStats
