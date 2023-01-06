import { noop } from '../../utils/noop'
import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

const appendNumbers = (currentValue, value) => {
  if (value === '.' && currentValue.includes('.')) return currentValue

  if (currentValue === '' && value === '.') {
    return `0${value}`
  }

  if (currentValue === '0' && value !== '.') {
    return value
  }

  return `${currentValue}${value}`
}

const AppendNumberCommand = value => new CalculatorCommand(appendNumbers, noop, value)

export default AppendNumberCommand
