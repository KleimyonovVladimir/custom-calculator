import { describe, expect, test } from '@jest/globals'
import { calculateTenToDegree } from '../js/Commands/TenToDegreeCammand'

describe('calculateTenToDegree module', () => {
  test('degree 10^0  to equal 1', () => {
    expect(calculateTenToDegree(0)).toBe(1)
  })
  test('degree 10^-2  to equal 0.01', () => {
    expect(calculateTenToDegree(-2)).toBe(0.01)
  })
})