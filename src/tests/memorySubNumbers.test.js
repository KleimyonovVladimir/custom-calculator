import { describe, expect, test } from '@jest/globals'
import { memorySubNumbers } from '../js/Commands/MemoryMinusCommand'

describe('subNumbers module', () => {
  test('subs 15-6 to equal 9', () => {
    expect(memorySubNumbers(15, 6)).toBe(9)
  })
  test('subs 0-5 to equal -5', () => {
    expect(memorySubNumbers(0, 5)).toBe(-5)
  })
})
