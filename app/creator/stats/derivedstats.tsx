import { Label } from '@/components/ui/label'
import React, { ReactNode, useEffect, useState } from 'react'

type props = {
  strength: number
  constitution: number
  power: number
}

export const calculateHP = (strength: number, constitution: number): number => {
  return Math.ceil((strength + constitution) / 2)
}

export const calculateSanity = (power: number): number => {
  return power * 5
}

export const calculateBP = (sanity: number, power: number): number => {
  return sanity - power
}
const DerivedStats = ({ strength, constitution, power }: props) => {
  return (
    <>
      <div>
        <Label>Hit Points: </Label>
        <Label>{calculateHP(strength, constitution)}</Label>
      </div>
      <div>
        <Label>Willpower Points: </Label>
        <Label>{power}</Label>
      </div>
      <div>
        <Label>Sanity: </Label>
        <Label>{calculateSanity(power)}</Label>
      </div>
      <div>
        <Label>Breaking Point:</Label>
        <Label>{calculateBP(calculateSanity(power), power)}</Label>
      </div>
    </>
  )
}

export default DerivedStats
