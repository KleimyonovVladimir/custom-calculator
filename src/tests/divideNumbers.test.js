import { describe, expect, test } from '@jest/globals'
import { divideNumbers } from '../js/Commands/DivideNumbersCommand'

describe('divideNumbers module', () => {
  test('divide 10 / 2 to equal 5', () => {
    expect(divideNumbers(2, 10)).toBe(5)
  })
  test('divide 120 / 0 to throw error', () => {
    expect(() => divideNumbers(0, 120)).toThrow('Can not divide by zero')
  })
})