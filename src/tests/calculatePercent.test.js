import { describe, expect, test } from '@jest/globals'
import { calculatePercent } from '../js/Commands/CalculatePercentCommand'

describe('calculatePercent module', () => {
  test('calculate 10% from 150 to equal 15', () => {
    expect(calculatePercent(10, 150)).toBe(15)
  })
  test('calculate 1% from 123 to equal 1.23', () => {
    expect(calculatePercent(1, 123)).toBe(1.23)
  })
})
