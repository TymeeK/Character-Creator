'use client'
import React from 'react'

export const calculateHP = (strength: number, constitution: number): number => {
  return Math.ceil((strength + constitution) / 2)
}

export const calculateSanity = (power: number): number => {
  return power * 5
}

export const calculateBP = (sanity: number, power: number): number => {
  return sanity - power
}

type specificstats = {
  statName: string
  statNum: number
}

const SpecificStats = ({ statName, statNum }: specificstats) => {
  return (
    <>
      <h2 className='inline'>{statName} </h2>
      <h2 className='inline'>{statNum}</h2>
      <br />
    </>
  )
}

type props = {
  strength: number
  constitution: number
  power: number
}

const DerivedStats = ({ strength, constitution, power }: props) => {
  const statLabels: string[] = [
    'Hit Points',
    'Willpower Points',
    'Sanity',
    'Breaking Point',
  ]

  const statCalculate = [
    calculateHP(strength, constitution),
    power,
    calculateSanity(power),
    calculateBP(calculateSanity(power), power),
  ]

  return (
    <>
      <h2>Derived Stats</h2>

      <h2>Derived Points</h2>

      {statLabels.map((element, index) => {
        return (
          <SpecificStats statName={element} statNum={statCalculate[index]} />
        )
      })}
    </>
  )
}

export default DerivedStats
