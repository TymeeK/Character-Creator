import { Label } from '@/components/ui/label'
import React, { useState } from 'react'

type props = {
  strength: number
  constitution: number
}

export const calculateHP = (strength: number, constitution: number): number => {
  return Math.ceil((strength + constitution) / 2)
}

const DerivedStats = ({ strength, constitution }: props) => {
  const [hp, setHP] = useState()

  return (
    <>
      <Label>hp</Label>
      <Label>{hp}</Label>
    </>
  )
}

export default DerivedStats
