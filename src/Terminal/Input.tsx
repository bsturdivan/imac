import { useEffect, useRef } from 'react'

function Input({
  name,
  onSubmit,
}: {
  name: string
  onSubmit?: (event: React.KeyboardEvent) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const terminalLine = inputRef.current

    terminalLine?.focus()
    window.addEventListener('focus', () => terminalLine?.focus())

    return () => {
      window.removeEventListener('focus', () => terminalLine?.focus())
    }
  }, [])

  return (
    <input
      type='text'
      className='text-container'
      name={name}
      autoFocus={true}
      tabIndex={0}
      autoComplete='off'
      autoCorrect='off'
      onKeyDown={onSubmit}
      ref={inputRef}
    />
  )
}

function Command({ text }: { text: string | null }) {
  return <span className='text-container'>{text}</span>
}

function TerminalGroup({
  name,
  command,
  output,
  onSubmit,
  onAbort,
  lastItem,
}: {
  name: string
  command: string | null
  output: string | null
  onSubmit?: (event: React.KeyboardEvent) => void
  onAbort?: (val: boolean) => void
  lastItem: boolean
}) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onAbort?.(true)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onAbort])

  return (
    <fieldset className='terminal-group'>
      <div className='terminal-line'>
        <div className='line-prefix'>
          <span className='line-user'>@bsturd&nbsp;</span>
          <span className='line-prompt-prefix'>~ %&nbsp;</span>
        </div>
        {!lastItem && <Command text={command} />}
        {command === null && lastItem && <Input name={name} onSubmit={onSubmit} />}
      </div>
      {output && <div className='terminal-output'>{output}</div>}
    </fieldset>
  )
}

export default TerminalGroup
