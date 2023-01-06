import { noop } from '../../utils/noop'
import { strip } from '../../utils/strip'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

export const multiplyNumbers = (current, prev) => {
  if (current === '' && prev !== '') {
    return strip(Number(prev) * Number(prev))
  }

  return strip(Number(prev) * Number(current))
}

const MultiplyNumbersCommand = value => new CalculatorCommand(multiplyNumbers, noop, value)

export default MultiplyNumbersCommand
