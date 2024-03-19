import { Professions } from '@/Delta Green/Types/professions'
import React, { Fragment } from 'react'

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
          return <li key={index}>{element.name}</li>
        })
      ) : (
        <></>
      )}
    </>
  )
}

export default OptionalSkills
