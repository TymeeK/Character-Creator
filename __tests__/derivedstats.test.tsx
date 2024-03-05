import DerivedStats, { calculateHP } from '@/app/creator/stats/derivedstats'
import { describe, it, beforeEach, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

describe('Derived Stats component', () => {
  const strength = 10
  const constitution = 12

  beforeEach(() => {
    render(<DerivedStats constitution={constitution} strength={strength} />)
  })
  it('DerivedStats component is rendered', () => {
    render(<DerivedStats constitution={constitution} strength={strength} />)
  })

  it('Derived Stats has hp label', () => {
    const hpLabel = screen.getByText('hp')
    expect(hpLabel).toBeInTheDocument()
  })

  it('Calculates derived hp stats', () => {
    const hp = calculateHP(strength, constitution)
    expect(hp).toBe(11)
  })
})
