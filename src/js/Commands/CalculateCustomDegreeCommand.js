import { noop } from '../../utils/noop'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

export const calculateCustomDegree = (current, prev) => {
  if (current === '' && prev !== '') {
    return Number(prev) ** Number(prev)
  }

  return Number(prev) ** Number(current)
}
const CalculateCustomDegreeCommand = value =>
  new CalculatorCommand(calculateCustomDegree, noop, value)

export default CalculateCustomDegreeCommand
