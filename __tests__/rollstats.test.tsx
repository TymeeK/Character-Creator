import { describe, expect, it } from '@jest/globals'
import RollStats, {
  rollValues,
  removeSmallest,
  calculateTotal,
} from '@/app/creator/stats/rollstats'

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

  it('Remove smallest value', () => {
    const smallest = removeSmallest([5, 4, 2, 3])
    expect(smallest).toEqual([5, 4, 3])
  })

  it('Sum values in array', () => {
    const total = calculateTotal([5, 4, 3])
    expect(total).toEqual(12)
  })
})
