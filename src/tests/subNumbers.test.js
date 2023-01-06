import { describe, expect, test } from '@jest/globals'
import { subNumbers } from '../js/Commands/SubNumbersCommand'

describe('subNumbers module', () => {
  test('subs 1 - 2 to equal -1', () => {
    expect(subNumbers(2, 1)).toBe(-1)
  })
  test('subs 0.00005 - 0.00005 to equal 0', () => {
    expect(subNumbers(0.00005, 0.00005)).toBeCloseTo(0)
  })
})
