import Calculator from './js/Calculator/Calculator'
import Memory from './js/Memory/Memory'

import AddNumbersCommand from './js/Commands/AddNumbersCommand'
import AppendNumberCommand from './js/Commands/AppendNumberCommand'
import CalculateCustomDegreeCommand from './js/Commands/CalculateCustomDegreeCommand'
import CalculateFactorialCommand from './js/Commands/CalculateFactorialCommand'
import CalculatePercentCommand from './js/Commands/CalculatePercentCommand'
import ChangeSignCommand from './js/Commands/ChangeSignCommand'
import CustomRootCommand from './js/Commands/CustomRootCommand'
import CalculateDegreeCommand from './js/Commands/DegreesCommand'
import DivideNumbersCommand from './js/Commands/DivideNumbersCommand'
import MemoryMinusCommand from './js/Commands/MemoryMinusCommand'
import MultiplyNumbersCommand from './js/Commands/MultiplyNumbersCommand'
import OneDivideNumberCommand from './js/Commands/OneDivideNumberCommand'
import RootsCommand from './js/Commands/RootsCommand'
import SubNumbersCommand from './js/Commands/SubNumbersCommand'
import TenToDegreeCommand from './js/Commands/TenToDegreeCammand'

import customRoot from './assets/custom-root.png'
import cubeRoot from './assets/cube-root.png'
import squareRoot from './assets/square-root.png'

import * as elements from './js/elementsFromHtml/elementsFromHtml'

import './styles/main.css'

elements.customRootImage.src = customRoot
elements.cubeRootImage.src = cubeRoot
elements.squareRootImage.src = squareRoot

const calculator = new Calculator()
const memory = new Memory()

const compute = () => {
  const operation = calculator.getOperation()
  const prev = calculator.getPrevValue()

  switch (operation) {
    case '+':
      calculator.execute(new AddNumbersCommand(prev))
      break
    case '-':
      calculator.execute(new SubNumbersCommand(prev))
      break
    case '*':
      calculator.execute(new MultiplyNumbersCommand(prev))
      break
    case '÷':
      calculator.execute(new DivideNumbersCommand(prev))
      break
    case '^':
      calculator.execute(new CalculateCustomDegreeCommand(prev))
      break
    case 'yroot':
      calculator.execute(new CustomRootCommand(prev))
      break
    default:
      break
  }
}

const updateScreen = () => {
  const prev = calculator.getPrevValue()
  const current = calculator.getCurrentValue()
  const operation = calculator.getOperation()

  elements.currentOperandTextElement.innerText = current

  if (prev !== '' && operation !== '') {
    elements.prevOperandTextElement.innerText = `${prev}${operation}`
  } else {
    elements.prevOperandTextElement.innerText = prev
  }
}

const calculateCustomDegree = operation => {
  const current = calculator.getCurrentValue()
  const prev = calculator.getPrevValue()

  calculator.setOperation(operation)

  if (current === '') return
  if (prev !== '') {
    compute()

    // after compute(), the result is putting in 'this.current' (class Calculator)
    // calculator.getCurrentValue() is passed to setPrevValue, because the answer was stored there
    // but the old value is stored in the 'current' variable
    // and we can't put it in here, because we need to display a result in the previous value
    calculator.setPrevValue(calculator.getCurrentValue())
  } else {
    calculator.setPrevValue(current)
  }

  calculator.setCurrentValue('')
}

elements.numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.execute(new AppendNumberCommand(button.innerText))
    updateScreen()
  })
})
elements.mainOperationButtons.forEach(button => {
  button.addEventListener('click', () => {
    const operation = button.dataset.operation || button.innerText

    const prev = calculator.getPrevValue()
    const current = calculator.getCurrentValue()

    if (prev !== '' && current === '') {
      calculator.setOperation(operation)
      updateScreen()

      return
    }
    if (prev !== '') compute()
    if (calculator.getIsError()) {
      //  update screen to show an error message
      updateScreen()
      return
    }

    calculator.setOperation(operation)
    calculator.setPrevValue(calculator.getCurrentValue())
    calculator.setCurrentValue('')

    updateScreen()
  })
})

elements.clearButton.addEventListener('click', () => {
  calculator.setCurrentValue('0')
  calculator.setPrevValue('')
  calculator.setOperation('')

  updateScreen()
})

elements.percentButton.addEventListener('click', () => {
  const prev = calculator.getPrevValue()

  calculator.execute(new CalculatePercentCommand(prev))

  updateScreen()
})

elements.signChange.addEventListener('click', () => {
  const current = calculator.getCurrentValue()

  if (current === '' || current === '0') return

  calculator.execute(new ChangeSignCommand())

  updateScreen()
})

elements.allDegrees.forEach(button => {
  button.addEventListener('click', () => {
    const { degree } = button.dataset

    calculator.execute(new CalculateDegreeCommand(degree))

    updateScreen()
  })
})

elements.customDegreeButton.addEventListener('click', () => {
  if (calculator.getIsError()) return

  calculateCustomDegree('^')

  updateScreen()
})

elements.allRoots.forEach(button => {
  button.addEventListener('click', () => {
    const { root } = button.dataset

    calculator.execute(new RootsCommand(root))

    updateScreen()
  })
})

elements.customRootButton.addEventListener('click', () => {
  if (calculator.getIsError()) return

  calculateCustomDegree('yroot')

  updateScreen()
})

elements.factorialButton.addEventListener('click', () => {
  if (calculator.getIsError()) return

  calculator.execute(new CalculateFactorialCommand())

  updateScreen()
})

elements.oneDivideNumberButton.addEventListener('click', () => {
  calculator.execute(new OneDivideNumberCommand())

  updateScreen()
})

elements.tenToDegreeButton.addEventListener('click', () => {
  if (calculator.getIsError()) return

  calculator.execute(new TenToDegreeCommand())

  updateScreen()
})

elements.equelElement.addEventListener('click', () => {
  compute()

  calculator.setPrevValue('')
  calculator.setOperation('')

  updateScreen()
})
elements.memorySaveButton.addEventListener('click', () => {
  if (calculator.getIsError()) return

  const currentMemory = [...memory.getMemory()]
  if (calculator.getCurrentValue() === '') return
  currentMemory.unshift(calculator.getCurrentValue())

  memory.setMemory(currentMemory)
})

elements.memoryClearButton.addEventListener('click', () => {
  memory.setMemory([])
})

elements.memoryPlusButton.addEventListener('click', () => {
  if (memory.getMemory().length === 0 || calculator.getIsError()) return

  memory.execute(new AddNumbersCommand(calculator.getCurrentValue()))
  console.log(memory.getMemory())
})

elements.memoryMinusButton.addEventListener('click', () => {
  if (memory.getMemory().length === 0 || calculator.getIsError()) return

  memory.execute(new MemoryMinusCommand(calculator.getCurrentValue()))
})

elements.memoryRecallButton.addEventListener('click', () => {
  if (calculator.getIsError()) return

  calculator.setCurrentValue(memory.getMemory()[0])

  updateScreen()
})
