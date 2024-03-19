import { Professions } from '@/Delta Green/Types/professions'
import React, { Fragment, useRef, useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { CheckedState } from '@radix-ui/react-checkbox'

type props = {
  profession: Professions | undefined
}
const OptionalSkills: React.FC<props> = ({ profession }) => {
  const optional = profession ? profession.options : undefined
  const numChecked = useRef(0)

  const checkCheckBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target: EventTarget & HTMLInputElement = e.target
    console.log(`Element is checked: ${target.checked}`)
    target.checked ? numChecked.current++ : numChecked.current--
  }

  return (
    <>
      <h2 className='text-center'>Optional Skills</h2>
      {optional ? (
        <>
          <Label>
            Pick {optional.num} skills from the {optional.skills.length}
          </Label>
          <br />
        </>
      ) : (
        <></>
      )}
      {optional ? (
        optional.skills.map((element, index) => {
          return (
            <Fragment key={index}>
              <input
                type='checkbox'
                onChange={checkCheckBox}
                name={`${element.name}`}
              />
              <Label>{element.name}</Label>
              <br />
            </Fragment>
          )
        })
      ) : (
        <></>
      )}
    </>
  )
}

export default OptionalSkills
