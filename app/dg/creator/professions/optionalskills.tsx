import { Professions } from '@/Delta Green/Types/professions'
import React, { Fragment } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

type props = {
  profession: Professions | undefined
}
const OptionalSkills: React.FC<props> = ({ profession }) => {
  const optional = profession ? profession.options : undefined
  return (
    <>
      <h2 className='text-center'>Optional Skills</h2>
      {optional ? (
        <li>
          Pick {optional.num} skills from the {optional.skills.length}
        </li>
      ) : (
        <></>
      )}
      {optional ? (
        optional.skills.map((element, index) => {
          return (
            <>
              <Checkbox key={index} />
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
