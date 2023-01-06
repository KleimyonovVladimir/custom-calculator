class Memory {
  constructor() {
    this.memory = []
    this.commands = []
  }

  execute(command) {
    const result = command.execute(this.memory[0], command.value)
    this.memory.splice(0, 1, result.toString())
    this.commands.push(command)
  }

  undo() {
    const command = this.commands.pop()
    this.memoryElement = command.undo(this.memoryElement, command.value)
    this.memory.splice(0, 1, this.memoryElement)
  }

  getMemory() {
    return this.memory
  }

  setMemory(memory) {
    this.memory = memory
  }
}

export default Memory
