'use client'
import { Button } from '@nextui-org/react'
import React from 'react'
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
      <label>{element}</label>
      {isAssigned && (
        <>
          {statPoints === 72 ? (
            <Button
              onClick={changeStats}
              name='decrement'
              data-testid='decrement'
              data-element={element}
              isDisabled
            >
              -
            </Button>
          ) : (
            <>
              <Button
                onClick={changeStats}
                name='decrement'
                data-testid='decrement'
                data-element={element}
              >
                -
              </Button>
            </>
          )}
        </>
      )}
      <label className='m-2 w-3 max-w-3'>{stats}</label>
      {isAssigned && (
        <>
          {statPoints <= 0 ? (
            <Button
              onClick={changeStats}
              name='increment'
              data-element={element}
              data-testid='increment'
              isDisabled
            >
              +
            </Button>
          ) : (
            <>
              <Button
                onClick={changeStats}
                name='increment'
                data-element={element}
                data-testid='increment'
              >
                +
              </Button>
            </>
          )}
        </>
      )}
      <br />
    </>
  )
}
