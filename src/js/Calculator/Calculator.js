class Calculator {
  constructor() {
    this.current = '0'
    this.prev = ''
    this.commands = []
    this.operation = ''
    this.isError = false
  }

  execute(command) {
    try {
      if (this.isError) {
        this.current = '0'
        this.isError = false
      }

      const result = command.execute(this.current, command.value)
      this.current = result.toString()
      this.commands.push(command)
    } catch (error) {
      this.isError = true
      this.current = error
      this.prev = ''
      this.operation = ''
    }
  }

  undo() {
    const command = this.commands.pop()
    this.current = command.undo(this.current, command.value)
  }

  getCurrentValue() {
    return this.current
  }

  setCurrentValue(value) {
    this.current = value
  }

  getPrevValue() {
    return this.prev
  }

  setPrevValue(value) {
    this.prev = value
  }

  getOperation() {
    return this.operation
  }

  setOperation(operation) {
    this.operation = operation
  }

  getIsError() {
    return this.isError
  }
}

export default Calculator
