import { describe, expect, test } from '@jest/globals'
import { calculateDegree } from '../js/Commands/DegreesCommand'
import { calculateCustomDegree } from '../js/Commands/CalculateCustomDegreeCommand'
import { calculateRoot } from '../js/Commands/CustomRootCommand'

describe('calculateDegree module', () => {
  test('degree 5^2  to equal 25', () => {
    expect(calculateDegree(5, 2)).toBe(25)
  })
  test('degree 4^3  to equal 1', () => {
    expect(calculateDegree(4, 3)).toBe(64)
  })
  test('degree 4^0  to equal 1', () => {
    expect(calculateCustomDegree(0, 4)).toBe(1)
  })
  test('degree 4^  to equal 1', () => {
    expect(calculateCustomDegree('', 4)).toBe(256)
  })
  test('degree 3^5  to equal 1', () => {
    expect(calculateCustomDegree(5, 3)).toBe(243)
  })
  test('calculate square root of 25 to equal 5', () => {
    expect(calculateRoot(2, 25)).toBe(5)
  })
  test('calculate cube root of -64 to equal -4', () => {
    expect(calculateRoot(3, -64)).toBe(-4)
  })
  test('calculate cube root of 0.001 to equal 0.1', () => {
    expect(calculateRoot(3, 0.001)).toBe(0.1)
  })
  test('calculate 5-th root of 125 to equal 2.6265', () => {
    expect(calculateRoot(5, 125)).toBeCloseTo(2.6265)
  })
  test('calculate 5-th root of -625 to equal -3.62389', () => {
    expect(calculateRoot(5, -625)).toBeCloseTo(-3.62389)
  })
  test('calculate 0-th root of 125 to equal 2.6265', () => {
    expect(() => calculateRoot(0, 125)).toThrow('Can not divide by zero')
  })
})
