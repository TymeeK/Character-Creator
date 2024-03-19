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
          skills.map((skill, index) => {
            return (
              <li key={index}>
                {skill.name}: {skill.currentLevel}
              </li>
            )
          })
        ) : (
          <></>
        )}
      </ul>
    </>
  )
}

export default ProfessionSkills
