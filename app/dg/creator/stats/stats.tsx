'use client'
import React, { useState } from 'react'
import RollStats from './rollstats'
import AssignStats from './assignstats'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from '@nextui-org/react'

type props = {
  title: string
  placeholder: string
}

const Stats: React.FC<props> = ({ title, placeholder }: props) => {
  const [options, setOptions] = useState(['Roll Stats', 'Assign Stats'])
  const [rollStats, setRollStats] = useState<boolean | null>(null)
  const [buttonMessage, setButtonMessage] =
    useState<string>('Choose stat method')

  const determineStatMethod = (e: string | number | undefined) => {
    if (e === 'Roll Stats') {
      setRollStats(true)
      setButtonMessage('Roll Stats')
    } else {
      setRollStats(false)
      setButtonMessage('Assign Stats')
    }
  }

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button>{buttonMessage}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label='Static Actions'
          onAction={determineStatMethod}
        >
          {options.map((option, index) => {
            return <DropdownItem key={option}>{option}</DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>

      {rollStats !== null && rollStats && <RollStats />}
      {rollStats !== null && !rollStats && <AssignStats />}
    </>
  )
}

export default Stats
