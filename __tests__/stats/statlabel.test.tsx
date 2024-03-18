import { describe, expect, it, beforeEach } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import { StatLabel } from '@/app/dg/creator/stats/statlabel'

describe('StatLabel for RollStats Component', () => {
  const element = 'Strength'
  const stats = 10

  beforeEach(() => {
    render(
      <StatLabel
        element={element}
        stats={stats}
        isAssigned={false}
        statPoints={72}
      />
    )
  })

  it('The element is in the document', () => {
    const label = screen.getByText(`${element}`)
    expect(label).toBeInTheDocument()
  })

  it('The stat number displays correctly', () => {
    const label = screen.getByText(`${stats}`)
    expect(label).toBeInTheDocument()
  })
})

describe('StatLabel for AssignStats page', () => {
  const element = 'Dexterity'
  const stats = 18
  beforeEach(() => {
    render(
      <StatLabel
        element={element}
        stats={stats}
        isAssigned={true}
        statPoints={72}
      />
    )
  })

  it('+ button for increasing stats', () => {
    const plusButton = screen.getByText('+')
    expect(plusButton).toBeInTheDocument()
  })

  it('- button for decreasing stats', () => {
    const minusButton = screen.getByText('-')
    expect(minusButton).toBeInTheDocument()
  })
})
