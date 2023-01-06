import { noop } from '../../utils/noop'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

export const changeSign = current => Number(-current)

const ChangeSignCommand = value => new CalculatorCommand(changeSign, noop, value)

export default ChangeSignCommand
