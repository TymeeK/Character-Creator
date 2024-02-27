import { cleanup, render, screen } from '@testing-library/react'
import Creator from '../app/creator/page'
import Stats from '@/app/creator/stats/stats'
import { describe, expect, it, beforeEach, afterEach } from '@jest/globals'
import userEvent from '@testing-library/user-event'

describe('Creator title', () => {
  beforeEach(() => {
    render(<Creator />)
  })

  afterEach(() => {
    cleanup()
  })

  it('Renders the title heading', () => {
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })

  it('Content of the heading', () => {
    const title = screen.getByRole('heading', {
      level: 1,
    })
    expect(title.innerHTML).toEqual('Agent Creation')
  })
})

describe('Input fields for name', () => {
  beforeEach(() => {
    render(<Creator />)
  })

  afterEach(() => {
    cleanup()
  })

  it('Character name input exists in documemt', () => {
    const characterName = screen.getByPlaceholderText('Character Name')
    expect(characterName).toBeInTheDocument()
  })

  it('User can input character name', async () => {
    const user = userEvent.setup()
    const characterName = screen.getByPlaceholderText('Character Name')
    await user.type(characterName, 'Gorlock the Destroyer')
    expect((characterName as HTMLInputElement).value).toBe(
      'Gorlock the Destroyer'
    )
  })
})
