import { noop } from '../../utils/noop'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

export const divideNumbers = (current, prev) => {
  if (Number(current) === 0) {
    throw new Error('Can not divide by zero')
  }
  if (!current && prev) {
    return Number(prev) / Number(prev)
  }

  return Number(prev) / Number(current)
}

const DivideNumbersCommand = value => new CalculatorCommand(divideNumbers, noop, value)

export default DivideNumbersCommand
