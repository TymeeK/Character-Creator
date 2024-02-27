'use client'
import React from 'react'
import { Label } from '@/components/ui/label'

type Props = {
  element: string
  stats: number
}

export const StatLabel: React.FC<Props> = ({ element, stats }) => {
  return (
    <div>
      <Label>{element}: </Label>
      <Label>{stats}</Label>
    </div>
  )
}
