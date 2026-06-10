import { useState } from 'react'
import { intro } from '../commands'
import Line from './Line'

function Intro({ setIntroComplete }: { setIntroComplete: (value: boolean) => void }) {
  const [renderedLines, setRenderedLines] = useState<string[]>([intro[0]])
  const [abortedIntro, setAbortedIntro] = useState<boolean>(false)

  const handleAbortIntro = () => {
    setIntroComplete(true)
    setAbortedIntro(true)
  }

  if (abortedIntro) {
    return null
  }

  return (
    <>
      {renderedLines.length <= intro.length &&
        renderedLines.map((item, index) => (
          <Line
            text={item}
            index={index}
            key={item}
            allText={intro}
            setRenderedLines={setRenderedLines}
            setIntroComplete={setIntroComplete}
            onAbortIntro={handleAbortIntro}
          />
        ))}
    </>
  )
}

export default Intro
