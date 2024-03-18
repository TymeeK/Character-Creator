import { Professions } from '@/Delta Green/Types/professions'
import React from 'react'

type props = {
  profession: Professions | undefined
}

const ProfessionSkills: React.FC<props> = ({ profession }: props) => {
  const skills = profession ? profession.professionalSkills : undefined

  return (
    <>
      <ul>
        {skills ? (
          Object.keys(skills).map((skill: string, index: number) => {
            return <li key={index}>{skill}:</li>
          })
        ) : (
          <></>
        )}
      </ul>
    </>
  )
}

export default ProfessionSkills
