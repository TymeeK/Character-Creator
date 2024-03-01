import { describe, expect, it, beforeEach } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import AssignStats, {
  subtract,
  add,
  isLessThanDefault as isLessThanDefault,
  isGreaterThanZero as isGreaterThanZero,
  isMax,
} from '@/app/creator/stats/assignstats'
import { Statistics } from '@/Delta Green/Types/types'
import userEvent from '@testing-library/user-event'

describe('Total number of stats calculated', () => {
  const totalStats = 72
  const amountToSubtract = 10
  const maxStats = 18

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
  it('Stats are maxed out', () => {
    const max = isMax(maxStats)
    expect(max).toBeTruthy()
  })
})

describe('Rendering AssignStats component', () => {
  const statNames: Statistics<number> = {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Power: 0,
    Charisma: 0,
  }
  const user = userEvent.setup()

  beforeEach(() => {
    render(<AssignStats />)
  })

  it('Starting stats is 72', () => {
    const label = screen.getByText('72 points remaining')
    expect(label).toBeInTheDocument()
  })

  it('Render stat numbers as labels', () => {
    const input = screen.getAllByText('0')
    for (let i = 0; i < input.length; i++) {
      expect(input[i]).toBeInTheDocument()
    }
  })

  it('Stat should decrease', async () => {
    const stat = screen.getByText('72 points remaining')
    const incrementButton = screen.getAllByTestId('increment')
    await user.click(incrementButton[0])
    expect(stat.innerHTML).toBe('71 points remaining')
  })

  it('Stat should increase', async () => {
    const stat = screen.getByText('72 points remaining')
    const decrementButton = screen.getAllByTestId('decrement')
    await user.click(decrementButton[0])
    expect(stat.innerHTML).toBe('72 points remaining')
  })

  it("Stat shouldn't go below 0", async () => {
    const stat = screen.getByText('72 points remaining')
    const incrementButton = screen.getAllByTestId('increment')
    for (let i = 0; i < 18; i++) {
      for (let j = 0; j < 5; j++) {
        await user.click(incrementButton[j])
      }
    }
    expect(stat.innerHTML).toBe('0 points remaining')
  })

  it('Input should be updated by 1 if incremented', async () => {
    const label = screen.getAllByText('0')
    const increment = screen.getAllByTestId('increment')
    for (let i = 0; i < label.length; i++) {
      await user.click(increment[i])
      expect(label[i].innerHTML).toBe('1')
    }
  })

  it('Label should be decremented when clicking decrement', async () => {
    const label = screen.getAllByText('0')
    const decrement = screen.getAllByTestId('decrement')
    for (let i = 0; i < label.length; i++) {
      await user.click(decrement[i])
      expect(label[i].innerHTML).toBe('0')
    }
  })

  it('Label should not go past 18', async () => {
    const label = screen.getAllByText('0')
    const increment = screen.getAllByTestId('increment')
    for (let i = 0; i < 21; i++) {
      await user.click(increment[0])
    }
    expect(label[0].innerHTML).toBe('18')
  })
  const checkIfMaxOrZero = async () => {
    const label = screen.getByText('72 points remaining')
    const increment = screen.getAllByTestId('increment')
    for (let i = 0; i < 20; i++) {
      await user.click(increment[0])
    }
    return label
  }
  it('Label should not increase if stat is 18', async () => {
    const label = await checkIfMaxOrZero()
    expect(label.innerHTML).toBe('54 points remaining')
  })

  it('Label should not decrease if stat is at 0', async () => {
    const label = await checkIfMaxOrZero()
    const decrement = screen.getAllByTestId('decrement')
    await user.click(decrement[1])
    await user.click(decrement[1])
    expect(label.innerHTML).toBe('54 points remaining')
  })

  it('Increment value by 5', async () => {
    const label = screen.getByText('72 points remaining')
    const increment = screen.getAllByTestId('increment')
    await user.keyboard('{Shift>}')
    await user.click(increment[0])
    await user.keyboard('{/Shift}')
    expect(label.innerHTML).toBe('67 points remaining')
  })

  it('Decrement value by 5', async () => {
    const label = screen.getByText('72 points remaining')
    const increment = screen.getAllByTestId('increment')
    await user.keyboard('{Shift>}')
    await user.click(increment[0])
    await user.click(increment[0])
    await user.click(increment[0])
    await user.click(increment[0])
    await user.click(increment[0])
    await user.click(increment[0])
    await user.keyboard('{/Shift}')

    const decrement = screen.getAllByTestId('decrement')
    await user.keyboard('{Shift>}')
    await user.click(decrement[0])
    await user.click(decrement[0])
    await user.keyboard('{/Shift}')
    expect(label.innerHTML).toBe('64 points remaining')
  })

  it('Value cannot be greater than 18 if incremented by 5', async () => {
    const statLabel = screen.getAllByText('0')
    const increment = screen.getAllByTestId('increment')
    await user.keyboard('{Shift>}')
    await user.click(increment[0])
    await user.click(increment[0])
    await user.click(increment[0])
    await user.click(increment[0])
    await user.keyboard('{/Shift}')

    expect(statLabel[0].innerHTML).toBe('18')
  })

  it('Value cannot be lower than 18 if decremented by 5', async () => {
    const statLabel = screen.getAllByText('0')
    const label = screen.getByText('72 points remaining')
    const increment = screen.getAllByTestId('increment')
    await user.click(increment[0])
    const decrement = screen.getAllByTestId('decrement')
    await user.keyboard('{Shift>}')
    await user.click(decrement[0])
    await user.keyboard('{/Shift}')
    expect(statLabel[0].innerHTML).toBe('0')
    expect(label.innerHTML).toBe('72 points remaining')
  })

  it('Cannot add more values if remaining stat points are 0', async () => {
    const label = screen.getByText('72 points remaining')
    const increment = screen.getAllByTestId('increment')
    for (let i = 0; i < increment.length; i++) {
      for (let j = 0; j < 4; j++) {
        await user.keyboard('{Shift>}')
        await user.click(increment[i])
        await user.keyboard('{/Shift}')
      }
    }
    expect(label.innerHTML).toBe('0 points remaining')
  })
})
