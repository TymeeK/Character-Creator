'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Statistics } from '@/Delta Green/Types/types'
import { Label } from '@/components/ui/label'

interface Stats {
  label: string
  onClick: () => void
}

const RollButton = ({ label, onClick }: Stats) => {
  return (
    <div>
      <Label>{label}</Label>
      <Button variant='outline' onClick={onClick}>
        Roll {label}
      </Button>
    </div>
  )
}

const RollStats = () => {
  const [str, setStr] = useState<number>()
  const [dex, setDex] = useState<number>()
  const [con, setCon] = useState<number>()
  const [pow, setPow] = useState<number>()
  const [cha, setCha] = useState<number>()

  const rollStats = () => {
    const startingValues = [0, 0, 0, 0]
    for (let i = 0; i < 4; i++) {
      const randomRoll = Math.floor(Math.random() * 6) + 1
      startingValues[i] = randomRoll
    }
    const min: number = Math.min(...startingValues)
    const rollValues: number[] = startingValues.filter(
      (element: number) => element !== min
    )
    const totalValue: number = rollValues.reduce(
      (sum: number, current: number) => sum + current,
      0
    )
    return totalValue
  }

  const rollStr = () => {
    const strength: number = rollStats()
    setStr(strength)
  }

  const rollDex = () => {
    const dexterity: number = rollStats()
    setDex(dexterity)
  }

  const rollCon = () => {
    const constitution: number = rollStats()
    setCon(constitution)
  }

  const rollPow = () => {
    const power: number = rollStats()
    setPow(power)
  }

  const rollCha = () => {
    const charisma: number = rollStats()
    setCha(charisma)
  }

  const stats: Stats[] = [
    { label: 'Strength', onClick: rollStr },
    { label: 'Dexterity', onClick: rollDex },
    { label: 'Constitution', onClick: rollCon },
    { label: 'Power', onClick: rollPow },
    { label: 'Charisma', onClick: rollCha },
  ]

  return (
    <>
      <div className='flex bg-red-500'>
        {stats.map((element, index) => {
          return (
            <RollButton
              key={index}
              label={element.label}
              onClick={element.onClick}
            />
          )
        })}
      </div>
    </>
  )
}

export default RollStats
