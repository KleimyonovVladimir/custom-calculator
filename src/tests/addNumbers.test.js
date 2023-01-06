import { describe, expect, test } from '@jest/globals'
import { addNumbers } from '../js/Commands/AddNumbersCommand'

describe('addNumbers module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(addNumbers(1, 2)).toBe(3)
  })
  test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(addNumbers(0.1, 0.2)).toBeCloseTo(0.3)
  })
})
