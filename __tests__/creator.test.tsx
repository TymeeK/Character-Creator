import { cleanup, render, screen } from '@testing-library/react'
import Creator from '../app/creator/page'
import {
  describe,
  expect,
  it,
  beforeAll,
  beforeEach,
  afterEach,
} from '@jest/globals'
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
    expect(title.innerHTML).toEqual('Character Creator')
  })
})

describe('Input fields for character attributes', () => {
  beforeEach(() => {
    render(<Creator />)
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
