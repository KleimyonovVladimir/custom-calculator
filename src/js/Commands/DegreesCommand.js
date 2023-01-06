import { noop } from '../../utils/noop'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

export const calculateDegree = (current, degree) => Number(current) ** degree

const CalculateDegreeCommand = value => new CalculatorCommand(calculateDegree, noop, value)

export default CalculateDegreeCommand
