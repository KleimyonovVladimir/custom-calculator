import { describe, expect, test } from '@jest/globals'
import { changeSign } from '../js/Commands/ChangeSignCommand'

describe('changeSign module', () => {
  test('changeSign 10 to equal -10', () => {
    expect(changeSign(10)).toBe(-10)
  })
  test('changeSign -0.01 to equal 0.01', () => {
    expect(changeSign(-0.01)).toBe(0.01)
  })
})
