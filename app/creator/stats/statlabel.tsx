'use client'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { TableCell } from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

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
      <TableCell className='font-bold'>{element}</TableCell>
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      onClick={changeStats}
                      name='decrement'
                      data-testid='decrement'
                      data-element={element}
                    >
                      -
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Shift + click to subtract 5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </>
        )}
        <Label className='m-2 w-3 max-w-3'>{stats}</Label>
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
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      onClick={changeStats}
                      name='increment'
                      data-element={element}
                      data-testid='increment'
                    >
                      +
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Shift + click to add 5</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </>
        )}
      </TableCell>
    </>
  )
}
