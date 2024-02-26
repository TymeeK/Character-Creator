'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Statistics } from '@/Delta Green/Types/types'

interface Stats {
  label: string
  onClick: () => void
}

export const RollButton = ({ label, onClick }: Stats) => {
  return (
    <div>
      <Label>{label}</Label>
      {/* <Button variant='outline' onClick={onClick}>
        Roll {label}
      </Button> */}
    </div>
  )
}

export const rollValues = (startingValues: number[]) => {
  for (let i = 0; i < startingValues.length; i++) {
    startingValues[i] = Math.floor(Math.random() * 6) + 1
  }
  return startingValues
}

export const removeSmallest = (values: number[]) => {
  return values.filter((element) => element !== Math.min(...values))
}

export const calculateTotal = (values: number[]) => {
  return values.reduce((sum, current) => sum + current)
}

const RollStats = () => {
  const [str, setStr] = useState<number>()
  const [dex, setDex] = useState<number>()
  const [con, setCon] = useState<number>()
  const [pow, setPow] = useState<number>()
  const [cha, setCha] = useState<number>()

  const [statsNum, setStatsNum] = useState<Statistics<number>>({
    str: 0,
    dex: 0,
    con: 0,
    pow: 0,
    cha: 0,
  })

  const stats: Stats[] = [
    { label: 'Strength', onClick: rollStr },
    { label: 'Dexterity', onClick: rollDex },
    { label: 'Constitution', onClick: rollCon },
    { label: 'Power', onClick: rollPow },
    { label: 'Charisma', onClick: rollCha },
  ]

  function rollStr() {
    const strength: number = rollStartingValues()
    setStr(strength)
  }

  function rollDex() {
    const dexterity: number = rollStartingValues()
    setDex(dexterity)
  }

  function rollCon() {
    const constitution: number = rollStartingValues()
    setCon(constitution)
  }

  function rollPow() {
    const power: number = rollStartingValues()
    setPow(power)
  }

  function rollCha() {
    const charisma: number = rollStartingValues()
    setCha(charisma)
  }

  return (
    <>
      <div className='flex h-screen flex-col'>
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
