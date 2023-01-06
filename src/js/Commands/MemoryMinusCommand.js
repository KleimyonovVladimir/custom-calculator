import { noop } from '../../utils/noop'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

export const memorySubNumbers = (memoryElement, current) => Number(memoryElement) - Number(current)

const MemoryMinusCommand = value => new CalculatorCommand(memorySubNumbers, noop, value)

export default MemoryMinusCommand
