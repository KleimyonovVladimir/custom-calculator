import { describe, expect, test } from '@jest/globals'
import { oneDivideNumber } from '../js/Commands/OneDivideNumberCommand'

describe('oneDivideNumber module', () => {
  test('divide 1 / 2 to equal 0.5', () => {
    expect(oneDivideNumber(2)).toBe(0.5)
  })
  test('divide 1 / 0 to throw error', () => {
    expect(() => oneDivideNumber(0)).toThrow('Can not divide by zero')
  })
})