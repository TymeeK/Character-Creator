'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'

const ProfessionDropdown = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a character class" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Character Profession</SelectLabel>
          <SelectItem value="anthro">Anthropologist</SelectItem>
          <SelectItem value="hist">Historian</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default ProfessionDropdown
