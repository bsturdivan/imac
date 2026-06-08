function Input({
  name,
  onSubmit,
}: {
  name: string
  onSubmit?: (event: React.KeyboardEvent) => void
}) {
  return (
    <input
      type='text'
      className='text-container'
      name={name}
      autoFocus
      autoComplete='off'
      autoCorrect='off'
      onKeyDown={onSubmit}
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
  lastItem,
}: {
  name: string
  command: string | null
  output: string | null
  onSubmit?: (event: React.KeyboardEvent) => void
  lastItem: boolean
}) {
  return (
    <fieldset className='terminal-group'>
      <div className='terminal-line'>
        <div className='line-prefix'>
          <span className='line-user'>b@sturd&nbsp;</span>
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
