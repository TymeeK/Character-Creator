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
            const { name, base, currentLevel } = skills[skill as keyof typeof skills]
            return <li key={index}>{name}: {currentLevel}</li>
          })
        ) : (
          <></>
        )}
      </ul>
    </>
  )
}

export default ProfessionSkills
