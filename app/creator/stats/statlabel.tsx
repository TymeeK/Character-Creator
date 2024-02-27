'use client'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

type Props = {
  element: string
  stats: number
  isAssigned: boolean
  onChange?: () => void
}

export const StatLabel: React.FC<Props> = ({ element, stats, isAssigned }) => {
  return (
    <div>
      <Label>{element}: </Label>
      {!isAssigned && <Label>{stats}</Label>}
      {isAssigned && <Input type='text' placeholder={`${element} stat`} />}
    </div>
  )
}
