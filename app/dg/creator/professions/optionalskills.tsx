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
  const [disabled, setDisabled] = useState<Boolean>(false)
  const [isChecked, setIsChecked] = useState<CheckedState>(false)
  const numCheckBoxesClicked = useRef(0)

  const checkCheckBox: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    console.log(e)
    console.log('')
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
            <>
              <Checkbox
                key={index}
                onClick={checkCheckBox}
                checked={isChecked}
              />
              <Label>{element.name}</Label>
              <br />
            </>
          )
        })
      ) : (
        <></>
      )}
    </>
  )
}

export default OptionalSkills
