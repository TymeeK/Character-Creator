import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
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
      <TableCell>
        <h2>{statName} </h2>
      </TableCell>
      <TableCell className='pl-20'>
        <h2>{statNum}</h2>
      </TableCell>
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
    <Table className='w-full table-auto h-full'>
      <TableHeader>
        <TableRow>
          <TableHead>
            <h2>Derived Stat</h2>
          </TableHead>
          <TableHead>
            <h2>Derived Points</h2>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {statLabels.map((element, index) => {
          return (
            <TableRow key={index}>
              <SpecificStats
                statName={element}
                statNum={statCalculate[index]}
              />
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default DerivedStats
