import React from 'react'
import ProfessionDropdown from './dropdown'

const Creator = () => {
  return (
    <>
      <div>
        <h1>Character Creator</h1>
        <input type="text" placeholder="Character Name" />
        <ProfessionDropdown />
      </div>
    </>
  )
}

export default Creator
