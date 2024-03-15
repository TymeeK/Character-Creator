import ProfessionDropDown from '@/app/creator/professions/page'
import { describe, expect, it, beforeEach } from '@jest/globals'
import { render, screen } from '@testing-library/react'

describe('Selecting a profession', () => {
  it('Profession component is rendered', () => {
    render(<ProfessionDropDown />)
  })

  beforeEach(() => {
    render(<ProfessionDropDown />)
  })
})
