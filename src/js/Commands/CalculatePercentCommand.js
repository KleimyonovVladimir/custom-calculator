import { noop } from '../../utils/noop'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

export const calculatePercent = (current, prev) => (Number(prev) * Number(current)) / 100

const CalculatePercentCommand = value => new CalculatorCommand(calculatePercent, noop, value)

export default CalculatePercentCommand
