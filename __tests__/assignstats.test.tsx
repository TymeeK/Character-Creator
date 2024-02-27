import { describe, expect, it, beforeEach } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import AssignStats, {
  subtract,
  add,
  isLessThanDefault as isLessThanDefault,
  isGreaterThanZero as isGreaterThanZero,
} from '@/app/creator/stats/assignstats'
import { Statistics } from '@/Delta Green/Types/types'
import userEvent from '@testing-library/user-event'

describe('Total number of stats calculated', () => {
  const totalStats = 72
  const amountToSubtract = 10

  it('Subtract from starting stats', () => {
    const value = subtract(totalStats, amountToSubtract)
    expect(value).toEqual(62)
  })

  it('Add to stats when user removes stats', () => {
    const remaining = add(40, 6)
    expect(remaining).toEqual(46)
  })

  it('Assigned Stats is greater than 72', () => {
    const statTotal = isLessThanDefault(totalStats + 1)
    expect(statTotal).toBeFalsy()
  })

  it('Assigned stats is less than 72', () => {
    const statTotal = isLessThanDefault(totalStats - 1)
    expect(statTotal).toBeTruthy()
  })

  it('Assigned stats is less or equal to 0', () => {
    const statTotal = isGreaterThanZero(0)
    expect(statTotal).toBeFalsy()
  })

  it('Assigned stats is greater than zero', () => {
    const statTotal = isGreaterThanZero(10)
    expect(statTotal).toBeTruthy()
  })
})

describe('Rendering AssignStats component', () => {
  const statNames: Statistics<number> = {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Power: 0,
    Charisma: 0,
  }
  beforeEach(() => {
    render(<AssignStats />)
  })

  it('Starting stats is 72', () => {
    const label = screen.getByText('72 points remaining')
    expect(label).toBeInTheDocument()
  })

  it('Render stat numbers as textboxes', () => {
    Object.keys(statNames).forEach((element) => {
      const input = screen.getByPlaceholderText(`${element} stat`)
      expect(input).toBeInTheDocument()
    })
  })

  it('Stat number labels should not render', () => {
    const label = screen.queryAllByText('0')
    expect(label).toEqual([])
  })

  it('Stat should decrease as user types', async () => {
    const user = userEvent.setup()
    const stat = screen.getByText('72 points remaining')
    const textbox = screen.getByPlaceholderText(`Strength stat`)

    await user.type(textbox, '10')
    expect(stat.innerHTML).toBe('62 points remaining')
  })
})
