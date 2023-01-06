import { noop } from '../../utils/noop'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

const calculateFactorial = current => {
  if (Number(current) === 0) return 1
  if (Number(current) < 0) throw new Error('Incorrect data entered')

  return Number(current) !== 1 ? Number(current) * calculateFactorial(Number(current) - 1) : 1
}

const CalculateFactorialCommand = () => new CalculatorCommand(calculateFactorial, noop)

export default CalculateFactorialCommand
