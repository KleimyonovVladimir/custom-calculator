import CalculatorCommand from '../CalculatorCommand/CalculatorCommand'

import { strip } from '../../utils/strip'
import { noop } from '../../utils/noop'

export const calculateRoots = (current, root) => {
  if (Number(current) < 0 && Number(root) % 2 === 0) throw new Error('Incorrect data entered')
  if (Number(current) < 0 && Number(root) % 2 !== 0) {
    return strip(-(Number(-current) ** (1 / root)))
  }

  return strip(Number(current) ** (1 / root))
}

const RootsCommand = value => new CalculatorCommand(calculateRoots, noop, value)

export default RootsCommand
