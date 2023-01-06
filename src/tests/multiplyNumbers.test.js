import { describe, expect, test } from '@jest/globals'
import { multiplyNumbers } from '../js/Commands/MultiplyNumbersCommand'

describe('multiplyNumbers module', () => {
  test('multiply 101 * 2 to equal 3', () => {
    expect(multiplyNumbers(101, 2)).toBe(202)
  })
  test('multiply 0.1 * 0.2 to equal 0.02', () => {
    expect(multiplyNumbers(0.1, 0.2)).toBeCloseTo(0.02)
  })
})