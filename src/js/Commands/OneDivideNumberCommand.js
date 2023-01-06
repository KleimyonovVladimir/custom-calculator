import { noop } from '../../utils/noop'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

export const oneDivideNumber = current => {
  if (Number(current) === 0) {
    throw new Error('Can not divide by zero')
  }

  return 1 / Number(current)
}

const OneDivideNumberCommand = () => new CalculatorCommand(oneDivideNumber, noop)

export default OneDivideNumberCommand
