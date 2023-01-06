import { noop } from '../../utils/noop'
import { strip } from '../../utils/strip'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

export const calculateRoot = (current, prev) => {
  if (Number(current) === 0) {
    throw new Error('Can not divide by zero')
  }
  if ((Number(prev) < 0 && Number(current) % 2 === 0) || current < 0) {
    throw new Error('Incorrect data entered')
  }
  if (Number(prev) < 0 && Number(current) % 2 !== 0) {
    return strip(-(Number(-prev) ** (1 / current)))
  }
  if (!current && prev) {
    return strip(Number(prev) ** (1 / prev))
  }

  return strip(Number(prev) ** (1 / current))
}

const CustomRootCommand = value => new CalculatorCommand(calculateRoot, noop, value)

export default CustomRootCommand
