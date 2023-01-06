import { noop } from '../../utils/noop'
import { strip } from '../../utils/strip'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

export const addNumbers = (current, prev) => {
  if (current === '' && prev !== '') return strip(Number(prev) + Number(prev))

  return strip(Number(prev) + Number(current))
}

const AddNumbersCommand = value => new CalculatorCommand(addNumbers, noop, value)

export default AddNumbersCommand
