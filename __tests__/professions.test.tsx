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

  it('h1 tag title in Professions', () => {
    const h1: HTMLElement = screen.getByRole('heading', { level: 1 })
    expect(h1).toBeInTheDocument()
  })

  it('Select combobox is in document', () => {
    const dropdown: HTMLElement = screen.getByRole('combobox')
    expect(dropdown).toBeInTheDocument()
  })
})
