'use client'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { TableCell } from '@/components/ui/table'

type Props = {
  element: string
  stats: number
  isAssigned: boolean
  changeStats?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  statPoints: number
}

export const StatLabel: React.FC<Props> = ({
  element,
  stats,
  isAssigned,
  changeStats,
  statPoints,
}) => {
  return (
    <>
      <TableCell>{element}</TableCell>
      <TableCell>
        {isAssigned && (
          <>
            {statPoints === 72 ? (
              <Button
                onClick={changeStats}
                name='decrement'
                data-testid='decrement'
                data-element={element}
                disabled
              >
                -
              </Button>
            ) : (
              <Button
                onClick={changeStats}
                name='decrement'
                data-testid='decrement'
                data-element={element}
              >
                -
              </Button>
            )}
          </>
        )}
        <Label className='mr-2'>{stats}</Label>
        {isAssigned && (
          <>
            {statPoints <= 0 ? (
              <Button
                onClick={changeStats}
                name='increment'
                data-element={element}
                data-testid='increment'
                disabled
              >
                +
              </Button>
            ) : (
              <Button
                onClick={changeStats}
                name='increment'
                data-element={element}
                data-testid='increment'
              >
                +
              </Button>
            )}
          </>
        )}
      </TableCell>
    </>
  )
}
