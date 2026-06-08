import TerminalGroup from './Input'
import { whatis, whoami, help, open, openOptions } from '../commands'
import Intro from '../Intro/Intro'
import { useState } from 'react'
import './Terminal.css'

function Terminal() {
  const inputName = 'terminal-input'
  const [history, setHistory] = useState<{ command: string | null; output: string | null }[]>([
    { command: null, output: null },
  ])
  const [introComplete, setIntroComplete] = useState<boolean>(false)

  const commands: { [key: string]: string } = {
    whatis: whatis,
    whoami: whoami,
    help: help,
  }

  const handleSubmit = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') return

    const target = event.currentTarget as HTMLInputElement
    const command = target?.value
    event.preventDefault()

    if (command === '' || !command) {
      setHistory([...history, { command: null, output: null }])

      return undefined
    }

    if (command.startsWith('open')) {
      const param = command.split(' ')

      if (!openOptions.includes(param[1])) {
        setHistory([
          ...history,
          { command: param[0], output: 'Usage: open [resume | github | linkedin | instagram]' },
          { command: null, output: null },
        ])
      }

      open(param[1])
      history.pop()
      setHistory([...history, { command, output: null }, { command: null, output: null }])

      return undefined
    }

    const mapCommand =
      commands[command] || `Command not found: ${command}. Type \`help\` to see all commands.`

    history.pop()
    setHistory([...history, { command, output: mapCommand }, { command: null, output: null }])

    return undefined
  }

  return (
    <form className='terminal' name='terminal'>
      <Intro setIntroComplete={setIntroComplete} />
      {introComplete &&
        history &&
        history.length > 0 &&
        history.map((item, index) => (
          <TerminalGroup
            name={`${inputName}-${history.length}`}
            command={item.command}
            output={item.output}
            key={`${item.command}-${index}`}
            onSubmit={handleSubmit}
            lastItem={index + 1 === history.length}
          />
        ))}
    </form>
  )
}

export default Terminal
