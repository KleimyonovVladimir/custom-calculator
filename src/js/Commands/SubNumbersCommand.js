import { strip } from '../../utils/strip'
import { noop } from '../../utils/noop'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

export const subNumbers = (current, prev) => {
  if (current === '' && prev !== '') {
    return strip(Number(prev) - Number(prev))
  }

  return strip(Number(prev) - Number(current))
}

const SubNumbersCommand = value => new CalculatorCommand(subNumbers, noop, value)

export default SubNumbersCommand
