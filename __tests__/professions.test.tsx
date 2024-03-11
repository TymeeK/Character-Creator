import Professions from '@/app/creator/professions/professions'
import { describe, expect, it, beforeEach } from '@jest/globals'
import { render, screen } from '@testing-library/react'

describe('Selecting a profession', () => {
  it('Profession component is rendered', () => {
    render(<Professions />)
  })

  beforeEach(() => {
    render(<Professions />)
  })
})
