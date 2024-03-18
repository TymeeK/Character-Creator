import { describe, expect, it, beforeEach } from '@jest/globals'
import RollStats, {
  rollValues,
  removeSmallest,
  calculateTotal,
  areAllElementsSame,
} from '@/app/dg/creator/stats/rollstats'
import { fireEvent, render, screen } from '@testing-library/react'
import { StatLabel } from '@/app/dg/creator/stats/statlabel'

describe('Calculating all stats', () => {
  it('Calculate values greater than 0', () => {
    const rollValue = rollValues([0, 0, 0, 0])
    for (let i = 0; i < rollValue.length; i++) {
      expect(rollValue[i]).toBeGreaterThanOrEqual(0)
    }
  })

  it('Calculate values less than 7', () => {
    const rollValue = rollValues([0, 0, 0, 0])
    for (let i = 0; i < rollValue.length; i++) {
      expect(rollValue[i]).toBeLessThanOrEqual(6)
    }
  })

  it('All stats are same check', () => {
    const sameValue = [1, 1, 1, 1]
    const newValues = areAllElementsSame(sameValue)
    expect(newValues.every(element => element === sameValue[0])).toBeFalsy()
  })

  it('Remove smallest value', () => {
    const smallest = removeSmallest([5, 4, 2, 3])
    expect(smallest).toEqual([5, 4, 3])
  })

  it('Sum values in array', () => {
    const total = calculateTotal([5, 4, 3])
    expect(total).toEqual(12)
  })
})

describe('Test the roll button', () => {
  const elements = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Power',
    'Charisma',
  ]
  beforeEach(() => {
    render(<RollStats />)
  })

  it('Testing if roll button exists', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('Testing Roll button content', () => {
    const button = screen.getByRole('button')
    expect(button.innerHTML).toEqual('Roll Stats (3 tries left)')
  })

  it('Testing roll button click', () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(button.innerHTML).toEqual('Roll Stats (2 tries left)')
  })

  it('Maximum num rolls attempted', () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(button).toBeDisabled()
  })

  it('All stat names are displayed properly', () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)

    for (let i = 0; i < elements.length; i++) {
      const label = screen.getByText(`${elements[i]}`)
      expect(label.innerHTML).toEqual(`${elements[i]}`)
    }
  })

  it('Stat textboxes do not show up', () => {
    for (let i = 0; i < elements.length; i++) {
      const textboxes = screen.queryByPlaceholderText(`${elements[i]} stat`)
      expect(textboxes).toBeNull()
    }
  })

  it('increment button does not show up', () => {
    const incrementButton = screen.queryByRole('button', {
      name: 'increment',
    })
    expect(incrementButton).toBeNull()
  })

  it('decrement button does not show up', () => {
    const decrementButton = screen.queryByRole('button', {
      name: 'decrement',
    })
    expect(decrementButton).toBeNull()
  })
})
