import { noop } from '../../utils/noop'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

export const calculateTenToDegree = current => 10 ** Number(current)
const TenToDegreeCommand = () => new CalculatorCommand(calculateTenToDegree, noop)

export default TenToDegreeCommand
