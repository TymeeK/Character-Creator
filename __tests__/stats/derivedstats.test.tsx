import DerivedStats, {
  calculateBP,
  calculateHP,
  calculateSanity,
} from '@/app/dg/creator/stats/derivedstats'
import { describe, it, beforeEach, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

describe('Derived Stats component', () => {
  const strength = 10
  const constitution = 12
  const power = 9

  beforeEach(() => {
    render(
      <DerivedStats
        constitution={constitution}
        strength={strength}
        power={power}
      />
    )
  })
  it('DerivedStats component is rendered', () => {
    render(
      <DerivedStats
        constitution={constitution}
        strength={strength}
        power={power}
      />
    )
  })

  it('Calculates derived hp stats', () => {
    const hp = calculateHP(strength, constitution)
    expect(hp).toBe(11)
  })

  it('Calculates wp', () => {
    const wp = screen.getByText(power as unknown as string)
    expect(wp.innerHTML).toBe('9')
  })

  it('Calculates sanity', () => {
    const sanity = calculateSanity(power)
    expect(sanity).toBe(45)
  })

  it('Calculates breaking point', () => {
    const breakingPoint = calculateBP(power * 5, power)
    expect(breakingPoint).toBe(36)
  })
})
