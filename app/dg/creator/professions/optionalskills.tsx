import { Professions } from '@/Delta Green/Types/professions'
import React from 'react'

type props = {
  profession: Professions | undefined
}
const OptionalSkills: React.FC<props> = ({ profession }) => {
  profession?.options
  return <>testing testing testing</>
}

export default OptionalSkills
