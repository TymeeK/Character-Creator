import { Professions } from '@/Delta Green/Types/professions'
import React, { Fragment, useRef, useState } from 'react'

type props = {
  profession: Professions | undefined
}
const OptionalSkills: React.FC<props> = ({ profession }) => {
  const optional = profession ? profession.options : undefined
  const numChecked = useRef(0)

  const checkCheckBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target: EventTarget & HTMLInputElement = e.target
    target.checked ? numChecked.current++ : numChecked.current--
  }

  return (
    <>
      <h2 className='text-center'>Optional Skills</h2>
      {optional ? (
        <>
          <label>
            Pick {optional.num} skills from the {optional.skills.length}
          </label>
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
              <label>{element.name}</label>
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
