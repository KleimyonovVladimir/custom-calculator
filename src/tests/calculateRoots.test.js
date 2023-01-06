import { describe, expect, test } from '@jest/globals'
import { calculateRoots } from '../js/Commands/RootsCommand'

describe('calculateRoots module', () => {
  test('calculate square root of 25 to equal 5', () => {
    expect(calculateRoots(25, 2)).toBe(5)
  })
  test('calculate square root of -16 to throw error', () => {
    expect(() => calculateRoots(-16, 2)).toThrow('Incorrect data entered')
  })
  test('calculate cube root of -64 to equal -4', () => {
    expect(calculateRoots(-64, 3)).toBe(-4)
  })
  test('calculate cube root of 0.001 to equal 0.1', () => {
    expect(calculateRoots(0.001, 3)).toBe(0.1)
  })
})